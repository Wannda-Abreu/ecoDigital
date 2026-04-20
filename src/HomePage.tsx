import type { MouseEventHandler } from "react"
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
import {
  HERO_DESKTOP_VIDEO_URL,
  HERO_MOBILE_VIDEO_URL,
  LOGO_URL,
  RESULTS_BACKGROUND_URL,
  SOLUTION_IMAGE_URL,
  WHATSAPP_URL,
} from "./site"

const services = [
  { title: "Creacion de tienda online", icon: Globe },
  { title: "Gestion de redes sociales", icon: Users },
  { title: "Fotografia de producto", icon: PenTool },
  { title: "Identidad visual artesanal", icon: Layout },
  { title: "SEO local", icon: Search },
  { title: "Digitalizacion de negocios", icon: BarChart3 },
]

const benefits = [
  {
    title: "Mas clientes y recomendaciones",
    detail: "Una presencia que convierte la confianza artesanal en ventas reales.",
    icon: Users,
  },
  {
    title: "Presencia online profesional",
    detail: "Imagen, tono y estructura alineados con el valor de tus piezas.",
    icon: BadgeCheck,
  },
  {
    title: "Ahorro de tiempo",
    detail: "Procesos mas claros para publicar, responder y vender con calma.",
    icon: Clock3,
  },
  {
    title: "Estrategia clara para crecer",
    detail: "Una ruta simple para pasar de presencia digital a crecimiento sostenible.",
    icon: TrendingUp,
  },
]

const metrics = [
  { value: "24/7", label: "Visibilidad constante" },
  { value: "3", label: "Bloques de crecimiento" },
  { value: "1", label: "Sistema coherente" },
  { value: "100%", label: "Hecho a tu medida" },
]

const collaborators = [
  {
    name: "Lucia",
    craft: "Ceramica organica",
    note: "Piezas serenas para mesas, rincones y rituales cotidianos.",
  },
  {
    name: "Marta",
    craft: "Textiles de autor",
    note: "Tejidos suaves y tonos tierra pensados para hogares con calma.",
  },
  {
    name: "Ines",
    craft: "Objetos decorativos",
    note: "Series cortas con textura, materia y una presencia muy editorial.",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
}

type HomePageProps = {
  catalogHref: string
  onNavigateCatalog: MouseEventHandler<HTMLAnchorElement>
}

export function HomePage({
  catalogHref,
  onNavigateCatalog,
}: HomePageProps) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frameId = 0

    const updateScrolled = () => {
      frameId = 0
      const nextScrolled = window.scrollY > 30
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
    <div className="artisan-shell min-h-screen text-[#2f2a25] antialiased">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/18 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(255,255,255,0.08))] shadow-[0_10px_30px_rgba(79,58,42,0.08)] backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="flex items-center gap-4">
            <img
              src={LOGO_URL}
              alt="Ecomercia"
              className="w-36 sm:w-40"
              decoding="async"
              width={360}
              height={100}
            />
            <span className="hidden rounded-full border border-[#d8d0c6] bg-[#fffdf9]/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.22em] text-[#7d746a] lg:inline-flex">
              Digital con alma artesanal
            </span>
          </div>

          <div className="flex w-full flex-wrap items-center justify-center gap-3 sm:w-auto sm:flex-nowrap">
            <a
              href="#servicios"
              className="artisan-button-secondary rounded-full px-4 py-2 text-xs transition hover:-translate-y-0.5 sm:px-5 sm:text-sm"
            >
              Servicios
            </a>

            <a
              href={catalogHref}
              onClick={onNavigateCatalog}
              className="artisan-button-secondary rounded-full px-4 py-2 text-xs transition hover:-translate-y-0.5 sm:px-5 sm:text-sm"
            >
              Catalogo
            </a>

            <a
              href={WHATSAPP_URL}
              className="artisan-button-primary rounded-full px-4 py-2 text-xs transition hover:-translate-y-0.5 sm:px-5 sm:text-sm"
            >
              Hablar ahora
            </a>
          </div>
        </div>
      </header>

      <main className="flex flex-col gap-20 pb-16 sm:gap-24 lg:gap-32">
        <section className="hero-video-fallback relative flex min-h-[92svh] w-full items-start justify-center px-4 pb-12 pt-[50svh] sm:min-h-[88svh] sm:items-center sm:px-6 sm:py-0">
          <video
            className="hero-background-video hero-background-video--desktop"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={HERO_DESKTOP_VIDEO_URL} type="video/mp4" />
          </video>

          <video
            className="hero-background-video hero-background-video--mobile"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          >
            <source src={HERO_MOBILE_VIDEO_URL} type="video/mp4" />
          </video>

          <div className="absolute inset-x-0 top-0 h-[44svh] bg-[#1f1a17]/46 sm:inset-0 sm:h-full sm:bg-[#1f1a17]/28" />
          <div className="absolute inset-x-0 top-0 h-[44svh] bg-gradient-to-b from-[#f7f1e9]/4 via-transparent to-transparent sm:inset-0 sm:h-full" />

          <div className="relative z-10 max-w-xl rounded-[2rem] border border-white/16 bg-[linear-gradient(180deg,rgba(33,28,24,0.34),rgba(33,28,24,0.22)_62%,rgba(207,118,80,0.16)_100%)] px-5 py-6 text-center text-white shadow-[0_24px_60px_rgba(16,12,10,0.12)] backdrop-blur-[4px] sm:max-w-3xl sm:px-8 sm:py-8 lg:px-10 lg:py-10">
            <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/22 bg-white/8 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#fff3e6]">
              <span className="h-2 w-2 rounded-full bg-[#cf7650]" />
              Presencia digital profesional
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-6 text-[2.3rem] font-semibold leading-[0.96] tracking-[-0.05em] text-[#fffaf4] drop-shadow-[0_10px_35px_rgba(0,0,0,0.18)] sm:text-5xl md:text-[3.8rem]"
            >
              Vende online sin perder tu esencia.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mx-auto mt-5 max-w-2xl text-sm font-medium leading-7 text-[#fff0de] drop-shadow-[0_8px_20px_rgba(0,0,0,0.12)] sm:mt-6 sm:text-base sm:leading-8"
            >
              Impulsamos tu marca artesanal con una presencia digital clara que
              pone en valor tu trabajo desde el primer momento
            </motion.p>

            <div className="mt-7 flex flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:justify-center">
              <motion.a
                href="#problema"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="inline-flex w-full items-center justify-center rounded-full bg-[#fff1e7] px-6 py-3 text-[#24211d] shadow-[0_16px_35px_rgba(27,21,17,0.16)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#cf7650] hover:text-white sm:w-auto sm:px-8"
              >
                Explorar
              </motion.a>

              <motion.a
                href={WHATSAPP_URL}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/4 px-6 py-3 text-[#fffaf4] shadow-[0_16px_35px_rgba(22,18,16,0.12)] transition duration-300 hover:-translate-y-0.5 hover:border-[#f2ddd0] hover:bg-[#cf7650] hover:text-white sm:w-auto sm:px-8"
              >
                Hablar ahora
              </motion.a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-[#f6e7d7] sm:gap-3">
              <span className="rounded-full border border-white/18 bg-white/7 px-3 py-1.5">
                Catalogo visual
              </span>
              <span className="rounded-full border border-white/18 bg-white/7 px-3 py-1.5">
                CTA directos
              </span>
              <span className="rounded-full border border-white/18 bg-white/7 px-3 py-1.5">
                Marca coherente
              </span>
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.24em] text-[#f4e4d4] sm:text-[11px]">
              Para talleres, estudios y marcas artesanales que quieren crecer con coherencia
            </p>
          </div>
        </section>

        <motion.section
          id="problema"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-5xl scroll-mt-28 px-4 sm:px-6"
        >
          <div className="artisan-card rounded-[2.2rem] p-6 sm:p-8 lg:p-10">
            <div className="mx-auto max-w-3xl text-center">
              <p className="artisan-eyebrow">El punto de partida</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Sabemos lo que te esta frenando.
              </h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              <div className="artisan-outline rounded-[1.6rem] p-5">
                <p className="text-lg font-semibold">Vender online</p>
                <p className="mt-2 text-sm leading-7 text-[#6d6257]">
                  Tienes producto y valor, pero no un sistema claro para mostrarlo.
                </p>
              </div>
              <div className="artisan-outline rounded-[1.6rem] p-5">
                <p className="text-lg font-semibold">Falta de tiempo</p>
                <p className="mt-2 text-sm leading-7 text-[#6d6257]">
                  La gestion diaria no deja espacio para construir una presencia fuerte.
                </p>
              </div>
              <div className="artisan-outline rounded-[1.6rem] p-5">
                <p className="text-lg font-semibold">Web sin resultados</p>
                <p className="mt-2 text-sm leading-7 text-[#6d6257]">
                  La imagen existe, pero aun no acompana bien la venta.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center"
        >
          <div>
            <p className="artisan-eyebrow">Lo hacemos por ti</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
              Una experiencia digital que parece taller, pero funciona como marca.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#5c5145]">
              Organizamos imagen, narrativa y venta para que tu proyecto se vea
              artesanal, si, pero tambien claro, deseable y actual.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[2.4rem] border border-[#d8d0c6] bg-[#efe8de] shadow-[0_25px_80px_rgba(86,67,51,0.1)] lg:w-[88%] lg:justify-self-end">
            <video
              className="h-full w-full object-cover"
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
        </motion.section>

        <section
          id="servicios"
          className="mx-auto max-w-7xl scroll-mt-28 px-4 sm:px-6"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="artisan-eyebrow">Servicios</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Te ayudamos a digitalizar sin perder la vibra artesanal.
            </h2>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
          >
            {services.map(({ title, icon: Icon }) => (
              <motion.article
                key={title}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="artisan-card rounded-[1.9rem] p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3dfd2] text-[#cf7650]">
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-5 text-xl font-semibold tracking-tight">{title}</p>
                <p className="mt-3 text-sm leading-7 text-[#6d6257]">
                  Diseñado para mantener la coherencia entre lo que haces, lo
                  que muestras y lo que finalmente vendes.
                </p>
              </motion.article>
            ))}
          </motion.div>
        </section>

        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-4 sm:px-6"
        >
          <div className="relative overflow-hidden rounded-[2.6rem] border border-[#d8d0c6] px-4 py-10 shadow-[0_25px_80px_rgba(57,46,37,0.08)] sm:px-8 sm:py-12">
            <img
              src={RESULTS_BACKGROUND_URL}
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              width={1600}
              height={1000}
              sizes="(max-width: 1024px) 100vw, 80vw"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(246,243,238,0.66),rgba(246,243,238,0.56))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(207,118,80,0.10),transparent_22%)]" />

            <div className="relative">
              <div className="mx-auto max-w-3xl text-center">
                <p className="artisan-eyebrow">Resultados</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                  Lo que vas a conseguir
                </h2>
              </div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-10 grid gap-5 lg:grid-cols-2"
              >
                {benefits.map(({ title, detail, icon: Icon }) => (
                  <motion.article
                    key={title}
                    variants={fadeUp}
                    whileHover={{ y: -6 }}
                    className="rounded-[2rem] border border-white/26 bg-[linear-gradient(180deg,rgba(255,255,255,0.32),rgba(255,255,255,0.18))] p-6 shadow-[0_18px_40px_rgba(57,46,37,0.10)] backdrop-blur-[6px]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#cf7650] text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-[#2f2a25]">{title}</p>
                        <p className="mt-2 text-sm leading-7 text-[#6d6257]">{detail}</p>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
              >
                {metrics.map(({ value, label }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    className="rounded-[1.8rem] border border-white/24 bg-[linear-gradient(180deg,rgba(255,255,255,0.28),rgba(255,255,255,0.16))] px-5 py-6 shadow-[0_14px_30px_rgba(57,46,37,0.08)] backdrop-blur-[5px]"
                  >
                    <p className="text-3xl font-semibold tracking-tight text-[#cf7650]">
                      {value}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#6d6257]">{label}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={catalogHref}
                  onClick={onNavigateCatalog}
                  className="artisan-button-primary inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Ver catalogo
                </a>

                <a
                  href="#artesanos"
                  className="artisan-button-secondary inline-flex w-full items-center justify-center rounded-full px-8 py-3.5 text-center text-sm font-medium transition hover:-translate-y-0.5 sm:w-auto"
                >
                  Conoce a nuestros colaboradores
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="artesanos"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl scroll-mt-28 px-4 sm:px-6"
        >
          <div className="mx-auto max-w-3xl text-center">
            <p className="artisan-eyebrow">Artesanos colaboradores</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Rostros, manos y piezas hechas a mano que dan profundidad a la marca.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#5c5145] sm:text-base">
              No hablamos solo de producto. Hablamos de origen, gesto, proceso y
              una forma particular de mirar lo cotidiano.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {collaborators.map(({ name, craft, note }) => (
              <motion.article
                key={name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="artisan-card rounded-[2rem] p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3dfd2] text-lg font-semibold text-[#cf7650]">
                    {name.charAt(0)}
                  </div>
                  <span className="rounded-full border border-[#ddd0c1] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[#8b745f]">
                    Colabora
                  </span>
                </div>
                <p className="mt-5 text-2xl font-semibold tracking-tight text-[#2f2a25]">
                  {name}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-[0.18em] text-[#8b745f]">
                  {craft}
                </p>
                <p className="mt-4 text-sm leading-7 text-[#5c5145]">{note}</p>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>

        <section className="px-4 sm:px-6">
          <div className="mx-auto max-w-6xl rounded-[2.4rem] border border-[#d8d0c6] bg-[#25211d] px-6 py-10 text-center text-white shadow-[0_25px_80px_rgba(47,42,37,0.16)] sm:px-10 sm:py-14">
            <p className="artisan-eyebrow text-[#ddc2ae]">Siguiente paso</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Dale a tu marca artesanal una presencia que se sienta actual y viva.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#f0e4d8] sm:text-base">
              Podemos convertir tu universo visual en una experiencia digital
              coherente, deseable y lista para vender.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={WHATSAPP_URL}
                className="rounded-full bg-[#fff3e8] px-8 py-3.5 text-sm font-medium text-[#24211d] transition hover:-translate-y-0.5"
              >
                Hablar por WhatsApp
              </a>

              <a
                href={catalogHref}
                onClick={onNavigateCatalog}
                className="rounded-full border border-white/25 bg-white/5 px-8 py-3.5 text-sm font-medium text-white transition hover:-translate-y-0.5"
              >
                Abrir catalogo
              </a>
            </div>
          </div>
        </section>
      </main>

      <a
        href={WHATSAPP_URL}
        className="fixed bottom-4 right-4 rounded-full bg-[#cf7650] px-4 py-2.5 text-sm text-white shadow-[0_12px_30px_rgba(207,118,80,0.22)] transition hover:-translate-y-0.5 sm:bottom-6 sm:right-6 sm:px-5 sm:py-3 sm:text-base"
      >
        WhatsApp
      </a>
    </div>
  )
}

