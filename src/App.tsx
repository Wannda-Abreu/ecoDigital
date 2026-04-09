import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  BarChart3,
  Globe,
  Layout,
  PenTool,
  Search,
  Users,
} from "lucide-react"

const WHATSAPP_URL = "https://wa.me/346XXXXXXXX"
const LOGO_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775741260/b35c18e0-823c-4e42-b7de-2631dbc14c15_gjqw7h.png"
const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775737384/Neutral_Modern_Fashion_Website_2_liy16e.png"
const SOLUTION_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775741232/ChatGPT_Image_9_abr_2026_15_22_29_ounidn.png"

const services = [
  { title: "Creación de tienda online", icon: Globe },
  { title: "Gestión de redes sociales", icon: Users },
  { title: "Fotografía de producto", icon: PenTool },
  { title: "Identidad visual artesanal", icon: Layout },
  { title: "SEO local", icon: Search },
  { title: "Digitalización de negocios", icon: BarChart3 },
]

const benefits = [
  "✔ Más clientes sin depender del boca a boca",
  "✔ Presencia online profesional",
  "✔ Ahorro de tiempo",
  "✔ Estrategia clara para crecer",
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const heroHeadingTransition = { duration: 0.8 }
const heroBodyTransition = { delay: 0.2 }
const heroCtaTransition = { delay: 0.4 }

export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frameId = 0

    const updateScrolled = () => {
      frameId = 0
      const nextScrolled = window.scrollY > 50
      setScrolled((currentScrolled) =>
        currentScrolled === nextScrolled ? currentScrolled : nextScrolled,
      )
    }

    const handleScroll = () => {
      if (frameId !== 0) {
        return
      }

      frameId = window.requestAnimationFrame(updateScrolled)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }

      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div className="min-h-screen bg-[#f5f1e8] text-[#2f2a25] antialiased">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#f5f1e8]/70 backdrop-blur-md shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <img
            src={LOGO_URL}
            alt="Ecomercia"
            className="w-36"
            decoding="async"
          />

          <a
            href={WHATSAPP_URL}
            className="rounded-full bg-[#3F6B5B] px-5 py-2 text-sm text-white transition hover:scale-105"
          >
            Hablar ahora
          </a>
        </div>
      </header>

      <main className="flex flex-col gap-32">
        <section className="relative flex h-[90vh] w-full items-center justify-center text-center">
          <img
            src={HERO_IMAGE_URL}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover"
            fetchPriority="high"
          />

          <div className="absolute inset-0 bg-[#2f2a25]/60" />

          <div className="relative z-10 max-w-2xl px-6 text-white">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroHeadingTransition}
              className="text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Vende online sin dejar de ser tú
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroBodyTransition}
              className="mt-6 text-[#e7e0d6]"
            >
              Digitalizamos tu negocio artesanal para que consigas más clientes
              sin perder tu esencia.
            </motion.p>

            <motion.a
              href={WHATSAPP_URL}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={heroCtaTransition}
              className="mt-8 inline-block rounded-full bg-white px-8 py-3 text-[#2f2a25] transition hover:scale-105"
            >
              Quiero empezar
            </motion.a>
          </div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            Sabemos lo que te está pasando
          </h2>

          <p className="mt-6 text-[#5c5145]">
            Tienes un negocio con valor, pero no sabes cómo vender online, no
            tienes tiempo para redes o tu web no genera ventas.
          </p>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-6 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Nosotros lo hacemos por ti
          </h2>

          <img
            src={SOLUTION_IMAGE_URL}
            alt="Vista previa del servicio digital para negocios artesanales"
            className="mx-auto mt-10 w-full max-w-4xl rounded-[2rem] object-cover shadow-lg"
            loading="lazy"
            decoding="async"
          />

          <p className="mx-auto mt-6 max-w-2xl text-[#5c5145]">
            Creamos tu presencia digital completa adaptada a tu esencia
            artesanal.
          </p>
        </motion.section>

        <section className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-12 text-3xl font-semibold tracking-tight">
            Cómo te ayudamos
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 sm:grid-cols-2 md:grid-cols-3"
          >
            {services.map(({ title, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl bg-[#FFFAF3] p-6 shadow-sm transition-all hover:shadow-md"
              >
                <Icon className="mb-4 text-[#3F6B5B]" />
                <p className="font-medium">{title}</p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-4xl px-6 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight">
            Lo que vas a conseguir
          </h2>

          <ul className="mt-8 space-y-4 text-[#5c5145]">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </motion.section>

        <section className="px-6 py-20 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">
            Empieza hoy a vender online
          </h2>

          <a
            href={WHATSAPP_URL}
            className="mt-6 inline-block rounded-full bg-[#3F6B5B] px-8 py-3 text-white transition hover:scale-105"
          >
            Hablar por WhatsApp
          </a>
        </section>
      </main>

      <a
        href={WHATSAPP_URL}
        className="fixed bottom-6 right-6 rounded-full bg-[#3F6B5B] px-5 py-3 text-white shadow-lg transition hover:scale-110 animate-bounce"
      >
        WhatsApp
      </a>
    </div>
  )
}
