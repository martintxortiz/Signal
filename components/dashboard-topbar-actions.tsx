"use client"

import {
  IconCubePlus,
  IconLock,
  IconLockAccess,
  IconSettings,
} from "@tabler/icons-react"

import { IconButton } from "@/components/icon-button"

function DashboardTopbarActions() {
  return (
    <>
      <IconButton icon={IconCubePlus} label="New Widget" href="/" />
      <IconButton icon={IconSettings} label="Dashboard settings" href="/" />
      <IconButton icon={IconLock} label="Lock Widgets" href="/" />
    </>
  )
}

export { DashboardTopbarActions }
