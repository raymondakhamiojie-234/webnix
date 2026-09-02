"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function updateSettings(data: {
  siteName: string
  defaultSeoTitle?: string
  defaultSeoDesc?: string
  phone?: string
  whatsapp?: string
  email?: string
  address?: string
  facebook?: string
  instagram?: string
  twitter?: string
  linkedin?: string
}) {
  const settingsCount = await prisma.siteSettings.count()
  
  if (settingsCount === 0) {
    await prisma.siteSettings.create({
      data
    })
  } else {
    const existing = await prisma.siteSettings.findFirst()
    if (existing) {
      await prisma.siteSettings.update({
        where: { id: existing.id },
        data
      })
    }
  }
  
  revalidatePath("/admin/settings")
  revalidatePath("/") // Revalidate homepage to show new settings
}
