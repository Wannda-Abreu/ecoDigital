export type AppRoute = "/" | "/catalogo"

const BASE_PREFIX =
  import.meta.env.BASE_URL === "/"
    ? ""
    : import.meta.env.BASE_URL.replace(/\/$/, "")

export function buildAppHref(route: AppRoute) {
  const normalizedRoute = route === "/" ? "/" : route.replace(/\/+$/, "")
  return `${BASE_PREFIX}${normalizedRoute}`
}

export function getCurrentAppRoute(pathname = window.location.pathname): AppRoute {
  let nextPathname = pathname

  if (BASE_PREFIX && nextPathname.startsWith(BASE_PREFIX)) {
    nextPathname = nextPathname.slice(BASE_PREFIX.length) || "/"
  }

  nextPathname = nextPathname.replace(/\/+$/, "") || "/"

  return nextPathname === "/catalogo" ? "/catalogo" : "/"
}
