"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Eye, Code } from "lucide-react"

interface CodePreviewProps {
  title: string
  description?: string
  code: string
  children: React.ReactNode
  className?: string
}

export function CodePreview({ title, description, code, children, className }: CodePreviewProps) {
  const [copied, setCopied] = useState(false)
  const [view, setView] = useState<'preview' | 'code'>('preview')

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Card className={className}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {description && (
              <p className="text-sm text-muted-foreground mt-1">{description}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="secondary">React</Badge>
            <div className="flex border rounded-md">
              <Button
                variant={view === 'preview' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('preview')}
                className="rounded-r-none h-8"
              >
                <Eye className="w-3 h-3 mr-1" />
                Preview
              </Button>
              <Button
                variant={view === 'code' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setView('code')}
                className="rounded-l-none h-8"
              >
                <Code className="w-3 h-3 mr-1" />
                Code
              </Button>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {view === 'preview' ? (
          <div className="flex items-center justify-center p-8 border rounded-lg bg-background">
            {children}
          </div>
        ) : (
          <div className="relative">
            <Button
              size="sm"
              variant="outline"
              onClick={copyToClipboard}
              className="absolute top-2 right-2 z-10"
            >
              {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
              {copied ? 'Copied' : 'Copy'}
            </Button>
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}