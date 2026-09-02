import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Edit, Trash2 } from "lucide-react"
import { deleteFaq } from "./actions"

export default async function FaqsPage() {
  let faqs: any[] = []
  
  try {
    faqs = await prisma.fAQ.findMany({
      orderBy: { displayOrder: 'asc' }
    })
  } catch (error) {
    console.error("Database connection failed for faqs:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Frequently Asked Questions</h1>
        <Button asChild>
          <Link href="/admin/faqs/new"><Plus className="w-4 h-4 mr-2" /> Add FAQ</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All FAQs</CardTitle>
        </CardHeader>
        <CardContent>
          {faqs.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No FAQs found. Click "Add FAQ" to create one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Question</th>
                    <th className="px-6 py-3">Answer Preview</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {faqs.map((faq) => (
                    <tr key={faq.id} className="border-b">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {faq.question}
                      </td>
                      <td className="px-6 py-4 max-w-sm truncate">
                        {faq.answer}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={faq.isActive ? 'default' : 'outline'}>
                          {faq.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/faqs/${faq.id}/edit`}>
                            <Edit className="w-4 h-4 text-blue-500" />
                          </Link>
                        </Button>
                        <form action={deleteFaq.bind(null, faq.id)} className="inline-block">
                          <Button variant="ghost" size="icon" type="submit">
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </Button>
                        </form>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
