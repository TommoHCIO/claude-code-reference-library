import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-8 px-2 text-xs",
        default: "h-10 px-3",
        lg: "h-12 px-4",
      },
      variant: {
        default: "",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
    },
    defaultVariants: {
      size: "default",
      variant: "default",
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  error?: boolean
  helperText?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size, variant, startIcon, endIcon, error, helperText, ...props }, ref) => {
    const inputVariant = error ? "error" : variant

    if (startIcon || endIcon) {
      return (
        <div className="relative">
          {startIcon && (
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {startIcon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              inputVariants({ size, variant: inputVariant }),
              startIcon && "pl-10",
              endIcon && "pr-10",
              className
            )}
            ref={ref}
            {...props}
          />
          {endIcon && (
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
              {endIcon}
            </div>
          )}
          {helperText && (
            <p className={cn(
              "mt-1 text-xs",
              error ? "text-destructive" : "text-muted-foreground"
            )}>
              {helperText}
            </p>
          )}
        </div>
      )
    }

    return (
      <div className="space-y-1">
        <input
          type={type}
          className={cn(inputVariants({ size, variant: inputVariant, className }))}
          ref={ref}
          {...props}
        />
        {helperText && (
          <p className={cn(
            "text-xs",
            error ? "text-destructive" : "text-muted-foreground"
          )}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input, inputVariants }