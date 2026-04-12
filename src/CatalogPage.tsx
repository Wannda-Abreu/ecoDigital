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
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775944643/Untitled_1080_x_1080_px_urkkpb.png",
    piece: "Pieza 11",
    artisan: "Artesano colaborador",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1775944499/Untitled_1080_x_1080_px_4_h3nd7y.mp4",
    piece: "Pieza 12",
    artisan: "Artesano colaborador",
  },
] as const

function buildStoreHref(piece: string) {
  const message = `Hola, quiero ver la tienda del artesano de ${piece}.`
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`
}

export function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] px-3 py-8 sm:px-4 sm:py-10">
      <section className="mx-auto mb-10 max-w-4xl px-2 text-center">
        <div className="mx-auto mb-6 flex w-fit items-center gap-3 rounded-full border border-[#e2d4c4] bg-[#fffaf3] px-4 py-2 shadow-[0_10px_30px_rgba(71,53,37,0.05)]">
          <span className="text-lg">o</span>
          <span className="h-2 w-2 rounded-full bg-[#d4b391]" />
          <span className="text-lg">*</span>
          <span className="h-2 w-2 rounded-full bg-[#b98f74]" />
          <span className="text-lg">+</span>
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#8b745f]">
          Piezas destacadas
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-[#2f2a25] sm:text-5xl">
          Seleccion de pizas unicas.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5c5145] sm:text-base">
          Artesania colectiva: distintas manos, una sola historia.
        </p>
      </section>

      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
        {catalogMedia.map((item, index) => (
          <figure
            key={item.src}
            className="group mb-3 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#efe5d8] shadow-[0_10px_30px_rgba(71,53,37,0.06)] transition duration-300 hover:-translate-y-1"
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
                <p className="truncate text-sm font-medium text-[#2f2a25]">
                  {item.piece}
                </p>
                <p className="truncate text-xs uppercase tracking-[0.18em] text-[#8b745f]">
                  {item.artisan}
                </p>
              </div>

              <a
                href={buildStoreHref(item.piece)}
                className="shrink-0 rounded-full border border-[#d8c8b7] bg-[#fffaf3] px-3 py-2 text-xs font-medium text-[#3F6B5B] transition hover:bg-white"
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
