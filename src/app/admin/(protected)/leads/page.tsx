import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import prisma from "@/lib/db"
import { Badge } from "@/components/ui/badge"

export default async function LeadsPage() {
  let leads: any[] = []
  
  try {
    leads = await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' }
    })
  } catch (error) {
    console.error("Database connection failed for leads:", error)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Lead Management</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Leads</CardTitle>
        </CardHeader>
        <CardContent>
          {leads.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              No leads yet. They will appear here when a user submits the quote form.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Name</th>
                    <th className="px-6 py-3">Contact</th>
                    <th className="px-6 py-3">Service</th>
                    <th className="px-6 py-3">Budget</th>
                    <th className="px-6 py-3">Status</th>
                    <th className="px-6 py-3">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b">
                      <td className="px-6 py-4 font-medium text-foreground">
                        {lead.fullName}
                        {lead.businessName && <div className="text-xs text-muted-foreground">{lead.businessName}</div>}
                      </td>
                      <td className="px-6 py-4">
                        <div>{lead.email}</div>
                        <div className="text-muted-foreground">{lead.phone}</div>
                      </td>
                      <td className="px-6 py-4">{lead.websiteType || 'N/A'}</td>
                      <td className="px-6 py-4">{lead.budget || 'N/A'}</td>
                      <td className="px-6 py-4">
                        <Badge variant={lead.status === 'New' ? 'default' : 'secondary'}>
                          {lead.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4">
                        {new Date(lead.createdAt).toLocaleDateString()}
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
