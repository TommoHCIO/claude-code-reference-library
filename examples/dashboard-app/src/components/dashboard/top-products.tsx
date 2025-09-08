"use client"

import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown } from "lucide-react"
import { topProducts } from '@/data/mock-data'

export function TopProducts() {
  return (
    <div className="space-y-4">
      {topProducts.map((product, index) => (
        <div key={product.id} className="flex items-center space-x-4 p-3 rounded-lg hover:bg-accent transition-colors">
          <div className="flex h-8 w-8 items-center justify-center rounded bg-muted text-sm font-medium">
            #{index + 1}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium leading-none">
              {product.name}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              {product.sales.toLocaleString()} sales
            </p>
          </div>
          <div className="flex flex-col items-end space-y-1">
            <span className="text-sm font-medium">
              {product.revenue}
            </span>
            <div className="flex items-center space-x-1">
              {product.trending === 'up' ? (
                <TrendingUp className="h-3 w-3 text-green-500" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500" />
              )}
              <Badge 
                variant={product.trending === 'up' ? 'default' : 'destructive'}
                className="text-xs"
              >
                {product.growth}
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}