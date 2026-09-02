"use server"

import prisma from "@/lib/db"
import { revalidatePath } from "next/cache"

function generateSlug(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '')
}

export async function createBlogPost(data: {
  title: string
  content: string
  excerpt?: string
  author?: string
  category?: string
  tags: string[]
  isPublished?: boolean
}) {
  const slug = generateSlug(data.title) + '-' + Math.random().toString(36).substring(2, 8)
  
  await prisma.blogPost.create({
    data: {
      ...data,
      slug,
      publishedAt: data.isPublished ? new Date() : null,
    }
  })
  revalidatePath("/admin/blog")
}

export async function updateBlogPost(id: string, data: {
  title: string
  content: string
  excerpt?: string
  author?: string
  category?: string
  tags: string[]
  isPublished?: boolean
}) {
  const post = await prisma.blogPost.findUnique({ where: { id } })
  
  await prisma.blogPost.update({
    where: { id },
    data: {
      ...data,
      publishedAt: data.isPublished && !post?.isPublished ? new Date() : post?.publishedAt,
    }
  })
  revalidatePath("/admin/blog")
}

export async function deleteBlogPost(id: string) {
  await prisma.blogPost.delete({
    where: { id }
  })
  revalidatePath("/admin/blog")
}
