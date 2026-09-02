import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config()

const prisma = new PrismaClient()

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@webnix.com'
  const adminPassword = process.env.ADMIN_PASSWORD || 'securepassword123'

  const existingAdmin = await prisma.user.findUnique({
    where: { email: adminEmail },
  })

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10)
    
    await prisma.user.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
        name: 'Webnix Admin',
        role: 'ADMIN',
      },
    })
    
    console.log(`Admin user created: ${adminEmail}`)
  } else {
    console.log(`Admin user already exists: ${adminEmail}`)
  }

  // Ensure default site settings exist
  const existingSettings = await prisma.siteSettings.findFirst()
  if (!existingSettings) {
    await prisma.siteSettings.create({
      data: {
        siteName: 'Webnix',
        defaultSeoTitle: 'Webnix - Your Website, Your Rules',
        defaultSeoDesc: 'Professional websites designed to help businesses build credibility, attract customers and grow online.',
        currency: 'NGN'
      }
    })
    console.log('Default site settings created')
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
