"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createTestimonial(data: {
  customerName: string
  company?: string
  content: string
  rating: number
}) {
  await prisma.testimonial.create({
    data
  })
  revalidatePath("/admin/testimonials")
}

export async function updateTestimonial(id: string, data: {
  customerName: string
  company?: string
  content: string
  rating: number
  isActive: boolean
}) {
  await prisma.testimonial.update({
    where: { id },
    data
  })
  revalidatePath("/admin/testimonials")
}

export async function deleteTestimonial(id: string) {
  await prisma.testimonial.delete({
    where: { id }
  })
  revalidatePath("/admin/testimonials")
}
