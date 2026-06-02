"use client"

import * as React from "react"

type DashboardSidebarContextValue = {
  collapsed: boolean
  setCollapsed: (collapsed: boolean) => void
  toggle: () => void
}

const DashboardSidebarContext =
  React.createContext<DashboardSidebarContextValue | null>(null)

function DashboardSidebarProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [collapsed, setCollapsed] = React.useState(false)

  const value = React.useMemo<DashboardSidebarContextValue>(
    () => ({
      collapsed,
      setCollapsed,
      toggle: () => setCollapsed((current) => !current),
    }),
    [collapsed]
  )

  return (
    <DashboardSidebarContext.Provider value={value}>
      {children}
    </DashboardSidebarContext.Provider>
  )
}

function useDashboardSidebar() {
  const context = React.useContext(DashboardSidebarContext)
  if (!context) {
    throw new Error(
      "useDashboardSidebar must be used within DashboardSidebarProvider"
    )
  }
  return context
}

export { DashboardSidebarProvider, useDashboardSidebar }
