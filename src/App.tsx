import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import Hero from "./Hero"
import {
  Globe,
  Users,
  PenTool,
  Layout,
  BarChart3,
  Search,
} from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Wanda",
    role: "Soporte administrativo y digitalización",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650861/Todo_aporte_cuenta_1_hreceo.png",
  },
  {
    id: 2,
    name: "Próximamente",
    role: "Nuevo colaborador",
    image: "https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650892/Todo_aporte_cuenta_2_acsts9.png",
  },
]

const services = [
  { title: "Consultoría de marketing", icon: BarChart3 },
  { title: "Desarrollo web", icon: Globe },
  { title: "Asistencia de administración", icon: Users },
  { title: "Diseño de logotipos", icon: PenTool },
  { title: "Estrategia de contenidos", icon: Layout },
  { title: "Diseño UX", icon: Layout },
  { title: "Marketing digital", icon: BarChart3 },
  { title: "Marketing redes sociales", icon: Globe },
  { title: "SEO", icon: Search },
]

const stats = [
  { value: 50, suffix: "+", label: "negocios digitalizados" },
  { value: 300, suffix: "+", label: "clientes alcanzados" },
  { value: 3, suffix: "x", label: "más visibilidad online" },
]

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const increment = target / 40
    const timer = setInterval(() => {
      setCount(prev => (prev >= target ? target : prev + increment))
    }, 40)
    return () => clearInterval(timer)
  }, [target])

  return <span>{Math.round(count)}{suffix}</span>
}

function TeamCard({ member, onClick }: any) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ y: -6 }}
      className="group w-full max-w-[180px] mx-auto overflow-hidden rounded-2xl border border-white/10 bg-white/5 hover:border-sky-300/30 transition"
    >
      <img
        src={member.image}
        alt={member.name}
        className="w-full aspect-square object-cover"
      />

      <div className="p-3 text-center">
        <h3 className="text-sm font-semibold">{member.name}</h3>
        <p className="text-xs text-sky-300">{member.role}</p>
      </div>
    </motion.button>
  )
}

function TeamModal({ member, isOpen, onClose }: any) {
  if (!isOpen || !member) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-xl border border-white/10 bg-slate-900 p-6"
      >
        <h2 className="text-xl font-semibold">{member.name}</h2>
        <p className="mt-2 text-sm text-gray-400">{member.role}</p>

        <button onClick={onClose} className="mt-6 text-sky-400">
          Cerrar
        </button>
      </div>
    </div>
  )
}

export default function App() {
  const [selected, setSelected] = useState<any>(null)

  return (
    <div className="min-h-screen bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
        <span className="text-sm tracking-widest text-gray-400">
          ENLINEA DIGITAL
        </span>

        <button className="border border-white/20 px-4 py-2 rounded-full text-sm">
          Hazte visible
        </button>
      </div>

      <main className="flex flex-col gap-20">

        <section className="mt-20">
          <Hero />
        </section>

       <section className="w-full px-6">
  <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl border border-white/10">
    <img
      src="https://res.cloudinary.com/dsyfal3wa/image/upload/v1775675852/Neutral_Modern_Fashion_Website_bc1d0p.png"
      alt="banner"
      className="w-full h-[260px] md:h-[420px] object-cover object-center"
    />
  </div>
</section>
       <section className="px-6 text-center">
  <h2 className="text-3xl font-semibold mb-8">
    Nuestro equipo
  </h2>

  <div className="flex flex-wrap justify-center gap-10">
    {teamMembers.map((member) => (
      <motion.button
        key={member.id}
        onClick={() => setSelected(member)}
        whileHover={{ scale: 1.05 }}
        className="w-full max-w-[320px] overflow-hidden rounded-2xl border border-white/10 bg-white/5"
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full aspect-square object-cover"
        />

        <div className="p-5 text-center">
          <h3 className="text-base font-semibold">{member.name}</h3>
          <p className="text-sm text-sky-300">{member.role}</p>
        </div>
      </motion.button>
    ))}
  </div>
</section>

        <section className="grid gap-6 sm:grid-cols-3 text-center px-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="border border-white/10 p-6 rounded-xl"
            >
              <p className="text-3xl font-semibold">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-xs mt-2 text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </section>

        <section className="text-center px-6 py-12">
          <h2 className="text-3xl font-semibold">
            Empieza hoy y consigue clientes online
          </h2>

          <button className="mt-6 bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
            Quiero empezar
          </button>
        </section>

      </main>

      <TeamModal
        member={selected}
        isOpen={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  )
}