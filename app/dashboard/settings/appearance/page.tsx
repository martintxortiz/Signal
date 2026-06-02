import { DarkModeToggle } from "@/components/dark-mode-toggle"
import {
  SettingsItem,
  SettingsPage,
  SettingsSection,
} from "@/components/settings-page"

export default function AppearanceSettingsPage() {
  return (
    <SettingsPage title="Appearance">
      <SettingsSection>
        <SettingsItem
          title="Dark Mode"
          description="Switch between light and dark themes for the interface."
          control={<DarkModeToggle />}
        />
      </SettingsSection>
    </SettingsPage>
  )
}
