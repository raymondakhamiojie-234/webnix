"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPricing(data: {
  name: string
  description?: string
  price?: number
  currency?: string
  features: string[]
  ctaText?: string
  isPopular?: boolean
}) {
  await prisma.pricingPackage.create({
    data
  })
  revalidatePath("/admin/pricing")
}

export async function updatePricing(id: string, data: {
  name: string
  description?: string
  price?: number
  currency?: string
  features: string[]
  ctaText?: string
  isPopular?: boolean
  isActive?: boolean
}) {
  await prisma.pricingPackage.update({
    where: { id },
    data
  })
  revalidatePath("/admin/pricing")
}

export async function deletePricing(id: string) {
  await prisma.pricingPackage.delete({
    where: { id }
  })
  revalidatePath("/admin/pricing")
}
