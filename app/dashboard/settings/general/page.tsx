import {
  SettingsItem,
  SettingsPage,
  SettingsSection,
} from "@/components/settings-page"

export default function GeneralSettingsPage() {
  return (
    <SettingsPage title="General">
      <SettingsSection>
        <SettingsItem
          title="Installation name"
          control={
            <span className="text-sm text-foreground">Development Testing</span>
          }
        />
      </SettingsSection>

      <SettingsSection title="About">
        <SettingsItem
          title="Team"
          control={<span className="text-sm text-foreground">Inertia</span>}
        />
        <SettingsItem
          title="Version"
          control={<span className="font-mono text-sm text-foreground">0.0.1</span>}
        />
      </SettingsSection>
    </SettingsPage>
  )
}
