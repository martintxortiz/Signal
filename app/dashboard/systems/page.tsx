import { SystemsTopbarActions } from "@/components/systems-topbar-actions"

export default function SystemsPage() {
  return (
    <div className={"flex flex-col"}>
      <div
        className={
          "flex min-h-[37px] items-center justify-between border-b bg-sidebar px-1 py-1.5"
        }
      >
        <div className={"flex items-center"}>
          <span className={"pl-1.5 text-sm text-muted-foreground"}>
            Systems
          </span>
        </div>
        <div className={"flex items-center"}>
          <SystemsTopbarActions />
        </div>
      </div>
      <div className="grid place-items-center">
        <h1 className="text-xl font-medium text-muted-foreground/50"></h1>
      </div>
    </div>
  )
}
