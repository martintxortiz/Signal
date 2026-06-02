"use client"

import { useEffect, type ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconAffiliate,
  IconAffiliateFilled,
  IconLayoutGrid,
  IconLayoutGridFilled,
  IconSettings,
  IconSettingsFilled,
  type TablerIcon,
} from "@tabler/icons-react"

import { IconButton } from "@/components/icon-button"
import {
  SETTINGS_DEFAULT_HREF,
  isSettingsRoute,
  rememberSettingsBackHref as storeSettingsBackHref,
} from "@/lib/settings-navigation"

type LinkHref = ComponentProps<typeof Link>["href"]

type SidebarItem = {
  href: LinkHref
  label: string
  icon: TablerIcon
  selectedIcon: TablerIcon
  activeStartsWith?: string
  rememberSettingsBackHref?: boolean
  indicator?: "alert" | "warning"
}

// Keep sidebar routes as data so adding items does not change rendering logic.
const primarySidebarItems = [
  {
    href: "/dashboard/d",
    label: "Dashboards",
    icon: IconLayoutGrid,
    selectedIcon: IconLayoutGridFilled,
    activeStartsWith: "/dashboard/d",
  },
  {
    href: "/dashboard/systems",
    label: "Systems",
    icon: IconAffiliate,
    selectedIcon: IconAffiliateFilled,
    indicator: "warning",
  },
] satisfies readonly SidebarItem[]

const secondarySidebarItems = [
  {
    href: SETTINGS_DEFAULT_HREF,
    label: "Settings",
    icon: IconSettings,
    selectedIcon: IconSettingsFilled,
    activeStartsWith: "/dashboard/settings",
    rememberSettingsBackHref: true,
  },
] satisfies readonly SidebarItem[]

function isItemActive(pathname: string, item: SidebarItem) {
  if (item.activeStartsWith && pathname.startsWith(item.activeStartsWith)) {
    return true
  }

  return typeof item.href === "string" && pathname === item.href
}

function renderSidebarItem(item: SidebarItem, isActive: boolean) {
  return (
    <IconButton
      key={item.label}
      icon={item.icon}
      selectedIcon={item.selectedIcon}
      label={item.label}
      href={item.href}
      isActive={isActive}
      indicator={item.indicator}
      onNavigate={
        item.rememberSettingsBackHref ? () => storeSettingsBackHref() : undefined
      }
      tooltipSide="right"
      tooltipClassName="!ml-1"
    />
  )
}

function Sidebar() {
  const pathname = usePathname()

  useEffect(() => {
    if (isSettingsRoute(pathname)) {
      return
    }

    storeSettingsBackHref()
  }, [pathname])

  return (
    <aside className="flex min-h-svh shrink-0 flex-col justify-between border-r border-sidebar-border bg-sidebar p-1 py-1.5">
      <nav aria-label="Primary" className="flex flex-1 flex-col gap-1">
        {primarySidebarItems.map((item) =>
          renderSidebarItem(item, isItemActive(pathname, item))
        )}
      </nav>
      <nav aria-label="Account" className="flex flex-col gap-1">
        {secondarySidebarItems.map((item) =>
          renderSidebarItem(item, isItemActive(pathname, item))
        )}
      </nav>
    </aside>
  )
}

export { Sidebar }
