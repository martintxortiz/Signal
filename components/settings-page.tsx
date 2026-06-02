import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SettingsPageProps = {
  title: string
  children?: ReactNode
}

type SettingsSectionProps = {
  title?: string
  children: ReactNode
}

type SettingsItemProps = {
  title: string
  description?: string
  control?: ReactNode
}

const settingsSectionGroupClassName =
  "flex flex-col [&>[data-settings-item]:not(:first-child)]:rounded-t-none [&>[data-settings-item]:not(:last-child)]:rounded-b-none [&>[data-settings-item]:not(:last-child)]:border-b"

function SettingsPage({ title, children }: SettingsPageProps) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-3 px-6 pt-20">
      <h1 className="text-base text-primary">{title}</h1>
      {children}
    </div>
  )
}

function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <section className="flex flex-col gap-1">
      {title ? (
        <h2 className="text-sm text-muted-foreground">{title}</h2>
      ) : null}
      <div className={settingsSectionGroupClassName}>{children}</div>
    </section>
  )
}

function SettingsItem({
  title,
  description,
  control,
}: SettingsItemProps) {
  return (
    <div
      data-settings-item
      className="flex items-center justify-between rounded-[4px] bg-muted/70 p-2.5 px-3"
    >
      <div className="flex flex-col justify-center">
        <span
          className={cn("text-sm", !description && "text-muted-foreground")}
        >
          {title}
        </span>
        {description ? (
          <span className="text-xs text-muted-foreground">{description}</span>
        ) : null}
      </div>
      {control ? (
        <div className="ml-4 flex shrink-0 items-center text-xs text-muted-foreground">
          {control}
        </div>
      ) : null}
    </div>
  )
}

export { SettingsItem, SettingsPage, SettingsSection }
export type { SettingsItemProps, SettingsPageProps, SettingsSectionProps }
