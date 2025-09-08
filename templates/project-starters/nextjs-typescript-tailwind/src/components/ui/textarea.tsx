import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textareaVariants = cva(
  "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        error: "border-destructive focus-visible:ring-destructive",
        success: "border-green-500 focus-visible:ring-green-500",
      },
      resize: {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      },
    },
    defaultVariants: {
      variant: "default",
      resize: "vertical",
    },
  }
)

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean
  helperText?: string
  maxLength?: number
  showCount?: boolean
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    className, 
    variant, 
    resize, 
    error, 
    helperText, 
    maxLength, 
    showCount = false,
    value,
    onChange,
    ...props 
  }, ref) => {
    const [charCount, setCharCount] = React.useState(0)
    const textareaVariant = error ? "error" : variant

    React.useEffect(() => {
      if (value && typeof value === 'string') {
        setCharCount(value.length)
      }
    }, [value])

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCharCount(e.target.value.length)
      onChange?.(e)
    }

    return (
      <div className="space-y-1">
        <textarea
          className={cn(textareaVariants({ variant: textareaVariant, resize, className }))}
          ref={ref}
          maxLength={maxLength}
          value={value}
          onChange={handleChange}
          {...props}
        />
        <div className="flex justify-between items-center">
          {helperText && (
            <p className={cn(
              "text-xs",
              error ? "text-destructive" : "text-muted-foreground"
            )}>
              {helperText}
            </p>
          )}
          {(showCount || maxLength) && (
            <p className="text-xs text-muted-foreground ml-auto">
              {charCount}
              {maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      </div>
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea, textareaVariants }