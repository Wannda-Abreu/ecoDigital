const catalogMedia = [
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941917/1_lcjwvj.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941917/4_mtnuxo.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941917/5_pfrhr2.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941918/9_syhugu.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775941919/12_kjvpmb.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775942122/11_m0g91z.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775942160/IMG-20251129-WA0063_1_sdmued.jpg",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775943630/16_ap5tuf.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775943629/15_b7q6it.png",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775944170/SmartSelect_20220220-171604_Instagram_1_sawivw.jpg",
  },
  {
    type: "image",
    src: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775944643/Untitled_1080_x_1080_px_urkkpb.png",
  },
  {
    type: "video",
    src: "https://res.cloudinary.com/dsyfal3wa/video/upload/v1775944499/Untitled_1080_x_1080_px_4_h3nd7y.mp4",
  },
] as const

export function CatalogPage() {
  return (
    <div className="min-h-screen bg-[#f5f1e8] px-3 py-3 sm:px-4 sm:py-4">
      <div className="columns-1 gap-3 sm:columns-2 lg:columns-3 xl:columns-4">
        {catalogMedia.map((item, index) => (
          <figure
            key={item.src}
            className="mb-3 break-inside-avoid overflow-hidden rounded-[1.5rem] bg-[#efe5d8]"
          >
            {item.type === "video" ? (
              <video
                className="h-auto w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                aria-label={`Catalogo ${index + 1}`}
              >
                <source src={item.src} type="video/mp4" />
              </video>
            ) : (
              <img
                src={item.src}
                alt={`Catalogo ${index + 1}`}
                className="h-auto w-full object-cover"
                loading="lazy"
              />
            )}
          </figure>
        ))}
      </div>
    </div>
  )
}
