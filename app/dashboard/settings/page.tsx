import { redirect } from "next/navigation"

import { SETTINGS_DEFAULT_HREF } from "@/lib/settings-navigation"

export default function SettingsPage() {
  redirect(SETTINGS_DEFAULT_HREF)
}
