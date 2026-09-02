import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UploadCloud } from "lucide-react"

export default function MediaPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Media Library</h1>
        <Button disabled>
          <UploadCloud className="w-4 h-4 mr-2" /> Upload Media
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Storage Setup Required</CardTitle>
          <CardDescription>
            In order to directly upload images from this dashboard, you need to configure a storage bucket in Supabase.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Currently, the Webnix platform expects image URLs for Portfolio Projects and Services. You can host these images anywhere (like Imgur, AWS S3, or Supabase Storage manually) and paste the URLs into the CMS forms.
          </p>
          <div className="bg-muted p-4 rounded-md text-sm font-mono">
            <strong>Next Step to Enable Direct Uploads:</strong>
            <br />
            1. Go to your Supabase Dashboard &gt; Storage.
            <br />
            2. Create a public bucket named "webnix-media".
            <br />
            3. Update the `supabase-js` client in your repository to handle uploads via the API.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
