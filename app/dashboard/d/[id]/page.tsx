import { notFound } from "next/navigation"
import { DashboardExpandButton } from "@/components/dashboard-expand-button"
import {
  IconArchive,
  IconCalendar,
  IconCloudCheck,
  IconIdBadge,
  IconUser,
} from "@tabler/icons-react"

import { DashboardTopbarActions } from "@/components/dashboard-topbar-actions"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { getDashboardById } from "@/lib/dashboards"

export default async function DashboardDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const dashboard = getDashboardById(id)

  if (!dashboard) {
    notFound()
  }

  return (
    <div className={"flex flex-col"}>
      <div
        className={
          "flex min-h-[37px] items-center justify-between border-b bg-sidebar px-1 py-1.5"
        }
      >
        <div className={"flex items-center"}>
          <DashboardExpandButton />
          <div className={"flex items-center gap-1 pl-1.5"}>
            <HoverCard openDelay={250} closeDelay={100}>
              <HoverCardTrigger asChild>
                <span className={"cursor-pointer text-sm text-foreground"}>
                  {dashboard.name}
                </span>
              </HoverCardTrigger>
              <HoverCardContent
                align="start"
                className="flex w-auto flex-col gap-0.5 rounded-[4px] bg-muted !px-1.5 !py-1 !pr-5"
              >
                <div className="flex items-center gap-2 text-sm">
                  <IconArchive
                    className="size-3.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className={"text-xs text-muted-foreground"}>
                    Archived
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <IconCloudCheck
                    className="size-3.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className={"text-xs text-muted-foreground"}>
                    Up To Date
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <IconUser
                    className="size-3.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className={"text-xs text-muted-foreground"}>
                    Martin Ortiz
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <IconCalendar
                    className="size-3.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className={"text-xs text-muted-foreground"}>
                    15/06/2026 12:43AM
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <IconIdBadge
                    className="size-3.5 text-muted-foreground"
                    aria-hidden="true"
                  />
                  <span className={"text-xs text-muted-foreground"}>
                    {dashboard.id}
                  </span>
                </div>
              </HoverCardContent>
            </HoverCard>
          </div>
        </div>
        <div className={"flex items-center"}>
          <DashboardTopbarActions />
        </div>
      </div>
      <div className="grid place-items-center">
        <h1 className="text-xl font-medium text-muted-foreground/50">
          {dashboard.name}
        </h1>
      </div>
    </div>
  )
}
