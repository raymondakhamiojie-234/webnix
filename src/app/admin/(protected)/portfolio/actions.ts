"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createPortfolio(data: {
  name: string
  description: string
  category: string
  featuredImg?: string
  clientName?: string
  projectUrl?: string
  technologies: string[]
  isFeatured?: boolean
}) {
  await prisma.portfolioProject.create({
    data
  })
  revalidatePath("/admin/portfolio")
  revalidatePath("/admin")
  revalidatePath("/")
}

export async function updatePortfolio(id: string, data: {
  name: string
  description: string
  category: string
  featuredImg?: string
  clientName?: string
  projectUrl?: string
  technologies: string[]
  isFeatured?: boolean
}) {
  await prisma.portfolioProject.update({
    where: { id },
    data
  })
  revalidatePath("/admin/portfolio")
  revalidatePath("/admin")
  revalidatePath("/")
}

export async function deletePortfolio(id: string) {
  await prisma.portfolioProject.delete({
    where: { id }
  })
  revalidatePath("/admin/portfolio")
  revalidatePath("/admin")
  revalidatePath("/")
}
