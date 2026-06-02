"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import {
  IconLayoutSidebarFilled,
  IconPlus,
  IconSearch,
} from "@tabler/icons-react"

import { useDashboardSidebar } from "@/components/dashboard-sidebar-context"
import { IconButton } from "@/components/icon-button"
import { dashboards, getDashboardHref } from "@/lib/dashboards"
import { cn } from "@/lib/utils"

function DashboardSidebar() {
  const params = useParams<{ id?: string }>()
  const activeId = params?.id
  const { collapsed, setCollapsed } = useDashboardSidebar()

  if (collapsed) {
    return null
  }

  return (
    <aside
      aria-label="Dashboard"
      className="w-48 shrink-0 border-r border-sidebar-border bg-sidebar pb-1.5"
    >
      <div className="flex items-center justify-between border-b px-1 py-1.5">
        <div className="flex items-center gap-0.5">
          <IconButton
            icon={IconLayoutSidebarFilled}
            label="Close Sidebar"
            onClick={() => setCollapsed(true)}
          />
        </div>
        <div className="flex items-center">
          <IconButton icon={IconSearch} label="Search Dashboards" href="/" />
          <IconButton icon={IconPlus} label="New Dashboard" href="/" />
        </div>
      </div>
      <nav aria-label="Dashboards" className="flex flex-col gap-0.5 p-1">
        {dashboards.map((dashboard) => {
          const isActive = dashboard.id === activeId

          return (
            <Link
              key={dashboard.id}
              href={getDashboardHref(dashboard.id)}
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "flex w-full items-center gap-2 rounded-[4px] px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
                isActive && "bg-muted text-foreground"
              )}
            >
              {dashboard.name}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export { DashboardSidebar }
