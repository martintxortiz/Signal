"use client"

import type { ComponentProps } from "react"
import Link from "next/link"
import type { TablerIcon } from "@tabler/icons-react"

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

type LinkHref = ComponentProps<typeof Link>["href"]
type TooltipSide = "top" | "right" | "bottom" | "left"

type IconButtonIndicator = "alert" | "warning"

type IconButtonProps = {
  icon: TablerIcon
  selectedIcon?: TablerIcon
  label: string
  isActive?: boolean
  href?: LinkHref
  onClick?: () => void
  onNavigate?: () => void
  tooltipSide?: TooltipSide
  className?: string
  tooltipClassName?: string
  indicator?: IconButtonIndicator
}

const baseClassName =
  "relative inline-flex size-6 shrink-0 cursor-pointer items-center justify-center rounded-[4px] text-muted-foreground/70 hover:bg-muted hover:text-foreground"

const indicatorClassName: Record<IconButtonIndicator, string> = {
  alert: "bg-red-500",
  warning: "bg-amber-500",
}

function IconButton({
  icon: Icon,
  selectedIcon: SelectedIcon,
  label,
  isActive,
  href,
  onClick,
  onNavigate,
  tooltipSide = "bottom",
  className,
  tooltipClassName,
  indicator,
}: IconButtonProps) {
  const RenderedIcon = isActive && SelectedIcon ? SelectedIcon : Icon

  const triggerClassName = cn(
    baseClassName,
    isActive && "text-foreground/70",
    className
  )

  const triggerChildren = (
    <>
      <RenderedIcon className="size-3.5" aria-hidden="true" />
      {indicator ? (
        <span
          aria-hidden
          className={cn(
            "absolute right-[4px] top-[4px] size-1.5 rounded-full",
            indicatorClassName[indicator]
          )}
        />
      ) : null}
      <span className="sr-only">{label}</span>
    </>
  )

  const trigger =
    href !== undefined ? (
      <Link
        href={href}
        aria-label={label}
        aria-current={isActive ? "page" : undefined}
        onNavigate={onNavigate}
        className={triggerClassName}
      >
        {triggerChildren}
      </Link>
    ) : (
      <button
        type="button"
        aria-label={label}
        onClick={onClick}
        className={triggerClassName}
      >
        {triggerChildren}
      </button>
    )

  return (
    <Tooltip>
      <TooltipTrigger asChild>{trigger}</TooltipTrigger>
      <TooltipContent
        side={tooltipSide}
        align="start"
        sideOffset={6}
        className={tooltipClassName}
      >
        {label}
      </TooltipContent>
    </Tooltip>
  )
}

export { IconButton }
export type { IconButtonProps }
