import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "neutral" | "subtle" | "danger"
  size?: "medium" | "small"
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "medium", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-200 text-sm font-semibold transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            "bg-brand-default text-brand-on-brand hover:bg-brand-hover": variant === "primary",
            "bg-neutral-tertiary text-neutral-default hover:bg-neutral-tertiaryHover": variant === "neutral",
            "bg-transparent text-text-secondary hover:bg-neutral-tertiary": variant === "subtle",
            "bg-danger-default text-text-danger-on-danger hover:bg-danger-hover": variant === "danger",
            "h-10 px-4 py-2": size === "medium",
            "h-8 px-3 text-xs": size === "small",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"
