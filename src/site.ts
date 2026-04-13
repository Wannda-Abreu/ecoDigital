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
    "v1775741260/b35c18e0-823c-4e42-b7de-2631dbc14c15_gjqw7h.png",
    320,
  )

export const HERO_IMAGE_URL =
  cloudinaryImage(
    "v1776029793/ChatGPT_Image_12_abr_2026_23_36_06_xgkuyy.png",
    1920,
  )

export const SOLUTION_IMAGE_URL =
  `${CLOUDINARY_VIDEO_BASE}/v1775765531/Untitled_1080_x_1080_px_ypsrkt.mp4`

export const RESULTS_BACKGROUND_URL =
  cloudinaryImage(
    "v1776029793/ChatGPT_Image_12_abr_2026_23_35_59_sq0asi.png",
    1600,
  )
