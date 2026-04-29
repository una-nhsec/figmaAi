import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  state?: "default" | "error" | "disabled"
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, state = "default", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        disabled={state === "disabled"}
        className={cn(
          "flex min-h-[120px] w-full rounded-200 border bg-background-default px-3 py-2 text-sm text-text-default placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:bg-background-disabled resize-y",
          {
            "border-border-default focus-visible:ring-brand-default": state === "default",
            "border-danger-default focus-visible:ring-danger-default text-text-danger": state === "error",
            "border-border-disabled": state === "disabled",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"
