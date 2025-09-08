// API Integration Patterns for Next.js Applications
// Comprehensive data fetching utilities with error handling, caching, and TypeScript support

import { NextRequest, NextResponse } from 'next/server'

// Types for API responses
export interface ApiResponse<T = any> {
  data?: T
  error?: string
  message?: string
  success: boolean
  status: number
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNext: boolean
    hasPrev: boolean
  }
}

// API Client Configuration
export interface ApiConfig {
  baseUrl: string
  timeout?: number
  retries?: number
  retryDelay?: number
  headers?: Record<string, string>
}

// Error types
export class ApiError extends Error {
  constructor(
    public status: number,
    public message: string,
    public code?: string
  ) {
    super(message)
    this.name = 'ApiError'
  }
}

// API Client Class
export class ApiClient {
  private config: ApiConfig
  private abortControllers: Map<string, AbortController> = new Map()

  constructor(config: ApiConfig) {
    this.config = {
      timeout: 10000,
      retries: 3,
      retryDelay: 1000,
      headers: {
        'Content-Type': 'application/json',
      },
      ...config,
    }
  }

  // Request method with retry logic
  private async request<T>(
    endpoint: string,
    options: RequestInit & { 
      retries?: number
      timeout?: number 
      cacheKey?: string
    } = {}
  ): Promise<ApiResponse<T>> {
    const {
      retries = this.config.retries!,
      timeout = this.config.timeout!,
      cacheKey,
      ...fetchOptions
    } = options

    // Cancel previous request with same cache key
    if (cacheKey && this.abortControllers.has(cacheKey)) {
      this.abortControllers.get(cacheKey)?.abort()
    }

    // Create abort controller for this request
    const abortController = new AbortController()
    if (cacheKey) {
      this.abortControllers.set(cacheKey, abortController)
    }

    // Set up timeout
    const timeoutId = setTimeout(() => abortController.abort(), timeout)

    const url = `${this.config.baseUrl}${endpoint}`
    
    for (let attempt = 0; attempt <= retries; attempt++) {
      try {
        const response = await fetch(url, {
          ...fetchOptions,
          headers: {
            ...this.config.headers,
            ...fetchOptions.headers,
          },
          signal: abortController.signal,
        })

        clearTimeout(timeoutId)
        
        // Clean up abort controller
        if (cacheKey) {
          this.abortControllers.delete(cacheKey)
        }

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}))
          throw new ApiError(
            response.status,
            errorData.message || `HTTP ${response.status}: ${response.statusText}`,
            errorData.code
          )
        }

        const data = await response.json()
        return {
          data,
          success: true,
          status: response.status,
        }
      } catch (error) {
        // Don't retry on abort or client errors (4xx)
        if (
          error.name === 'AbortError' ||
          (error instanceof ApiError && error.status >= 400 && error.status < 500)
        ) {
          clearTimeout(timeoutId)
          throw error
        }

        // Retry on network errors or 5xx errors
        if (attempt < retries) {
          await new Promise(resolve => setTimeout(resolve, this.config.retryDelay! * (attempt + 1)))
          continue
        }

        clearTimeout(timeoutId)
        throw error instanceof ApiError 
          ? error 
          : new ApiError(0, 'Network error occurred')
      }
    }

    throw new ApiError(0, 'Max retries exceeded')
  }

  // GET request
  async get<T>(
    endpoint: string,
    params?: Record<string, any>,
    options?: RequestInit & { cacheKey?: string }
  ): Promise<ApiResponse<T>> {
    const url = params 
      ? `${endpoint}?${new URLSearchParams(params).toString()}`
      : endpoint

    return this.request<T>(url, {
      method: 'GET',
      ...options,
    })
  }

  // POST request
  async post<T>(
    endpoint: string,
    data?: any,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'POST',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    })
  }

  // PUT request
  async put<T>(
    endpoint: string,
    data?: any,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PUT',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    })
  }

  // PATCH request
  async patch<T>(
    endpoint: string,
    data?: any,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'PATCH',
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    })
  }

  // DELETE request
  async delete<T>(
    endpoint: string,
    options?: RequestInit
  ): Promise<ApiResponse<T>> {
    return this.request<T>(endpoint, {
      method: 'DELETE',
      ...options,
    })
  }

  // Cancel request by cache key
  cancelRequest(cacheKey: string): void {
    const controller = this.abortControllers.get(cacheKey)
    if (controller) {
      controller.abort()
      this.abortControllers.delete(cacheKey)
    }
  }

  // Cancel all pending requests
  cancelAllRequests(): void {
    this.abortControllers.forEach(controller => controller.abort())
    this.abortControllers.clear()
  }
}

// React Hook for API calls
import { useState, useEffect, useCallback } from 'react'

export interface UseApiOptions<T> {
  initialData?: T
  enabled?: boolean
  refetchInterval?: number
  refetchOnWindowFocus?: boolean
  onSuccess?: (data: T) => void
  onError?: (error: ApiError) => void
}

export interface UseApiResult<T> {
  data: T | null
  loading: boolean
  error: ApiError | null
  refetch: () => Promise<void>
  mutate: (newData: T | ((prev: T | null) => T)) => void
}

export function useApi<T>(
  apiCall: () => Promise<ApiResponse<T>>,
  options: UseApiOptions<T> = {}
): UseApiResult<T> {
  const {
    initialData = null,
    enabled = true,
    refetchInterval,
    refetchOnWindowFocus = false,
    onSuccess,
    onError,
  } = options

  const [data, setData] = useState<T | null>(initialData)
  const [loading, setLoading] = useState(enabled)
  const [error, setError] = useState<ApiError | null>(null)

  const fetchData = useCallback(async () => {
    if (!enabled) return

    try {
      setLoading(true)
      setError(null)
      
      const response = await apiCall()
      
      if (response.success && response.data) {
        setData(response.data)
        onSuccess?.(response.data)
      }
    } catch (err) {
      const apiError = err instanceof ApiError 
        ? err 
        : new ApiError(0, 'An unexpected error occurred')
      
      setError(apiError)
      onError?.(apiError)
    } finally {
      setLoading(false)
    }
  }, [apiCall, enabled, onSuccess, onError])

  // Initial fetch
  useEffect(() => {
    if (enabled) {
      fetchData()
    }
  }, [fetchData, enabled])

  // Refetch interval
  useEffect(() => {
    if (refetchInterval && enabled) {
      const interval = setInterval(fetchData, refetchInterval)
      return () => clearInterval(interval)
    }
  }, [fetchData, refetchInterval, enabled])

  // Refetch on window focus
  useEffect(() => {
    if (refetchOnWindowFocus && enabled) {
      const handleFocus = () => fetchData()
      window.addEventListener('focus', handleFocus)
      return () => window.removeEventListener('focus', handleFocus)
    }
  }, [fetchData, refetchOnWindowFocus, enabled])

  const mutate = useCallback((newData: T | ((prev: T | null) => T)) => {
    setData(prev => 
      typeof newData === 'function' 
        ? (newData as (prev: T | null) => T)(prev)
        : newData
    )
  }, [])

  return {
    data,
    loading,
    error,
    refetch: fetchData,
    mutate,
  }
}

// Server-side API utilities
export function createApiHandler(
  handler: (req: NextRequest) => Promise<ApiResponse>
) {
  return async (req: NextRequest) => {
    try {
      const result = await handler(req)
      
      return NextResponse.json(result, {
        status: result.status || 200,
        headers: {
          'Cache-Control': 'no-store, max-age=0',
        },
      })
    } catch (error) {
      console.error('API Handler Error:', error)
      
      if (error instanceof ApiError) {
        return NextResponse.json(
          {
            success: false,
            error: error.message,
            code: error.code,
          },
          { status: error.status }
        )
      }

      return NextResponse.json(
        {
          success: false,
          error: 'Internal server error',
        },
        { status: 500 }
      )
    }
  }
}

// Pagination helper
export function createPaginatedResponse<T>(
  data: T[],
  page: number,
  limit: number,
  total: number
): PaginatedResponse<T> {
  const totalPages = Math.ceil(total / limit)
  
  return {
    data,
    success: true,
    status: 200,
    pagination: {
      page,
      limit,
      total,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1,
    },
  }
}

// Example usage
export const apiClient = new ApiClient({
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 15000,
  retries: 2,
})

// Type-safe API functions
export interface User {
  id: string
  email: string
  name: string
  createdAt: string
  updatedAt: string
}

export interface CreateUserData {
  email: string
  name: string
  password: string
}

export const userApi = {
  getUsers: (params?: { page?: number; limit?: number }) =>
    apiClient.get<PaginatedResponse<User>>('/users', params),
  
  getUser: (id: string) =>
    apiClient.get<User>(`/users/${id}`, undefined, { cacheKey: `user-${id}` }),
  
  createUser: (data: CreateUserData) =>
    apiClient.post<User>('/users', data),
  
  updateUser: (id: string, data: Partial<User>) =>
    apiClient.patch<User>(`/users/${id}`, data),
  
  deleteUser: (id: string) =>
    apiClient.delete(`/users/${id}`),
}

// React Hook usage example
export function useUser(id: string) {
  return useApi(
    () => userApi.getUser(id),
    {
      enabled: !!id,
      onError: (error) => {
        console.error('Failed to fetch user:', error.message)
      },
    }
  )
}

export function useUsers(page = 1, limit = 10) {
  return useApi(
    () => userApi.getUsers({ page, limit }),
    {
      refetchOnWindowFocus: true,
    }
  )
}