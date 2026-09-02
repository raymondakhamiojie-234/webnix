import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { updateSettings } from "./actions"
import prisma from "@/lib/db"

export default async function SettingsPage() {
  let settings: any = null
  
  try {
    settings = await prisma.siteSettings.findFirst()
  } catch (error) {
    console.error("Database connection failed for settings:", error)
  }

  const handleUpdate = async (formData: FormData) => {
    "use server"
    
    await updateSettings({
      siteName: (formData.get("siteName") as string) || "Webnix",
      defaultSeoTitle: formData.get("defaultSeoTitle") as string,
      defaultSeoDesc: formData.get("defaultSeoDesc") as string,
      phone: formData.get("phone") as string,
      whatsapp: formData.get("whatsapp") as string,
      email: formData.get("email") as string,
      address: formData.get("address") as string,
      facebook: formData.get("facebook") as string,
      instagram: formData.get("instagram") as string,
      twitter: formData.get("twitter") as string,
      linkedin: formData.get("linkedin") as string,
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Site Settings</h1>

      <form action={handleUpdate} className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>General Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Site Name</label>
                <Input name="siteName" defaultValue={settings?.siteName || "Webnix"} required />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Contact Email</label>
                <Input name="email" type="email" defaultValue={settings?.email || ""} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input name="phone" type="tel" defaultValue={settings?.phone || ""} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">WhatsApp Number</label>
                <Input name="whatsapp" type="tel" defaultValue={settings?.whatsapp || ""} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Business Address</label>
              <Textarea name="address" defaultValue={settings?.address || ""} className="min-h-[80px]" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>SEO & Meta Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Default SEO Title</label>
              <Input name="defaultSeoTitle" defaultValue={settings?.defaultSeoTitle || ""} placeholder="Webnix | Professional Web Design" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Default SEO Description</label>
              <Textarea name="defaultSeoDesc" defaultValue={settings?.defaultSeoDesc || ""} placeholder="We build high-converting websites..." className="min-h-[80px]" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Social Media Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Facebook</label>
                <Input name="facebook" type="url" defaultValue={settings?.facebook || ""} placeholder="https://facebook.com/..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Instagram</label>
                <Input name="instagram" type="url" defaultValue={settings?.instagram || ""} placeholder="https://instagram.com/..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Twitter / X</label>
                <Input name="twitter" type="url" defaultValue={settings?.twitter || ""} placeholder="https://twitter.com/..." />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">LinkedIn</label>
                <Input name="linkedin" type="url" defaultValue={settings?.linkedin || ""} placeholder="https://linkedin.com/..." />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit" size="lg">Save All Settings</Button>
        </div>
      </form>
    </div>
  )
}
