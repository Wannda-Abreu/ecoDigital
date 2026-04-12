import type { MouseEventHandler } from "react"
import { WHATSAPP_URL } from "./site"

const catalogMedia = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941917/1_lcjwvj.png",
    piece: "Pieza 01",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941917/4_mtnuxo.png",
    piece: "Pieza 02",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941917/5_pfrhr2.png",
    piece: "Pieza 03",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941918/9_syhugu.png",
    piece: "Pieza 04",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941919/12_kjvpmb.png",
    piece: "Pieza 05",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775942122/11_m0g91z.png",
    piece: "Pieza 06",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775942160/IMG-20251129-WA0063_1_sdmued.jpg",
    piece: "Pieza 07",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775943630/16_ap5tuf.png",
    piece: "Pieza 08",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775943629/15_b7q6it.png",
    piece: "Pieza 09",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775944170/SmartSelect_20220220-171604_Instagram_1_sawivw.jpg",
    piece: "Pieza 10",
    artisan: "Artesano colaborador",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1775944499/Untitled_1080_x_1080_px_4_h3nd7y.mp4",
    piece: "Pieza 12",
    artisan: "Artesano colaborador",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1776026855/Untitled_1080_x_1080_px_gcubbj.svg",
    piece: "Pieza 13",
    artisan: "Artesano colaborador",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1776026860/Untitled_1080_x_1080_px_7_hwnvad.mp4",
    piece: "Pieza 14",
    artisan: "Artesano colaborador",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1776026875/Untitled_1080_x_1080_px_8_s2umaj.mp4",
    piece: "Pieza 15",
    artisan: "Artesano colaborador",
  },
] as const

function buildStoreHref(piece: string) {
  const message = `Hola, quiero ver la tienda del artesano de ${piece}.`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

type CatalogPageProps = {
  homeHref: string
  onNavigateHome: MouseEventHandler<HTMLAnchorElement>
}

export function CatalogPage({
  homeHref,
  onNavigateHome,
}: CatalogPageProps) {
  return (
    <div className="min-h-screen bg-[#f6f3ee] px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto mb-10 max-w-4xl px-2 text-center">
        <div className="mb-6 flex justify-center">
          <a
            href={homeHref}
            onClick={onNavigateHome}
            className="rounded-full border border-[#d8d0c6] bg-[#fffdf9] px-5 py-2.5 text-sm font-medium text-[#24211d] transition hover:-translate-y-0.5 hover:border-[#c97854] hover:text-[#c97854]"
          >
            Volver a la pagina principal
          </a>
        </div>

        <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-[#d8d0c6] bg-[#fffdf9] px-4 py-2 shadow-[0_10px_30px_rgba(71,53,37,0.04)]">
          <span className="text-lg">o</span>
          <span className="h-2 w-2 rounded-full bg-[#c97854]" />
          <span className="text-lg">*</span>
          <span className="h-2 w-2 rounded-full bg-[#2f5b53]" />
          <span className="text-lg">+</span>
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#7d746a]">
          Piezas destacadas
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#24211d] sm:text-5xl">
          Seleccion de pizas unicas.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#666057] sm:text-base">
          Artesania colectiva: distintas manos, una sola historia.
        </p>
      </section>

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
        {catalogMedia.map((item, index) => (
          <figure
            key={item.src}
            className="group mb-3 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#efe8de] shadow-[0_10px_30px_rgba(71,53,37,0.05)] transition duration-300 hover:-translate-y-1"
          >
            {item.type === "video" ? (
              <video
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`${item.piece} ${index + 1}`}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.src}
                alt={`${item.piece} ${index + 1}`}
                className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                loading="lazy"
              />
            )}

            <div className="flex items-center justify-between gap-3 px-4 py-4">
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-[#24211d]">
                  {item.piece}
                </p>
                <p className="truncate text-xs uppercase tracking-[0.18em] text-[#7d746a]">
                  {item.artisan}
                </p>
              </div>

              <a
                href={buildStoreHref(item.piece)}
                className="shrink-0 rounded-full border border-[#d8d0c6] bg-[#fffdf9] px-3 py-2 text-xs font-medium text-[#2f5b53] transition hover:border-[#c97854] hover:bg-white hover:text-[#c97854]"
              >
                Tienda del artesano
              </a>
            </div>
          </figure>
        ))}
      </div>
    </div>
  )
}
