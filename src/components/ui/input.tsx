import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: "default" | "error" | "disabled"
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, state = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        disabled={state === "disabled"}
        className={cn(
          "flex h-10 w-full rounded-200 border bg-background-default px-3 py-2 text-sm text-text-default placeholder:text-text-tertiary focus-visible:outline-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:bg-background-disabled",
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
Input.displayName = "Input"
