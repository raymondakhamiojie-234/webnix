import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateFaq } from "../../actions"
import prisma from "@/lib/db"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function EditFaqPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const faq = await prisma.fAQ.findUnique({
    where: { id }
  })

  if (!faq) {
    redirect("/admin/faqs")
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    
    await updateFaq(id, {
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
      isActive: formData.get("isActive") === "true",
    })
    redirect("/admin/faqs")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Edit FAQ</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/faqs">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>FAQ Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={handleUpdate} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Question</label>
              <Input name="question" required defaultValue={faq.question} />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Answer</label>
              <Textarea name="answer" required defaultValue={faq.answer} className="min-h-[120px]" />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Status</label>
              <select name="isActive" defaultValue={faq.isActive ? "true" : "false"} className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit">
                Update FAQ
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
