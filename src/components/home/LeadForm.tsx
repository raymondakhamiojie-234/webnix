"use client"
import { useState } from "react"
import { Section } from "@/components/ui/section"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Sparkles, Send, CheckCircle2, MessageCircle, ShieldCheck } from "lucide-react"

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("submitting")
    
    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get("fullName"),
      businessName: formData.get("businessName"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      websiteType: formData.get("websiteType"),
      budget: formData.get("budget"),
      description: formData.get("description"),
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      
      if (res.ok) {
        setStatus("success")
      } else {
        setStatus("error")
      }
    } catch (err) {
      setStatus("error")
    }
  }

  return (
    <Section id="contact" className="relative z-10 pb-28">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Start Your Project</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-space tracking-tight text-foreground">
            Let's Make It <span className="text-gradient">Happen</span>
          </h2>
          
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
            Tell us about your project requirements. Receive a comprehensive roadmap, technical breakdown, and custom quote within 24 hours.
          </p>
        </div>

        <div className="bento-card p-6 sm:p-10 shadow-2xl relative">
          {status === "success" ? (
            <div className="text-center py-16 space-y-6">
              <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-4xl shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold font-space text-foreground">Project Inquiry Received!</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Thank you for reaching out. One of our lead engineers will review your specs and contact you within 24 hours.
                </p>
              </div>
              <Button 
                onClick={() => setStatus("idle")} 
                variant="outline" 
                className="rounded-full px-6 border-border"
              >
                Submit another inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Full Name *</label>
                  <Input 
                    name="fullName" 
                    required 
                    placeholder="e.g. Alexander Vance" 
                    className="h-12 rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Business / Brand Name</label>
                  <Input 
                    name="businessName" 
                    placeholder="e.g. Apex Global Corp" 
                    className="h-12 rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Email Address *</label>
                  <Input 
                    name="email" 
                    required 
                    type="email" 
                    placeholder="alex@company.com" 
                    className="h-12 rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">WhatsApp / Phone Number *</label>
                  <Input 
                    name="phone" 
                    required 
                    type="tel" 
                    placeholder="+234..." 
                    className="h-12 rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Type of Web Project</label>
                  <select 
                    name="websiteType" 
                    className="flex h-12 w-full rounded-xl border border-border/80 bg-muted/40 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:border-primary transition-colors"
                  >
                    <option value="" className="bg-background">Select project category...</option>
                    <option value="business" className="bg-background">Business & Lead Generation Site</option>
                    <option value="ecommerce" className="bg-background">E-Commerce Store & Payments</option>
                    <option value="custom" className="bg-background">Custom Web Application / Portal</option>
                    <option value="training" className="bg-background">1-on-1 Engineering Mentorship</option>
                    <option value="redesign" className="bg-background">Redesign & Modernization</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Target Budget</label>
                  <select 
                    name="budget" 
                    className="flex h-12 w-full rounded-xl border border-border/80 bg-muted/40 px-3 py-2 text-sm text-foreground focus-visible:outline-none focus-visible:border-primary transition-colors"
                  >
                    <option value="" className="bg-background">Select investment tier...</option>
                    <option value="150k" className="bg-background">Starter Package (₦150,000)</option>
                    <option value="350k" className="bg-background">Business Growth (₦350,000)</option>
                    <option value="650k_plus" className="bg-background">E-Commerce / Enterprise (₦650,000+)</option>
                    <option value="custom" className="bg-background">Custom / To Be Decided</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground">Project Scope & Objectives *</label>
                <Textarea 
                  name="description" 
                  required 
                  placeholder="Share details about what you want your website to accomplish, target audience, preferred pages, or special features..." 
                  className="min-h-[130px] rounded-xl bg-muted/40 border-border/80 focus:border-primary transition-colors leading-relaxed" 
                />
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm">
                  Failed to send inquiry. Please try again or message us directly on WhatsApp.
                </div>
              )}

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Strict confidentiality • 100% NDA Protection</span>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full sm:w-auto rounded-full px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-secondary text-white shadow-[0_0_25px_rgba(217,70,239,0.3)] hover:shadow-[0_0_35px_rgba(217,70,239,0.5)] transition-all duration-300 border-none" 
                  disabled={status === "submitting"}
                >
                  <span className="flex items-center gap-2">
                    {status === "submitting" ? "Sending Specs..." : "Submit Project Specs"}
                    <Send className="w-4 h-4" />
                  </span>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  )
}
