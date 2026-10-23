import { getServerSession } from "next-auth/next"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  Tag, 
  Image as ImageIcon, 
  MessageSquare, 
  HelpCircle, 
  FileText, 
  Settings, 
  LogOut, 
  FileImage,
  ExternalLink,
  Shield
} from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

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
    { name: "Overview", href: "/admin", icon: <LayoutDashboard className="w-4 h-4" /> },
    { name: "Inbound Leads", href: "/admin/leads", icon: <Users className="w-4 h-4" /> },
    { name: "Services", href: "/admin/services", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Pricing Packages", href: "/admin/pricing", icon: <Tag className="w-4 h-4" /> },
    { name: "Portfolio", href: "/admin/portfolio", icon: <ImageIcon className="w-4 h-4" /> },
    { name: "Testimonials", href: "/admin/testimonials", icon: <MessageSquare className="w-4 h-4" /> },
    { name: "FAQs", href: "/admin/faqs", icon: <HelpCircle className="w-4 h-4" /> },
    { name: "Blog Articles", href: "/admin/blog", icon: <FileText className="w-4 h-4" /> },
    { name: "Media Assets", href: "/admin/media", icon: <FileImage className="w-4 h-4" /> },
    { name: "Site Settings", href: "/admin/settings", icon: <Settings className="w-4 h-4" /> },
  ]

  return (
    <div className="min-h-screen flex bg-background cyber-grid text-foreground selection:bg-primary/30 selection:text-white">
      {/* Desktop Sidebar */}
      <aside className="w-64 glass border-r border-border/60 flex flex-col hidden lg:flex shrink-0">
        {/* Top Header */}
        <div className="h-20 flex items-center justify-between px-6 border-b border-border/50">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30 p-1 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Webnix Logo"
                width={28}
                height={28}
                className="w-auto h-6 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold font-space tracking-tight text-foreground flex items-center gap-1.5">
                WEBNIX
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground -mt-0.5">
                Control Hub
              </span>
            </div>
          </Link>
          <ThemeToggle />
        </div>
        
        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-6 px-4">
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground px-3 mb-2 font-semibold">
            Management Modules
          </div>
          <nav className="space-y-1">
            {sidebarLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted/70 hover:border hover:border-border/60 transition-all duration-200"
              >
                <div className="text-primary">{link.icon}</div>
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom User/Logout Row */}
        <div className="p-4 border-t border-border/50 space-y-2">
          <Link
            href="/"
            target="_blank"
            className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-mono text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors"
          >
            <span className="flex items-center gap-2">View Live Website</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>

          <Link
            href="/api/auth/signout"
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-mono text-rose-500 hover:text-rose-400 hover:bg-rose-500/10 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out Admin</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile / Tablet Header */}
        <header className="h-16 glass border-b border-border/60 flex items-center justify-between px-6 lg:hidden">
          <Link href="/admin" className="flex items-center gap-2 font-bold font-space text-lg">
            <Shield className="w-5 h-5 text-primary" />
            <span>Webnix Admin</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Link 
              href="/api/auth/signout" 
              className="text-xs font-mono text-rose-500 hover:text-rose-400 border border-rose-500/20 px-2.5 py-1 rounded-lg"
            >
              Sign Out
            </Link>
          </div>
        </header>

        {/* Scrollable Dashboard Body */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
