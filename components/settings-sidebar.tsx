"use client"

import { useState, type ComponentProps } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  IconArrowLeft,
  IconDatabase,
  IconSearch,
  IconServer,
  IconSettings2,
  IconShadow,
  IconUser,
  type TablerIcon,
} from "@tabler/icons-react"

import {
  SETTINGS_BACK_FALLBACK_HREF,
  SETTINGS_BACK_HREF_STORAGE_KEY,
  isSafeSettingsBackHref,
} from "@/lib/settings-navigation"
import { cn } from "@/lib/utils"

type LinkHref = ComponentProps<typeof Link>["href"]

type SettingsSidebarItem = {
  href: LinkHref
  label: string
  icon: TablerIcon
}

type SettingsSidebarSection = {
  label: string
  items: readonly SettingsSidebarItem[]
}

type SettingsActionItem = SettingsSidebarItem & {
  id: "back" | "search"
}

type SettingsSidebarButtonProps = SettingsSidebarItem & {
  isActive?: boolean
}

const settingsActionItems = [
  {
    id: "back",
    href: SETTINGS_BACK_FALLBACK_HREF,
    label: "Back",
    icon: IconArrowLeft,
  },
  {
    id: "search",
    href: "/",
    label: "Search",
    icon: IconSearch,
  },
] satisfies readonly SettingsActionItem[]

// Keep the settings navigation grouped so section spacing is not tied to an individual link.
const settingsSidebarSections = [
  {
    label: "General settings",
    items: [
      {
        href: "/dashboard/settings/general",
        label: "General",
        icon: IconSettings2,
      },
      {
        href: "/dashboard/settings/appearance",
        label: "Appearance",
        icon: IconShadow,
      },
      {
        href: "/dashboard/settings/account",
        label: "Account",
        icon: IconUser,
      },
    ],
  },
  {
    label: "Connection settings",
    items: [
      {
        href: "/dashboard/settings/connection",
        label: "Connection",
        icon: IconServer,
      },
      {
        href: "/dashboard/settings/data",
        label: "Data",
        icon: IconDatabase,
      },
    ],
  },
] satisfies readonly SettingsSidebarSection[]

function isItemActive(pathname: string, href: LinkHref) {
  return typeof href === "string" && pathname === href
}

function getStoredSettingsBackHref() {
  if (typeof window === "undefined") {
    return SETTINGS_BACK_FALLBACK_HREF
  }

  try {
    const storedHref = window.sessionStorage.getItem(
      SETTINGS_BACK_HREF_STORAGE_KEY
    )

    return isSafeSettingsBackHref(storedHref)
      ? storedHref
      : SETTINGS_BACK_FALLBACK_HREF
  } catch {
    return SETTINGS_BACK_FALLBACK_HREF
  }
}

function SettingsSidebarButton({
  href,
  label,
  icon: Icon,
  isActive,
}: SettingsSidebarButtonProps) {
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={cn(
        "flex w-full items-center gap-2 rounded-[4px] px-2 py-1 text-sm text-muted-foreground hover:bg-muted hover:text-foreground",
        isActive && "bg-muted text-foreground"
      )}
    >
      <Icon className="size-3.5 shrink-0" aria-hidden="true" />
      {label}
    </Link>
  )
}

function SettingsSidebar() {
  const pathname = usePathname()
  const [backHref] = useState<LinkHref>(getStoredSettingsBackHref)

  return (
    <aside className="w-48 shrink-0 border-r border-sidebar-border bg-sidebar p-1 py-1.5">
      <nav aria-label="Settings" className="flex flex-col gap-3">
        <div
          aria-label="Settings actions"
          role="group"
          className="flex flex-col gap-0.5"
        >
          {settingsActionItems.map(({ id, href, ...item }) => (
            <SettingsSidebarButton
              key={item.label}
              {...item}
              href={id === "back" ? backHref : href}
            />
          ))}
        </div>
        {settingsSidebarSections.map((section) => (
          <div
            key={section.label}
            aria-label={section.label}
            role="group"
            className="flex flex-col gap-0.5"
          >
            {section.items.map((item) => (
              <SettingsSidebarButton
                key={item.label}
                isActive={isItemActive(pathname, item.href)}
                {...item}
              />
            ))}
          </div>
        ))}
      </nav>
    </aside>
  )
}

export { SettingsSidebar, SettingsSidebarButton }
