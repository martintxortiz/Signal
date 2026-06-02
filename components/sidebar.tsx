"use client"

import { useEffect, type ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconActivity,
  IconLayoutGrid,
  IconSettings2,
  type TablerIcon,
} from "@tabler/icons-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  SETTINGS_DEFAULT_HREF,
  isSettingsRoute,
  rememberSettingsBackHref as storeSettingsBackHref,
} from "@/lib/settings-navigation"
import { cn } from "@/lib/utils"

type LinkHref = ComponentProps<typeof Link>["href"]

type SidebarItem = {
  href: LinkHref
  label: string
  icon: TablerIcon
  activeStartsWith?: string
  rememberSettingsBackHref?: boolean
}

type SidebarButtonProps = SidebarItem & {
  isActive?: boolean
  className?: string
}

// Keep sidebar routes as data so adding items does not change rendering logic.
const primarySidebarItems = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: IconLayoutGrid,
  },
  {
    href: "/dashboard/systems",
    label: "Systems",
    icon: IconActivity,
  },
] satisfies readonly SidebarItem[]

const secondarySidebarItems = [
  {
    href: SETTINGS_DEFAULT_HREF,
    label: "Settings",
    icon: IconSettings2,
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

// One component owns link semantics, icon rendering, and tooltip behavior.
function SidebarButton({
  href,
  label,
  icon: Icon,
  isActive,
  className,
  rememberSettingsBackHref,
}: SidebarButtonProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          aria-label={label}
          onNavigate={
            rememberSettingsBackHref ? () => storeSettingsBackHref() : undefined
          }
          className={cn(
            "inline-flex size-6 shrink-0 items-center justify-center rounded-[4px] text-muted-foreground/70 hover:bg-muted hover:text-foreground",
            isActive && "bg-muted text-foreground",
            className
          )}
        >
          <Icon className="size-3.5" aria-hidden="true" />
          <span className="sr-only">{label}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" align="center" sideOffset={6}>
        {label}
      </TooltipContent>
    </Tooltip>
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
        {primarySidebarItems.map((item) => (
          <SidebarButton
            key={item.label}
            isActive={isItemActive(pathname, item)}
            {...item}
          />
        ))}
      </nav>
      <nav aria-label="Account" className="flex flex-col gap-1">
        {secondarySidebarItems.map((item) => (
          <SidebarButton
            key={item.label}
            isActive={isItemActive(pathname, item)}
            {...item}
          />
        ))}
      </nav>
    </aside>
  )
}

export { Sidebar, SidebarButton }
