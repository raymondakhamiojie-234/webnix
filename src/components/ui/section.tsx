import * as React from "react"
import { cn } from "@/lib/utils"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", className)}
        {...props}
      >
        <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
          {children}
        </div>
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
