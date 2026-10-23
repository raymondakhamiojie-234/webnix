import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MessageCircle, Heart, Shield } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-border/60 bg-card/40 backdrop-blur-xl relative z-10 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Info (2 cols) */}
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-1 group-hover:border-primary/60 transition-colors">
                <Image
                  src="/logo.png"
                  alt="Webnix Logo"
                  width={36}
                  height={36}
                  className="w-auto h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-foreground font-space">
                WEBNIX
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
              Your Website, Your Rules. We Just Make It HAPPEN. Engineering high-converting bespoke digital platforms, e-commerce stores, and providing elite 1-on-1 development mentorship.
            </p>

            <div className="pt-2">
              <Link 
                href="https://wa.me/2340000000000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium hover:bg-emerald-500/20 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Consultation</span>
              </Link>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#services" className="hover:text-primary transition-colors flex items-center gap-1">Services</Link></li>
              <li><Link href="#portfolio" className="hover:text-primary transition-colors flex items-center gap-1">Portfolio</Link></li>
              <li><Link href="#process" className="hover:text-primary transition-colors flex items-center gap-1">Process</Link></li>
              <li><Link href="#pricing" className="hover:text-primary transition-colors flex items-center gap-1">Pricing Tiers</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors flex items-center gap-1">Client Proof</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors flex items-center gap-1">FAQs</Link></li>
            </ul>
          </div>
          
          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">Specializations</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Custom Web Applications</li>
              <li>E-Commerce Superstores</li>
              <li>High-Conversion Landing Pages</li>
              <li>1-on-1 Software Mentorship</li>
              <li>Speed & SEO Optimization</li>
            </ul>
          </div>

          {/* Contact & Admin */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground font-semibold">Control & Portal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: hello@webnix.com</li>
              <li>Location: Remote Worldwide</li>
              <li className="pt-2">
                <Link 
                  href="/admin/login" 
                  className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border border-border/80 bg-muted/40 hover:bg-primary/20 hover:text-primary hover:border-primary/40 transition-all text-foreground"
                >
                  <Shield className="w-3.5 h-3.5 text-primary" />
                  <span>Admin Panel</span>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom copyright line */}
        <div className="border-t border-border/40 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-muted-foreground gap-4">
          <p>&copy; {currentYear} Webnix Digital Studio. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with Next.js & TypeScript
          </p>
        </div>
      </div>
    </footer>
  )
}
