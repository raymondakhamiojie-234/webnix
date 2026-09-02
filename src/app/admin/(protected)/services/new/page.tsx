"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createService } from "../actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function NewServicePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    await createService({
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      price: formData.get("price") ? parseFloat(formData.get("price") as string) : undefined,
      ctaText: (formData.get("ctaText") as string) || "Get a Quote",
    })

    router.push("/admin/services")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Service</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/services">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Service Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Service Title</label>
              <Input name="title" required placeholder="e.g. E-commerce Website" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea name="description" required placeholder="Describe what this service includes..." className="min-h-[100px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Price (₦) - Optional</label>
                <Input name="price" type="number" placeholder="e.g. 150000" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Call to Action Text</label>
                <Input name="ctaText" defaultValue="Get a Quote" />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Service"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
