import { redirect } from "next/navigation"

import { dashboards, getDashboardHref } from "@/lib/dashboards"

export default function DashboardIndexPage() {
  redirect(getDashboardHref(dashboards[0].id))
}
