import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'

const aboutCards = [
  {
    title: 'Vision',
    text: 'Devenir la référence mondiale en solutions technologiques pour la performance humaine, le fitness intelligent et les environnements numériques connectés.',
  },
  {
    title: 'Mission',
    text: 'Développer, distribuer et intégrer des technologies avancées capables de transformer la manière dont les individus optimisent leur santé, leur performance et leur bien-être.',
  },
  {
    title: 'Positionnement',
    text: 'SCUDOO Holding se positionne comme un groupe technologique innovant, intégrateur de solutions avancées et développeur d’écosystèmes numériques de calibre international.',
  },
]

export default function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1280px] px-5 pb-14 pt-20 md:px-8 lg:px-10 lg:pb-18 lg:pt-28"
    >
      <div className="mb-16 text-center">
        <p className="section-eyebrow">À propos</p>
        <h2 className="section-title mt-5">
          Une identité technologique <br></br> claire et structurée.
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3 md:gap-10">
        {aboutCards.map((card, index) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: index * 0.08 }}
            className="rounded-[22px] border border-[#0a203a] bg-[linear-gradient(180deg,rgba(4,19,39,0.96),rgba(3,15,30,0.98))] px-7 py-8 shadow-[0_22px_50px_rgba(0,0,0,0.22)]"
          >
            <div className="mb-5 inline-flex rounded-full border border-[#0e3c79] bg-[#031127] p-3 text-[#0e58b0] shadow-[0_0_20px_rgba(14,88,176,0.08)]">
              <ShieldCheck className="h-7 w-7" />
            </div>

            <h3 className="card-title text-[#f1cd79]">{card.title}</h3>
            <p className="card-text mt-4">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}