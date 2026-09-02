import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Edit, Trash2 } from "lucide-react"
import { deleteService } from "./actions"

export default async function ServicesPage() {
  let services: any[] = []
  
  try {
    services = await prisma.service.findMany({
      orderBy: { displayOrder: 'asc' }
    })
  } catch (error) {
    console.error("Database connection failed for services:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Services</h1>
        <Button asChild>
          <Link href="/admin/services/new"><Plus className="w-4 h-4 mr-2" /> Add Service</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Services</CardTitle>
        </CardHeader>
        <CardContent>
          {services.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No services found. Click "Add Service" to create one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Title</th>
                    <th className="px-6 py-3">Description</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((service) => (
                    <tr key={service.id} className="border-b">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {service.title}
                      </td>
                      <td className="px-6 py-4 max-w-xs truncate">
                        {service.description}
                      </td>
                      <td className="px-6 py-4">{service.price ? `₦${service.price.toLocaleString()}` : 'Custom'}</td>
                      <td className="px-6 py-4">
                        <Badge variant={service.isActive ? 'default' : 'secondary'}>
                          {service.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/services/${service.id}/edit`}>
                            <Edit className="w-4 h-4 text-blue-500" />
                          </Link>
                        </Button>
                        <form action={deleteService.bind(null, service.id)} className="inline-block">
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
