"use client"

import {
  IconDatabasePlus,
  IconFilter2,
  IconSearch,
} from "@tabler/icons-react"

import { IconButton } from "@/components/icon-button"

function SystemsTopbarActions() {
  return (
    <>
      <IconButton icon={IconSearch} label="Search" href="/" />
      <IconButton icon={IconDatabasePlus} label="New system" href="/" />
      <IconButton icon={IconFilter2} label="Filter" href="/" />
    </>
  )
}

export { SystemsTopbarActions }
