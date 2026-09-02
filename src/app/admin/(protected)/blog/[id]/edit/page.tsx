import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateBlogPost } from "../../actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditBlogPage({ params }: { params: { id: string } }) {
  const post = await prisma.blogPost.findUnique({
    where: { id: params.id }
  })

  if (!post) {
    redirect("/admin/blog")
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    
    const tagsText = formData.get("tags") as string
    const tags = tagsText.split(',').map(t => t.trim()).filter(t => t !== '')

    await updateBlogPost(params.id, {
      title: formData.get("title") as string,
      content: formData.get("content") as string,
      excerpt: formData.get("excerpt") as string,
      author: formData.get("author") as string,
      category: formData.get("category") as string,
      tags,
      isPublished: formData.get("isPublished") === "true",
    })
    redirect("/admin/blog")
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit Post</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/blog">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Post Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleUpdate} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Post Title</label>
              <Input name="title" required defaultValue={post.title} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Content</label>
              <Textarea name="content" required defaultValue={post.content} className="min-h-[400px] font-mono text-sm" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Excerpt (Short description)</label>
              <Textarea name="excerpt" defaultValue={post.excerpt || ""} className="min-h-[80px]" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Author</label>
                <Input name="author" defaultValue={post.author || ""} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Category</label>
                <Input name="category" defaultValue={post.category || ""} />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Tags (comma separated)</label>
              <Input name="tags" defaultValue={post.tags.join(', ')} />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select name="isPublished" defaultValue={post.isPublished ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="false">Draft</option>
                <option value="true">Published</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Update Post
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
