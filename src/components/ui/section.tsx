"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  containerClassName?: string
}

export function Section({
  className,
  containerClassName,
  children,
  ...props
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-16 md:py-24 overflow-hidden relative", className)}
      {...(props as any)}
    >
      <div className={cn("mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        {children}
      </div>
    </motion.section>
  )
}
