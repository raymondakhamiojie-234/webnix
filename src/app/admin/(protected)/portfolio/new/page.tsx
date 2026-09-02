"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createPortfolio } from "../actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function NewPortfolioPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    // Convert comma-separated technologies into an array
    const techsText = formData.get("technologies") as string
    const technologies = techsText.split(',').map(t => t.trim()).filter(t => t !== '')

    await createPortfolio({
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      clientName: formData.get("clientName") as string,
      projectUrl: formData.get("projectUrl") as string,
      technologies,
      isFeatured: formData.get("isFeatured") === "true",
    })

    router.push("/admin/portfolio")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Project</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/portfolio">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Project Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Project Name</label>
                <Input name="name" required placeholder="e.g. Luxury Real Estate" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Input name="category" required placeholder="e.g. E-commerce" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Description</label>
              <Textarea name="description" required placeholder="Brief description of the project" className="min-h-[100px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Client Name</label>
                <Input name="clientName" placeholder="e.g. Acme Corp" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Project URL</label>
                <Input name="projectUrl" type="url" placeholder="https://..." />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Technologies (comma separated)</label>
              <Input name="technologies" required placeholder="React, Next.js, Tailwind CSS" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Is Featured?</label>
              <select name="isFeatured" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="false">No</option>
                <option value="true">Yes</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Project"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
