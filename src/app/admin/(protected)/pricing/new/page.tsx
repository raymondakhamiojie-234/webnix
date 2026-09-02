"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createPricing } from "../actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function NewPricingPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    // Convert multiline features into an array
    const featuresText = formData.get("features") as string
    const features = featuresText.split('\n').filter(f => f.trim() !== '')

    await createPricing({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : undefined,
      currency: (formData.get("currency") as string) || "₦",
      features,
      ctaText: (formData.get("ctaText") as string) || "Request a Quote",
      isPopular: formData.get("isPopular") === "true",
    })

    router.push("/admin/pricing")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Package</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/pricing">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Package Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Package Name</label>
                <Input name="name" required placeholder="e.g. BUSINESS" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Is Popular?</label>
                <select name="isPopular" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                  <option value="false">No</option>
                  <option value="true">Yes</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Input name="description" placeholder="Brief description of the package" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Price</label>
                <Input name="price" type="number" placeholder="e.g. 350000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Currency</label>
                <Input name="currency" defaultValue="₦" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Call to Action Text</label>
              <Input name="ctaText" defaultValue="Request a Quote" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Features (One per line)</label>
              <Textarea name="features" required placeholder="Custom 10-page website&#10;Advanced SEO & Analytics&#10;Content Management System" className="min-h-[150px]" />
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Package"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
