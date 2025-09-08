"use client"

import * as React from "react"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, Send, User, Mail, Phone, MessageCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { SelectField } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { cn } from "@/lib/utils"

// Comprehensive validation schema
const contactSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name must contain only letters"),
  
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must not exceed 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name must contain only letters"),
  
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email address")
    .max(100, "Email must not exceed 100 characters"),
  
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val),
      "Please enter a valid phone number"
    ),
  
  subject: z
    .string()
    .min(1, "Subject is required")
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must not exceed 100 characters"),
  
  category: z
    .string()
    .min(1, "Please select a category"),
  
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters"),
  
  priority: z
    .string()
    .min(1, "Please select a priority level"),
  
  newsletter: z.boolean().optional(),
  
  terms: z
    .boolean()
    .refine((val) => val === true, "You must agree to the terms and conditions"),
})

type ContactFormData = z.infer<typeof contactSchema>

// Category options
const categoryOptions = [
  { value: "general", label: "General Inquiry" },
  { value: "support", label: "Technical Support" },
  { value: "sales", label: "Sales" },
  { value: "billing", label: "Billing" },
  { value: "feedback", label: "Feedback" },
  { value: "partnership", label: "Partnership" },
  { value: "other", label: "Other" },
]

// Priority options
const priorityOptions = [
  { value: "low", label: "Low - General question" },
  { value: "medium", label: "Medium - Need assistance" },
  { value: "high", label: "High - Urgent issue" },
  { value: "critical", label: "Critical - System down" },
]

interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>
  className?: string
  showPriority?: boolean
  showNewsletter?: boolean
  defaultCategory?: string
}

export function ContactForm({
  onSubmit,
  className,
  showPriority = true,
  showNewsletter = true,
  defaultCategory,
}: ContactFormProps) {
  const [isLoading, setIsLoading] = React.useState(false)
  const [submitSuccess, setSubmitSuccess] = React.useState(false)
  const [submitError, setSubmitError] = React.useState<string | null>(null)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      category: defaultCategory || "",
      message: "",
      priority: "",
      newsletter: false,
      terms: false,
    },
    mode: "onChange", // Validate on change for better UX
  })

  const handleSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setSubmitError(null)
    setSubmitSuccess(false)

    try {
      if (onSubmit) {
        await onSubmit(data)
      } else {
        // Default submission logic
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })

        if (!response.ok) {
          const errorData = await response.json()
          throw new Error(errorData.message || "Failed to send message")
        }
      }

      setSubmitSuccess(true)
      form.reset()
    } catch (error) {
      setSubmitError(
        error instanceof Error 
          ? error.message 
          : "An unexpected error occurred. Please try again."
      )
    } finally {
      setIsLoading(false)
    }
  }

  // Real-time character counting for message
  const messageValue = form.watch("message")
  const messageLength = messageValue?.length || 0

  return (
    <Card className={cn("w-full max-w-2xl mx-auto", className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          Contact Us
        </CardTitle>
        <CardDescription>
          Fill out the form below and we'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>

      <CardContent>
        {submitSuccess && (
          <Alert className="mb-6 border-green-200 bg-green-50 text-green-800">
            <AlertDescription>
              Thank you for your message! We'll get back to you within 24 hours.
            </AlertDescription>
          </Alert>
        )}

        {submitError && (
          <Alert variant="destructive" className="mb-6">
            <AlertDescription>{submitError}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          {/* Name Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName" required>
                First Name
              </Label>
              <Input
                id="firstName"
                startIcon={<User className="h-4 w-4" />}
                placeholder="Enter your first name"
                error={!!form.formState.errors.firstName}
                helperText={form.formState.errors.firstName?.message}
                {...form.register("firstName")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" required>
                Last Name
              </Label>
              <Input
                id="lastName"
                startIcon={<User className="h-4 w-4" />}
                placeholder="Enter your last name"
                error={!!form.formState.errors.lastName}
                helperText={form.formState.errors.lastName?.message}
                {...form.register("lastName")}
              />
            </div>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email" required>
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                startIcon={<Mail className="h-4 w-4" />}
                placeholder="your.email@example.com"
                error={!!form.formState.errors.email}
                helperText={form.formState.errors.email?.message}
                {...form.register("email")}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                startIcon={<Phone className="h-4 w-4" />}
                placeholder="+1 (555) 123-4567"
                error={!!form.formState.errors.phone}
                helperText={form.formState.errors.phone?.message || "Optional"}
                {...form.register("phone")}
              />
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" required>
              Subject
            </Label>
            <Input
              id="subject"
              placeholder="Brief description of your inquiry"
              error={!!form.formState.errors.subject}
              helperText={form.formState.errors.subject?.message}
              {...form.register("subject")}
            />
          </div>

          {/* Category and Priority */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Controller
              name="category"
              control={form.control}
              render={({ field }) => (
                <SelectField
                  label="Category"
                  placeholder="Select a category"
                  required
                  options={categoryOptions}
                  value={field.value}
                  onValueChange={field.onChange}
                  error={!!form.formState.errors.category}
                  helperText={form.formState.errors.category?.message}
                />
              )}
            />

            {showPriority && (
              <Controller
                name="priority"
                control={form.control}
                render={({ field }) => (
                  <SelectField
                    label="Priority"
                    placeholder="Select priority level"
                    required
                    options={priorityOptions}
                    value={field.value}
                    onValueChange={field.onChange}
                    error={!!form.formState.errors.priority}
                    helperText={form.formState.errors.priority?.message}
                  />
                )}
              />
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" required>
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Please describe your inquiry in detail..."
              maxLength={1000}
              showCount
              error={!!form.formState.errors.message}
              helperText={
                form.formState.errors.message?.message || 
                `${messageLength}/1000 characters`
              }
              {...form.register("message")}
            />
          </div>

          {/* Newsletter Subscription */}
          {showNewsletter && (
            <div className="flex items-center space-x-2">
              <input
                id="newsletter"
                type="checkbox"
                className="rounded border-input text-primary focus:ring-primary"
                {...form.register("newsletter")}
              />
              <Label htmlFor="newsletter" className="text-sm font-normal cursor-pointer">
                Subscribe to our newsletter for updates and news
              </Label>
            </div>
          )}

          {/* Terms and Conditions */}
          <div className="flex items-start space-x-2">
            <input
              id="terms"
              type="checkbox"
              className="rounded border-input text-primary focus:ring-primary mt-1"
              {...form.register("terms")}
            />
            <Label htmlFor="terms" className="text-sm font-normal cursor-pointer leading-relaxed">
              I agree to the{" "}
              <a href="/terms" className="text-primary hover:underline">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </a>
              <span className="text-destructive ml-1">*</span>
            </Label>
          </div>
          {form.formState.errors.terms && (
            <p className="text-sm text-destructive">
              {form.formState.errors.terms.message}
            </p>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            className="w-full"
            disabled={isLoading || !form.formState.isValid}
            size="lg"
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </>
            )}
          </Button>
        </form>

        {/* Form Debug Info (Development Only) */}
        {process.env.NODE_ENV === "development" && (
          <details className="mt-6 p-4 bg-muted rounded">
            <summary className="cursor-pointer text-sm font-medium">
              Debug Info (Development Only)
            </summary>
            <pre className="mt-2 text-xs overflow-auto">
              {JSON.stringify(
                {
                  values: form.getValues(),
                  errors: form.formState.errors,
                  isValid: form.formState.isValid,
                  isDirty: form.formState.isDirty,
                },
                null,
                2
              )}
            </pre>
          </details>
        )}
      </CardContent>
    </Card>
  )
}

// Usage Example
export default function ContactPage() {
  const handleContactSubmit = async (data: ContactFormData) => {
    // Custom submission logic
    console.log("Contact form submitted:", data)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Uncomment to test error handling
    // throw new Error("API is temporarily unavailable")
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <ContactForm 
        onSubmit={handleContactSubmit}
        showPriority={true}
        showNewsletter={true}
        defaultCategory="general"
      />
    </div>
  )
}