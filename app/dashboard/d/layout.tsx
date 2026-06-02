import { DashboardSidebar } from "@/components/dashboard-sidebar"
import { DashboardSidebarProvider } from "@/components/dashboard-sidebar-context"

export default function DashboardSectionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <DashboardSidebarProvider>
      <div className="flex min-h-svh">
        <DashboardSidebar />
        <main className="min-w-0 flex-1">{children}</main>
      </div>
    </DashboardSidebarProvider>
  )
}
