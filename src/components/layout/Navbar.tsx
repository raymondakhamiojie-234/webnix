"use client"
import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowUpRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Pricing", href: "#pricing" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/70 backdrop-blur-xl border-b border-border/60 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-1 group-hover:border-primary/60 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Webnix Logo"
                  width={36}
                  height={36}
                  className="w-auto h-8 object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground font-space flex items-center gap-1.5">
                  WEBNIX
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                </span>
                <span className="text-[10px] tracking-widest uppercase text-muted-foreground font-medium -mt-1">
                  Digital Studio
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full hover:bg-muted/60 transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            
            <Button 
              size="sm" 
              className="relative group overflow-hidden rounded-full px-5 py-2.5 bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm shadow-[0_0_20px_rgba(217,70,239,0.25)] hover:shadow-[0_0_25px_rgba(217,70,239,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border-none" 
              asChild
            >
              <Link href="#contact" className="flex items-center gap-1.5">
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="p-2 rounded-xl border border-border/60 bg-card/60 text-foreground hover:text-primary focus:outline-none transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-b border-border/60 bg-background/95 backdrop-blur-2xl px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:bg-muted/70 rounded-xl transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            ))}
            <div className="pt-4 px-2">
              <Button 
                className="w-full rounded-xl py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold shadow-lg shadow-primary/20" 
                asChild
              >
                <Link href="#contact" onClick={() => setIsOpen(false)}>
                  Start a Project
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
