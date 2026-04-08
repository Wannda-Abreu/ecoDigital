import { motion } from "motion/react"

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] text-center overflow-hidden">

      <div className="max-w-3xl px-6 flex flex-col items-center gap-6">

        {/* TITULO */}
        <h1 className="text-4xl sm:text-5xl font-semibold leading-tight">

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Consigue clientes online{" "}
          </motion.span>

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="text-purple-400"
          >
            sin complicaciones
          </motion.span>

        </h1>

        {/* TEXTO */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4 }}
          className="text-gray-400 max-w-xl"
        >
          Creamos tu presencia digital para que te encuentren, te elijan y te contacten.
        </motion.p>

        {/* BOTONES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 4.5 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold">
            Empieza ahora
          </button>

          <button className="border border-white/20 px-8 py-3 rounded-full">
            Cómo funciona
          </button>
        </motion.div>
      </div>
    </section>
  )
}