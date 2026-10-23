"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Shield, Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const res = await signIn("credentials", {
      redirect: false,
      email: email.trim().toLowerCase(),
      password,
    })

    if (res?.error) {
      setError("Invalid credentials. Please verify your email and password.")
      setLoading(false)
    } else {
      router.push("/admin")
      router.refresh()
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-background cyber-grid px-4 relative selection:bg-primary/30 selection:text-white">
      {/* Background glow meshes */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/15 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-secondary/15 blur-[120px] pointer-events-none" />

      {/* Top Bar with Home & ThemeToggle */}
      <div className="absolute top-6 left-6 right-6 flex items-center justify-between max-w-5xl mx-auto w-full px-4">
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground hover:text-foreground transition-colors p-2 rounded-xl bg-card/60 backdrop-blur-md border border-border/60"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Return to Site</span>
        </Link>
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md z-10">
        <div className="bento-card p-8 sm:p-10 shadow-2xl space-y-6">
          {/* Logo & Header */}
          <div className="text-center space-y-3">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 flex items-center justify-center mx-auto p-2">
              <Image 
                src="/logo.png" 
                alt="Webnix Logo" 
                width={40} 
                height={40} 
                className="w-auto h-9 object-contain"
              />
            </div>

            <div className="space-y-1">
              <h1 className="text-2xl font-bold font-space text-foreground tracking-tight flex items-center justify-center gap-1.5">
                WEBNIX <span className="text-primary font-normal text-xs uppercase tracking-widest px-2 py-0.5 rounded-full border border-primary/30 bg-primary/10">CMS</span>
              </h1>
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">
                Authenticated Portal Access
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 pt-2">
            {error && (
              <div className="p-3 text-xs font-mono text-rose-500 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                {error}
              </div>
            )}

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-primary" />
                <span>Email Address</span>
              </label>
              <Input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="webnix001@gmail.com"
                className="h-12 rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                <Lock className="w-3.5 h-3.5 text-secondary" />
                <span>Security Key / Password</span>
              </label>
              <Input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="h-12 rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors text-sm"
              />
            </div>

            <div className="pt-2">
              <Button 
                type="submit" 
                className="w-full rounded-full h-12 text-sm font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_20px_rgba(217,70,239,0.3)] hover:shadow-[0_0_30px_rgba(217,70,239,0.5)] transition-all duration-300 border-none" 
                disabled={loading}
              >
                {loading ? "Authenticating..." : (
                  <span className="flex items-center gap-1.5">
                    <span>Access Dashboard</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </div>
          </form>

          <div className="text-center pt-2">
            <span className="text-[11px] font-mono text-muted-foreground">
              Protected by NextAuth 256-Bit JWT Encryption
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
