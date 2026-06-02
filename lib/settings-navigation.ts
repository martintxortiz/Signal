const SETTINGS_ROUTE_PREFIX = "/dashboard/settings"
const SETTINGS_BACK_FALLBACK_HREF = "/dashboard"
const SETTINGS_BACK_HREF_STORAGE_KEY = "signal.settingsBackHref"

function getHrefPathname(href: string) {
  const queryIndex = href.search(/[?#]/)

  return queryIndex === -1 ? href : href.slice(0, queryIndex)
}

function isSettingsRoute(pathname: string) {
  return (
    pathname === SETTINGS_ROUTE_PREFIX ||
    pathname.startsWith(`${SETTINGS_ROUTE_PREFIX}/`)
  )
}

function isSafeSettingsBackHref(href: string | null): href is string {
  if (!href || !href.startsWith("/") || href.startsWith("//")) {
    return false
  }

  return !isSettingsRoute(getHrefPathname(href))
}

export {
  SETTINGS_BACK_FALLBACK_HREF,
  SETTINGS_BACK_HREF_STORAGE_KEY,
  isSafeSettingsBackHref,
  isSettingsRoute,
}
