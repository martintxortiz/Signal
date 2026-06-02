"use client"

import { IconLayoutSidebar } from "@tabler/icons-react"

import { useDashboardSidebar } from "@/components/dashboard-sidebar-context"
import { IconButton } from "@/components/icon-button"

function DashboardExpandButton() {
  const { collapsed, setCollapsed } = useDashboardSidebar()

  if (!collapsed) {
    return null
  }

  return (
    <IconButton
      icon={IconLayoutSidebar}
      label="Expand sidebar"
      onClick={() => setCollapsed(false)}
    />
  )
}

export { DashboardExpandButton }
