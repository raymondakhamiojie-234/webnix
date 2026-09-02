"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createBlogPost } from "../actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function NewBlogPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)
    
    const tagsText = formData.get("tags") as string
    const tags = tagsText.split(',').map(t => t.trim()).filter(t => t !== '')

    await createBlogPost({
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      excerpt: formData.get("excerpt") as string,
      author: formData.get("author") as string,
      category: formData.get("category") as string,
      tags,
      isPublished: formData.get("isPublished") === "true",
    })

    router.push("/admin/blog")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New Post</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/blog">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Post Title</label>
              <Input name="title" required placeholder="e.g. 10 Reasons Why Your Business Needs a Website" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <p className="text-xs text-muted-foreground mb-2">Note: You can use Markdown or HTML tags here for formatting.</p>
              <Textarea name="content" required placeholder="Write your post content here..." className="min-h-[400px] font-mono text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Excerpt (Short description)</label>
              <Textarea name="excerpt" placeholder="Brief summary of the post..." className="min-h-[80px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Author</label>
                <Input name="author" placeholder="e.g. Admin" defaultValue="Admin" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Input name="category" placeholder="e.g. Web Design" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Tags (comma separated)</label>
              <Input name="tags" placeholder="e.g. SEO, Design, Business" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select name="isPublished" className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="false">Draft</option>
                <option value="true">Published</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Post"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
