import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import { LayoutDashboard, Users, Briefcase, Tag, Image as ImageIcon, MessageSquare, HelpCircle, FileText, Settings, LogOut, FileImage } from "lucide-react"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect("/admin/login")
  }

  const sidebarLinks = [
    { name: "Dashboard", href: "/admin", icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: "Leads", href: "/admin/leads", icon: <Users className="w-5 h-5" /> },
    { name: "Services", href: "/admin/services", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Pricing", href: "/admin/pricing", icon: <Tag className="w-5 h-5" /> },
    { name: "Portfolio", href: "/admin/portfolio", icon: <ImageIcon className="w-5 h-5" /> },
    { name: "Testimonials", href: "/admin/testimonials", icon: <MessageSquare className="w-5 h-5" /> },
    { name: "FAQs", href: "/admin/faqs", icon: <HelpCircle className="w-5 h-5" /> },
    { name: "Blog", href: "/admin/blog", icon: <FileText className="w-5 h-5" /> },
    { name: "Media", href: "/admin/media", icon: <FileImage className="w-5 h-5" /> },
    { name: "Settings", href: "/admin/settings", icon: <Settings className="w-5 h-5" /> },
  ]

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-300 flex flex-col hidden md:flex">
        <div className="h-16 flex items-center px-6 bg-slate-950 font-bold text-white text-xl">
          Webnix Admin
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors"
              >
                {link.icon}
                {link.name}
              </Link>
            ))}
          </nav>
        </div>

        <div className="p-4 bg-slate-950">
          <Link
            href="/api/auth/signout"
            className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-800 hover:text-white transition-colors text-red-400 hover:text-red-300"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header for mobile */}
        <header className="h-16 bg-background border-b flex items-center justify-between px-6 md:hidden">
          <div className="font-bold text-lg">Webnix Admin</div>
          <Link href="/api/auth/signout" className="text-sm text-red-500">Logout</Link>
        </header>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          {children}
        </div>
      </main>
    </div>
  )
}
