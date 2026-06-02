import {
  SettingsItem,
  SettingsPage,
  SettingsSection,
} from "@/components/settings-page"

export default function GeneralSettingsPage() {
  return (
    <SettingsPage title="General">
      <SettingsItem title="Setting Title" description="Setting Description" />
      <SettingsSection title="Subsection">
        <SettingsItem title="Setting Title" description="Setting Description" />
        <SettingsItem title="Setting Title" description="Setting Description" />
      </SettingsSection>
    </SettingsPage>
  )
}
