import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const teamMembers = [
  {
    name: 'Alejandro',
    role: 'CEO / Founder',
    description: 'Experiencia en marketing, diseño gráfico y community management.',
    image: 'https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650861/Todo_aporte_cuenta_1_hreceo.png'
  },
  {
    name: 'Wanda',
    role: 'CEO / Founder',
    description: 'Desarrolladora web con experiencia en marketing, diseño gráfico y community manager.',
    image: 'https://res.cloudinary.com/dsyfal3wa/image/upload/v1775650892/Todo_aporte_cuenta_2_acsts9.png'
  }
];

export function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Nuestro equipo
          </h2>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group h-full"
            >
              <div className="bg-gray-800 rounded-xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-500/5 h-full flex flex-col">
                {/* Image */}
                <div className="h-56 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed flex-1">
                    {member.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}