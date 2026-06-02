const SETTINGS_ROUTE_PREFIX = "/dashboard/settings"
const SETTINGS_DEFAULT_HREF = `${SETTINGS_ROUTE_PREFIX}/general`
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

function getCurrentInternalHref() {
  const { pathname, search, hash } = window.location

  return `${pathname}${search}${hash}`
}

function getSettingsBackHref() {
  if (typeof window === "undefined") {
    return SETTINGS_BACK_FALLBACK_HREF
  }

  try {
    const href = window.sessionStorage.getItem(SETTINGS_BACK_HREF_STORAGE_KEY)

    return isSafeSettingsBackHref(href) ? href : SETTINGS_BACK_FALLBACK_HREF
  } catch {
    return SETTINGS_BACK_FALLBACK_HREF
  }
}

function rememberSettingsBackHref(href?: string) {
  if (typeof window === "undefined") {
    return
  }

  const nextHref = href ?? getCurrentInternalHref()

  if (!isSafeSettingsBackHref(nextHref)) {
    return
  }

  try {
    window.sessionStorage.setItem(SETTINGS_BACK_HREF_STORAGE_KEY, nextHref)
  } catch {
    // Settings can still fall back to /dashboard when storage is unavailable.
  }
}

export {
  SETTINGS_DEFAULT_HREF,
  SETTINGS_BACK_FALLBACK_HREF,
  getSettingsBackHref,
  isSafeSettingsBackHref,
  isSettingsRoute,
  rememberSettingsBackHref,
}
