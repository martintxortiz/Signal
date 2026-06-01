import Link from "next/link"
import {
  IconActivity,
  IconBolt,
  IconHome,
  IconLayoutDashboard,
  IconLayoutGrid,
  IconSettings,
  IconSettings2,
  IconUser,
} from "@tabler/icons-react"
import { Button } from "./ui/button"

const sidebarItems = [
  {
    href: "/",
    label: "Dashboard",
    icon: IconLayoutGrid,
  },
  {
    href: "/",
    label: "Systems",
    icon: IconActivity,
  },
]

function Sidebar() {
  return (
    <aside className="flex min-h-svh shrink-0 flex-col border-r border-border justify-between">
      <nav className="flex flex-1 flex-col p-0.5 gap-0.5 p-1">
        {sidebarItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center text-muted-foreground/70 p-1 hover:bg-muted rounded-xs"
            >
              <Icon data-icon="inline-start" size={18} />
            </Link>
          )
        })}
      </nav>
      <nav className="flex flex-col p-0.5 gap-0.5 p-1">
        <Link
        href={"/"}
          className="flex items-center text-muted-foreground/70 p-1 hover:bg-muted rounded-xs"
        >
          <IconUser data-icon="inline-start" size={18} />
        </Link>
        <Link
        href={"/"}
          className="flex items-center text-muted-foreground/70 p-1 hover:bg-muted rounded-xs"
        >
          <IconSettings2 data-icon="inline-start" size={18} />
        </Link>
      </nav>
    </aside>
  )
}

export { Sidebar }
