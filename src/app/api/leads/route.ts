import { NextResponse } from "next/server"
import prisma from "@/lib/db"

export async function POST(req: Request) {
  try {
    const data = await req.json()
    
    // Validate required fields
    if (!data.fullName || !data.email || !data.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const lead = await prisma.lead.create({
      data: {
        fullName: data.fullName,
        businessName: data.businessName,
        email: data.email,
        phone: data.phone,
        websiteType: data.websiteType,
        budget: data.budget,
        description: data.description,
        source: "Google Ads / Organic", // Can be dynamic in real app
        status: "New"
      }
    })

    return NextResponse.json(lead, { status: 201 })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json({ error: "Failed to submit lead" }, { status: 500 })
  }
}
