import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Plus, Edit, Trash2 } from "lucide-react"
import { deletePricing } from "./actions"

export default async function PricingPage() {
  let packages: any[] = []
  
  try {
    packages = await prisma.pricingPackage.findMany({
      orderBy: { displayOrder: 'asc' }
    })
  } catch (error) {
    console.error("Database connection failed for pricing packages:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Pricing Packages</h1>
        <Button asChild>
          <Link href="/admin/pricing/new"><Plus className="w-4 h-4 mr-2" /> Add Package</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Packages</CardTitle>
        </CardHeader>
        <CardContent>
          {packages.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No pricing packages found. Click "Add Package" to create one.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Popular</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {packages.map((pkg) => (
                    <tr key={pkg.id} className="border-b">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {pkg.name}
                      </td>
                      <td className="px-6 py-4">{pkg.price ? `${pkg.currency || '₦'}${pkg.price.toLocaleString()}` : 'Custom'}</td>
                      <td className="px-6 py-4">
                        {pkg.isPopular ? <Badge variant="secondary">Popular</Badge> : '-'}
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={pkg.isActive ? 'default' : 'outline'}>
                          {pkg.isActive ? 'Active' : 'Inactive'}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-right space-x-2">
                        <Button variant="ghost" size="icon" asChild>
                          <Link href={`/admin/pricing/${pkg.id}/edit`}>
                            <Edit className="w-4 h-4 text-blue-500" />
                          </Link>
                        </Button>
                        <form action={deletePricing.bind(null, pkg.id)} className="inline-block">
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
