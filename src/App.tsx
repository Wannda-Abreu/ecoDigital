import { Suspense, lazy, useEffect, useState } from "react"
import type { MouseEventHandler } from "react"
import { HomePage } from "./HomePage"
import { buildAppHref, getCurrentAppRoute, type AppRoute } from "./routes"
import { PRELOAD_VIDEO_URL } from "./site"

const CatalogPage = lazy(async () => {
  const module = await import("./CatalogPage")
  return { default: module.CatalogPage }
})

export default function App() {
  const [route, setRoute] = useState<AppRoute>(() => getCurrentAppRoute())
  const [showPreloader, setShowPreloader] = useState(true)
  const [hidePreloader, setHidePreloader] = useState(false)

  useEffect(() => {
    const syncRoute = () => {
      setRoute(getCurrentAppRoute())
    }

    window.addEventListener("popstate", syncRoute)

    return () => {
      window.removeEventListener("popstate", syncRoute)
    }
  }, [])

  useEffect(() => {
    const hideTimer = window.setTimeout(() => {
      setHidePreloader(true)
    }, 2400)

    const unmountTimer = window.setTimeout(() => {
      setShowPreloader(false)
    }, 2900)

    return () => {
      window.clearTimeout(hideTimer)
      window.clearTimeout(unmountTimer)
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
        {showPreloader ? (
          <div
            className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f1e8] transition-opacity duration-500 ${
              hidePreloader ? "pointer-events-none opacity-0" : "opacity-100"
            }`}
          >
            <div className="w-[180px] sm:w-[220px]">
              <video
                className="h-auto w-full rounded-[1.5rem] object-contain"
                autoPlay
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
              >
                <source src={PRELOAD_VIDEO_URL} type="video/mp4" />
              </video>
            </div>
          </div>
        ) : null}
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
      {showPreloader ? (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#f5f1e8] transition-opacity duration-500 ${
            hidePreloader ? "pointer-events-none opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-[180px] sm:w-[220px]">
            <video
              className="h-auto w-full rounded-[1.5rem] object-contain"
              autoPlay
              muted
              playsInline
              preload="auto"
              aria-hidden="true"
            >
              <source src={PRELOAD_VIDEO_URL} type="video/mp4" />
            </video>
          </div>
        </div>
      ) : null}
      <HomePage
        catalogHref={catalogHref}
        onNavigateCatalog={createRouteHandler("/catalogo")}
      />
    </>
  )
}
