"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Eye, EyeOff, Loader2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

// Form validation schema
const loginSchema = z.object({
  email: z
    .string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password is too long"),
  rememberMe: z.boolean().optional(),
})

type LoginFormData = z.infer<typeof loginSchema>

interface LoginFormProps {
  onSubmit?: (data: LoginFormData) => Promise<void>
  className?: string
  title?: string
  description?: string
  showRememberMe?: boolean
  showForgotPassword?: boolean
  redirectTo?: string
}

export function LoginForm({
  onSubmit,
  className,
  title = "Welcome back",
  description = "Enter your credentials to access your account",
  showRememberMe = true,
  showForgotPassword = true,
  redirectTo = "/dashboard",
}: LoginFormProps) {
  const router = useRouter()
  const [showPassword, setShowPassword] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const form = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const handleSubmit = async (data: LoginFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Default login implementation
        const response = await fetch("/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Login failed")
        }

        const result = await response.json()
        
        // Handle successful login
        if (result.success) {
          router.push(redirectTo)
        }
      }
    } catch (err) {
      setError(
        err instanceof Error 
          ? err.message 
          : "An unexpected error occurred. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev)
  }

  return (
    <Card className={cn("w-full max-w-md mx-auto", className)}>
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          {title}
        </CardTitle>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              autoComplete="email"
              disabled={isLoading}
              {...form.register("email")}
              className={cn(
                form.formState.errors.email && "border-destructive focus-visible:ring-destructive"
              )}
            />
            {form.formState.errors.email && (
              <p className="text-sm font-medium text-destructive">
                {form.formState.errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="current-password"
                disabled={isLoading}
                {...form.register("password")}
                className={cn(
                  "pr-10",
                  form.formState.errors.password && "border-destructive focus-visible:ring-destructive"
                )}
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={togglePasswordVisibility}
                disabled={isLoading}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Eye className="h-4 w-4 text-muted-foreground" />
                )}
              </Button>
            </div>
            {form.formState.errors.password && (
              <p className="text-sm font-medium text-destructive">
                {form.formState.errors.password.message}
              </p>
            )}
          </div>

          {showRememberMe && (
            <div className="flex items-center space-x-2">
              <input
                id="rememberMe"
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
                disabled={isLoading}
                {...form.register("rememberMe")}
              />
              <Label 
                htmlFor="rememberMe" 
                className="text-sm font-normal cursor-pointer"
              >
                Remember me for 30 days
              </Label>
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={isLoading}
          >
            {isLoading && (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            )}
            {isLoading ? "Signing in..." : "Sign in"}
          </Button>

          {showForgotPassword && (
            <div className="text-center">
              <Button
                type="button"
                variant="link"
                className="text-sm text-muted-foreground hover:text-primary"
                onClick={() => router.push("/auth/forgot-password")}
                disabled={isLoading}
              >
                Forgot your password?
              </Button>
            </div>
          )}
        </form>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <Button
            type="button"
            variant="link"
            className="p-0 h-auto font-medium text-primary hover:underline"
            onClick={() => router.push("/auth/register")}
            disabled={isLoading}
          >
            Sign up
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

// Usage example with Next.js App Router
export default function LoginPage() {
  const handleLogin = async (data: LoginFormData) => {
    // Custom login logic
    console.log("Login attempt:", data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Throw error for demonstration
    // throw new Error("Invalid credentials")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <LoginForm 
        onSubmit={handleLogin}
        title="Welcome back"
        description="Sign in to your account to continue"
        showRememberMe={true}
        showForgotPassword={true}
        redirectTo="/dashboard"
      />
    </div>
  )
}