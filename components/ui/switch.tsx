"use client"

import * as React from "react"
import { Switch as SwitchPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

function Switch({
  className,
  size = "default",
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root> & {
  size?: "sm" | "default"
}) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      className={cn(
        "cursor-pointer peer group/switch relative inline-flex shrink-0 items-center rounded-[2px] px-[2px] transition-all outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:ring-3 focus-visible:ring-ring/50 aria-invalid:ring-3 aria-invalid:ring-destructive/20 data-[size=default]:h-[16px] data-[size=default]:w-[32px] data-[size=sm]:h-[13px] data-[size=sm]:w-[24px] dark:aria-invalid:ring-destructive/40 data-checked:bg-blue-600 dark:data-checked:bg-blue-600 data-unchecked:bg-input dark:data-unchecked:bg-input/80 data-disabled:cursor-not-allowed data-disabled:opacity-50",
        className
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="pointer-events-none block rounded-[2px] bg-white ring-0 transition-transform group-data-[size=default]/switch:h-[10px] group-data-[size=default]/switch:w-[16px] group-data-[size=sm]/switch:h-[7px] group-data-[size=sm]/switch:w-[11px] group-data-[size=default]/switch:data-checked:translate-x-[12px] group-data-[size=sm]/switch:data-checked:translate-x-[9px] group-data-[size=default]/switch:data-unchecked:translate-x-0 group-data-[size=sm]/switch:data-unchecked:translate-x-0"
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }
