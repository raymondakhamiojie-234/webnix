"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createService(data: {
  title: string
  description: string
  icon?: string
  price?: number
  ctaText?: string
}) {
  await prisma.service.create({
    data
  })
  revalidatePath("/admin/services")
  revalidatePath("/admin")
  revalidatePath("/")
}

export async function updateService(id: string, data: {
  title: string
  description: string
  icon?: string
  price?: number
  ctaText?: string
  isActive?: boolean
}) {
  await prisma.service.update({
    where: { id },
    data
  })
  revalidatePath("/admin/services")
  revalidatePath("/admin")
  revalidatePath("/")
}

export async function deleteService(id: string) {
  await prisma.service.delete({
    where: { id }
  })
  revalidatePath("/admin/services")
  revalidatePath("/admin")
  revalidatePath("/")
}
