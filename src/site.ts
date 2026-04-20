export const WHATSAPP_URL = "https://wa.me/34656501271"

const CLOUDINARY_IMAGE_BASE =
  "https://res.cloudinary.com/dsyfal3wa/image/upload"
const CLOUDINARY_VIDEO_BASE =
  "https://res.cloudinary.com/dsyfal3wa/video/upload"

function cloudinaryImage(path: string, width: number) {
  return `${CLOUDINARY_IMAGE_BASE}/f_auto,q_auto:eco,c_limit,w_${width}/${path}`
}

export const LOGO_URL =
  cloudinaryImage(
    "v1776154614/LOGO_ECOMERCIA_5_xwta6w.png",
    320,
  )

export const HERO_IMAGE_URL =
  cloudinaryImage(
    "v1776029793/ChatGPT_Image_12_abr_2026_23_36_06_xgkuyy.png",
    1920,
  )

export const HERO_DESKTOP_VIDEO_URL =
  `${CLOUDINARY_VIDEO_BASE}/v1776685036/desktop_2_u4dnjj.mp4`

export const HERO_MOBILE_VIDEO_URL =
  `${CLOUDINARY_VIDEO_BASE}/v1776685043/mobile_z11f98.mp4`

export const SOLUTION_IMAGE_URL =
  `${CLOUDINARY_VIDEO_BASE}/v1776686256/sesion_2_h3ogdd.mp4`

export const RESULTS_BACKGROUND_URL =
  cloudinaryImage(
    "v1776029793/ChatGPT_Image_12_abr_2026_23_35_59_sq0asi.png",
    1600,
  )
