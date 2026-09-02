"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createTestimonial } from "../actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function NewTestimonialPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    await createTestimonial({
      customerName: formData.get("customerName") as string,
      company: formData.get("company") as string,
      content: formData.get("content") as string,
      rating: parseInt(formData.get("rating") as string),
    })

    router.push("/admin/testimonials")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Testimonial</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/testimonials">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Testimonial Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Customer Name</label>
                <Input name="customerName" required placeholder="e.g. John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Company</label>
                <Input name="company" placeholder="e.g. Acme Inc" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Testimonial Content</label>
              <Textarea name="content" required placeholder="What did they say?" className="min-h-[120px]" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Rating (1-5)</label>
              <Input name="rating" type="number" required min="1" max="5" defaultValue="5" />
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Testimonial"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
