import { SettingsSidebar } from "@/components/settings-sidebar"

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-svh">
      <SettingsSidebar />
      <main className="min-w-0 flex-1">{children}</main>
    </div>
  )
}
