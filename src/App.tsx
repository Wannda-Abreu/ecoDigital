import { useEffect, useState } from "react"
import type { MouseEventHandler } from "react"
import { CatalogPage } from "./CatalogPage"
import { HomePage } from "./HomePage"
import { buildAppHref, getCurrentAppRoute, type AppRoute } from "./routes"

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

  const catalogHref = buildAppHref("/catalogo")

  if (route === "/catalogo") {
    return <CatalogPage />
  }

  return (
    <HomePage
      catalogHref={catalogHref}
      onNavigateCatalog={createRouteHandler("/catalogo")}
    />
  )
}
