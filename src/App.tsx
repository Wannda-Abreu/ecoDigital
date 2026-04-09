import { useEffect, useState } from "react"
import { motion } from "motion/react"
import {
  BadgeCheck,
  BarChart3,
  Clock3,
  Globe,
  Layout,
  PenTool,
  Search,
  TrendingUp,
  Users,
} from "lucide-react"

const WHATSAPP_URL = "https://wa.me/346XXXXXXXX"
const LOGO_URL =
  "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775741260/b35c18e0-823c-4e42-b7de-2631dbc14c15_gjqw7h.png"
const HERO_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/video/upload/v1775761838/Untitled_500_x_200_px_1_rnrwmo.mp4"
const SOLUTION_IMAGE_URL =
  "https://res.cloudinary.com/dsyfal3wa/video/upload/v1775765531/Untitled_1080_x_1080_px_ypsrkt.mp4"

const services = [
  { title: "Creación de tienda online", icon: Globe },
  { title: "Gestión de redes sociales", icon: Users },
  { title: "Fotografía de producto", icon: PenTool },
  { title: "Identidad visual artesanal", icon: Layout },
  { title: "SEO local", icon: Search },
  { title: "Digitalización de negocios", icon: BarChart3 },
]

const benefits = [
  {
    title: "Más clientes y recomendaciones",
    icon: Users,
  },
  {
    title: "Presencia online profesional",
    icon: BadgeCheck,
  },
  {
    title: "Ahorro de tiempo",
    icon: Clock3,
  },
  {
    title: "Estrategia clara para crecer",
    icon: TrendingUp,
  },
]

const metrics = [
  {
    value: "24/7",
    label: "Presencia digital activa",
  },
  {
    value: "3",
    label: "Bloques clave para crecer",
  },
  {
    value: "1",
    label: "Estrategia clara para avanzar",
  },
  {
    value: "100%",
    label: "Adaptado a tu esencia",
  },
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-4">
          <img
            src={LOGO_URL}
            alt="Ecomercia"
            className="w-32 sm:w-36"
            decoding="async"
          />

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto sm:flex-nowrap">
            <a
              href="#servicios"
              className="rounded-full border border-[#d9cbb9] bg-white/70 px-4 py-2 text-xs text-[#2f2a25] transition hover:scale-105 sm:px-5 sm:text-sm"
            >
              Servicios
            </a>

            <a
              href={WHATSAPP_URL}
              className="rounded-full bg-[#3F6B5B] px-4 py-2 text-xs text-white transition hover:scale-105 sm:px-5 sm:text-sm"
            >
              Hablar ahora
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-20 sm:gap-24 lg:gap-32">
        <section className="relative flex min-h-[92svh] w-full items-start justify-center px-4 pb-12 pt-[50svh] text-center sm:h-[90vh] sm:items-center sm:px-6 sm:py-0">
          <video
            className="absolute inset-x-0 top-0 h-[44svh] w-full bg-[#2f2a25] object-cover object-center sm:inset-0 sm:h-full"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
          >
            <source src={HERO_IMAGE_URL} type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 top-0 h-[44svh] bg-[#2f2a25]/72 sm:inset-0 sm:h-full sm:bg-[#2f2a25]/60" />

          <div className="relative z-10 max-w-xl rounded-[1.75rem] bg-[#201b18]/30 px-4 py-5 text-white backdrop-blur-[2px] sm:max-w-2xl sm:bg-transparent sm:px-6 sm:py-0 sm:backdrop-blur-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroHeadingTransition}
              className="text-[2.15rem] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-4xl sm:tracking-tight md:text-5xl"
            >
              Vende online sin dejar de ser tú
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={heroBodyTransition}
              className="mt-4 text-sm font-medium leading-7 text-[#f5eee4] sm:mt-6 sm:text-base"
            >
              Digitalizamos tu negocio artesanal para que consigas más clientes
              sin perder tu esencia.
            </motion.p>

            <motion.a
              href="#problema"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={heroCtaTransition}
              className="mt-6 inline-block w-full rounded-full bg-white px-6 py-3 text-[#2f2a25] transition hover:scale-105 sm:mt-8 sm:w-auto sm:px-8"
            >
              Quiero empezar
            </motion.a>
          </div>
        </section>

        <motion.section
          id="problema"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl scroll-mt-32 px-4 text-center sm:scroll-mt-28 sm:px-6"
        >
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Sabemos lo que te está pasando
          </h2>

          <div className="mt-6 rounded-[2rem] border border-[#d6c6b1] bg-[#fffdf9] px-5 py-6 shadow-sm sm:mt-8 sm:px-6 sm:py-8">
            <p className="mx-auto max-w-2xl text-left text-[1.05rem] font-semibold leading-8 text-[#16241d] sm:text-center sm:text-lg sm:leading-8">
              Tienes un negocio con valor, pero no sabes cómo vender online,
              no tienes tiempo para redes o tu web no genera ventas.
            </p>

            <div className="mt-6 grid gap-3 text-sm text-[#16241d] sm:mt-6 sm:flex sm:flex-wrap sm:justify-center">
              <span className="rounded-2xl border border-[#d8c8b4] bg-[#f7efe4] px-4 py-3 text-left font-semibold text-[#16241d] sm:rounded-full sm:px-4 sm:py-2">
                Vender online
              </span>
              <span className="rounded-2xl border border-[#d8c8b4] bg-[#f7efe4] px-4 py-3 text-left font-semibold text-[#16241d] sm:rounded-full sm:px-4 sm:py-2">
                Falta de tiempo
              </span>
              <span className="rounded-2xl border border-[#d8c8b4] bg-[#f7efe4] px-4 py-3 text-left font-semibold text-[#16241d] sm:rounded-full sm:px-4 sm:py-2">
                Web sin resultados
              </span>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="px-4 text-center sm:px-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Nosotros lo hacemos por ti
          </h2>

          <div className="mx-auto mt-8 aspect-square w-full max-w-4xl overflow-hidden rounded-[2rem] bg-[#efe4d7] shadow-lg sm:mt-10 sm:aspect-[16/10]">
            <video
              className="h-full w-full object-contain object-center sm:object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="Vista previa del servicio digital para negocios artesanales"
            >
              <source src={SOLUTION_IMAGE_URL} type="video/mp4" />
            </video>
          </div>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#5c5145] sm:text-base">
            Creamos tu presencia digital completa adaptada a tu esencia
            artesanal.
          </p>
        </motion.section>

        <section
          id="servicios"
          className="mx-auto max-w-6xl scroll-mt-32 px-4 text-center sm:scroll-mt-28 sm:px-6"
        >
          <h2 className="mb-8 text-3xl font-semibold tracking-tight sm:mb-12 sm:text-4xl">
            Cómo te ayudamos
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-5 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-8"
          >
            {services.map(({ title, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="rounded-2xl bg-[#FFFAF3] p-5 shadow-sm transition-all hover:shadow-md sm:p-6"
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
          className="mx-auto max-w-4xl px-4 text-center sm:px-6"
        >
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Lo que vas a conseguir
          </h2>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-8 grid gap-4 text-left sm:mt-10 sm:grid-cols-2 sm:gap-5"
          >
            {benefits.map(({ title, icon: Icon }) => (
              <motion.div
                key={title}
                variants={fadeUp}
                whileHover={{ y: -6, scale: 1.01 }}
                className="flex items-center gap-4 rounded-3xl border border-[#e8ddcf] bg-[#fffaf3] px-4 py-4 shadow-sm transition-all hover:shadow-md sm:px-5 sm:py-5"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3F6B5B] text-white shadow-sm">
                  <Icon className="h-5 w-5" />
                </div>

                <p className="text-base font-medium text-[#5c5145]">{title}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {metrics.map(({ value, label }) => (
              <motion.div
                key={label}
                variants={fadeUp}
                className="rounded-3xl border border-[#e8ddcf] bg-[#f9f2e9] px-4 py-5 shadow-sm sm:px-5 sm:py-6"
              >
                <p className="text-2xl font-semibold tracking-tight text-[#3F6B5B] sm:text-3xl">
                  {value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#5c5145]">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        <section className="px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Empieza hoy a vender online
          </h2>

          <a
            href={WHATSAPP_URL}
            className="mt-6 inline-block w-full rounded-full bg-[#3F6B5B] px-8 py-3 text-white transition hover:scale-105 sm:w-auto"
          >
            Hablar por WhatsApp
          </a>
        </section>
      </main>

      <a
        href={WHATSAPP_URL}
        className="fixed bottom-4 right-4 rounded-full bg-[#3F6B5B] px-4 py-2.5 text-sm text-white shadow-lg transition hover:scale-110 animate-bounce sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-base"
      >
        WhatsApp
      </a>
    </div>
  )
}
