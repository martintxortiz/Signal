"use client"

import { IconDownload, IconTrash } from "@tabler/icons-react"

import {
  SettingsItem,
  SettingsPage,
  SettingsSection,
} from "@/components/settings-page"

const storage = {
  size: "1.2 GB",
  samples: "847k",
  oldest: "Jun 1, 14:02",
}

export default function DataSettingsPage() {
  return (
    <SettingsPage title="Data">
      <SettingsSection>
        <SettingsItem
          title="Stored data"
          description={`${storage.size} · ${storage.samples} samples · oldest ${storage.oldest}`}
          control={
            <button
              type="button"
              className="inline-flex h-6 cursor-pointer items-center justify-center gap-1 rounded-[4px] px-1.5 text-xs text-red-500/80 hover:bg-red-500/10 hover:text-red-500"
            >
              <IconTrash className="size-3.5" aria-hidden="true" />
              Clear
            </button>
          }
        />
        <SettingsItem
          title="Export"
          description="Download all stored telemetry"
          control={
            <button
              type="button"
              className="inline-flex h-6 cursor-pointer items-center justify-center gap-1 rounded-[4px] px-1.5 text-xs text-muted-foreground/70 hover:bg-muted hover:text-foreground"
            >
              <IconDownload className="size-3.5" aria-hidden="true" />
              Export
            </button>
          }
        />
      </SettingsSection>
    </SettingsPage>
  )
}
