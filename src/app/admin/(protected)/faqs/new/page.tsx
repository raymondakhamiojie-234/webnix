"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { createFaq } from "../actions"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Link from "next/link"

export default function NewFaqPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget)

    await createFaq({
      question: formData.get("question") as string,
      answer: formData.get("answer") as string,
    })

    router.push("/admin/faqs")
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Add New FAQ</h1>
        <Button variant="outline" asChild>
          <Link href="/admin/faqs">Cancel</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>FAQ Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Question</label>
              <Input name="question" required placeholder="e.g. How long does it take to build a website?" />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium">Answer</label>
              <Textarea name="answer" required placeholder="Provide a detailed answer..." className="min-h-[120px]" />
            </div>

            <div className="pt-4 flex justify-end">
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save FAQ"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
