"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

export interface SectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  children: React.ReactNode
  containerClassName?: string
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ className, containerClassName, children, ...props }, ref) => {
    return (
      <motion.section
        ref={ref as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { 
            opacity: 1, 
            y: 0, 
            transition: { duration: 0.6, ease: "easeOut" } 
          }
        }}
        className={cn("py-16 md:py-24 overflow-hidden", className)}
        {...props}
      >
        <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
          {children}
        </div>
      </motion.section>
    )
  }
)
Section.displayName = "Section"

export { Section }
