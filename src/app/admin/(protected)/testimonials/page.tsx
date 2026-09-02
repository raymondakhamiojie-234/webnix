import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Edit, Trash2, Star } from "lucide-react"
import { deleteTestimonial } from "./actions"

export default async function TestimonialsPage() {
  let testimonials: any[] = []
  
  try {
    testimonials = await prisma.testimonial.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error("Database connection failed for testimonials:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Testimonials</h1>
        <Button asChild>
          <Link href="/admin/testimonials/new"><Plus className="w-4 h-4 mr-2" /> Add Testimonial</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Testimonials</CardTitle>
        </CardHeader>
        <CardContent>
          {testimonials.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No testimonials found. Click "Add Testimonial" to create one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3">Company</th>
                    <th className="px-6 py-3">Rating</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {testimonials.map((t) => (
                    <tr key={t.id} className="border-b">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {t.customerName}
                      </td>
                      <td className="px-6 py-4">{t.company || '-'}</td>
                      <td className="px-6 py-4">
                        <div className="flex">
                          {[...Array(t.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={t.isActive ? 'default' : 'outline'}>
                          {t.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/testimonials/${t.id}/edit`}>
                            <Edit className="w-4 h-4 text-blue-500" />
                          </Link>
                        </Button>
                        <form action={deleteTestimonial.bind(null, t.id)} className="inline-block">
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
