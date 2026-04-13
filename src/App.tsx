import { Suspense, lazy, useEffect, useState } from "react"
import type { MouseEventHandler } from "react"
import { HomePage } from "./HomePage"
import { buildAppHref, getCurrentAppRoute, type AppRoute } from "./routes"

const CatalogPage = lazy(async () => {
  const module = await import("./CatalogPage")
  return { default: module.CatalogPage }
})

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() => getCurrentAppRoute())

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getCurrentAppRoute())
    }

    window.addEventListener("popstate", syncRoute)

    return () => {
      window.removeEventListener("popstate", syncRoute)
    }
  }, [])

  const navigateTo = (nextRoute: AppRoute) => {
    const href = buildAppHref(nextRoute)

    window.history.pushState({}, "", href)
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
    setRoute(nextRoute)
  }

  const createRouteHandler = (nextRoute: AppRoute): MouseEventHandler<HTMLAnchorElement> => {
    return (event) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.altKey ||
        event.ctrlKey ||
        event.shiftKey
      ) {
        return
      }

      event.preventDefault()
      navigateTo(nextRoute)
    }
  }

  const homeHref = buildAppHref("/")
  const catalogHref = buildAppHref("/catalogo")

  if (route === "/catalogo") {
    return (
      <>
        <Suspense fallback={<div className="min-h-screen bg-[#f6f3ee]" />}>
          <CatalogPage
            homeHref={homeHref}
            onNavigateHome={createRouteHandler("/")}
          />
        </Suspense>
      </>
    )
  }

  return (
    <>
      <HomePage
        catalogHref={catalogHref}
        onNavigateCatalog={createRouteHandler("/catalogo")}
      />
    </>
  )
}
