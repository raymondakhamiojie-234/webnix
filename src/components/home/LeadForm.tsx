"use client"
import { useState } from "react"
import { Section } from "@/components/ui/section"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

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
    <Section id="contact" className="bg-accent/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Get a Free Quote</h2>
          <p className="text-lg text-muted-foreground">Tell us about your project and we'll get back to you with a tailored proposal.</p>
        </div>

        <Card className="border-none shadow-xl">
          <CardContent className="p-8">
            {status === "success" ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto text-4xl mb-4">
                  ✓
                </div>
                <h3 className="text-2xl font-bold">Request Received!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. We will contact you within 24 hours.</p>
                <Button onClick={() => setStatus("idle")} variant="outline" className="mt-8">
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input name="fullName" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Name (Optional)</label>
                    <Input name="businessName" placeholder="Acme Inc" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input name="email" required type="email" placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Phone / WhatsApp</label>
                    <Input name="phone" required type="tel" placeholder="+234..." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Website Type</label>
                    <select name="websiteType" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <option value="">Select an option...</option>
                      <option value="business">Business Website</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="corporate">Corporate</option>
                      <option value="custom">Custom Web App</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Estimated Budget</label>
                    <select name="budget" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                      <option value="">Select an option...</option>
                      <option value="under_100k">Under ₦100,000</option>
                      <option value="100k_250k">₦100,000 - ₦250,000</option>
                      <option value="250k_500k">₦250,000 - ₦500,000</option>
                      <option value="500k_1m">₦500,000 - ₦1,000,000</option>
                      <option value="1m_plus">₦1,000,000+</option>
                      <option value="not_sure">Not sure</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Project Description</label>
                  <Textarea name="description" required placeholder="Tell us briefly about what you want to achieve..." className="min-h-[120px]" />
                </div>

                <div className="pt-4">
                  <Button type="submit" size="lg" className="w-full text-lg h-14" disabled={status === "submitting"}>
                    {status === "submitting" ? "Sending Request..." : "Start Your Project"}
                  </Button>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </Section>
  )
}
