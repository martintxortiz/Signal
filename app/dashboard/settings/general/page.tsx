export default function GeneralSettingsPage() {
  return (
    <div className="items-left flex flex-col gap-3 px-70 pt-20">
      <span className={"text-md text-primary"}>General</span>
      <div
        className={
          "flex items-center justify-between rounded-[4px] bg-muted/70 p-2 px-3"
        }
      >
        <div className={"items-left flex flex-col justify-center"}>
          <span className={"text-sm"}>Setting Title</span>
          <span className={"text-xs text-muted-foreground"}>
            Setting Description
          </span>
        </div>
        <div className={"text-xs text-muted-foreground"}>control</div>
      </div>

      <div className={"flex flex-col gap-1"}>
        <div>
          <span className={"text-sm text-muted-foreground"}>Subsection</span>
        </div>
        <div className={"flex flex-col justify-center"}>
          <div
            className={
              "flex items-center justify-between rounded-[4px] rounded-b-none border-b bg-muted/70 p-2 px-3"
            }
          >
            <div className={"items-left flex flex-col justify-center"}>
              <span className={"text-sm"}>Setting Title</span>
              <span className={"text-xs text-muted-foreground"}>
                Setting Description
              </span>
            </div>
            <div className={"text-xs text-muted-foreground"}>control</div>
          </div>
          <div
            className={
              "flex items-center justify-between rounded-[4px] rounded-t-none bg-muted/70 p-2 px-3"
            }
          >
            <div className={"items-left flex flex-col justify-center"}>
              <span className={"text-sm"}>Setting Title</span>
              <span className={"text-xs text-muted-foreground"}>
                Setting Description
              </span>
            </div>
            <div className={"text-xs text-muted-foreground"}>control</div>
          </div>
        </div>
      </div>
    </div>
  )
}
