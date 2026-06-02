"use client"

import * as React from "react"
import { IconCheck, IconCopy } from "@tabler/icons-react"

import { IconButton } from "@/components/icon-button"
import {
  SettingsItem,
  SettingsPage,
  SettingsSection,
} from "@/components/settings-page"
import { cn } from "@/lib/utils"

const ingestionEndpoint = "udp://10.0.0.5:49000"

type ServiceState = "running" | "degraded" | "stopped"

const status: { state: ServiceState; label: string } = {
  state: "running",
  label: "Listening",
}

const statusDotClass: Record<ServiceState, string> = {
  running: "bg-emerald-500",
  degraded: "bg-amber-500",
  stopped: "bg-red-500",
}

export default function ConnectionSettingsPage() {
  return (
    <SettingsPage title="Connection">
      <SettingsSection>
        <SettingsItem
          title="Websocket"
          description={ingestionEndpoint}
          control={<IngestionStatusControl />}
        />
      </SettingsSection>
    </SettingsPage>
  )
}

function IngestionStatusControl() {
  const [copied, setCopied] = React.useState(false)

  function handleCopy() {
    void navigator.clipboard.writeText(ingestionEndpoint)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1500)
  }

  return (
    <div className="flex items-center gap-2">
      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <span
          aria-hidden
          className={cn("size-1.5 rounded-full", statusDotClass[status.state])}
        />
        {status.label}
      </span>
      <IconButton
        icon={copied ? IconCheck : IconCopy}
        label={copied ? "Copied" : "Copy endpoint"}
        onClick={handleCopy}
      />
    </div>
  )
}
