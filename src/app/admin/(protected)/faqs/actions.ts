"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

export async function createFaq(data: {
  question: string
  answer: string
}) {
  await prisma.fAQ.create({
    data
  })
  revalidatePath("/admin/faqs")
}

export async function updateFaq(id: string, data: {
  question: string
  answer: string
  isActive: boolean
}) {
  await prisma.fAQ.update({
    where: { id },
    data
  })
  revalidatePath("/admin/faqs")
}

export async function deleteFaq(id: string) {
  await prisma.fAQ.delete({
    where: { id }
  })
  revalidatePath("/admin/faqs")
}
