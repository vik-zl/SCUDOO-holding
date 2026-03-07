import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Brain,
  Dumbbell,
  LineChart,
  Smartphone,
  Database,
  Globe2,
} from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Solutions Intelligence Artificielle',
    subtitle: 'Analyse, automatisation et personnalisation',
    description:
      'Développement de solutions intelligentes capables d’analyser les données, recommander des actions et enrichir l’expérience de performance avec une logique avancée et évolutive.',
    tags: ['IA', 'Data', 'Automation'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    Icon: Brain,
  },
  {
    id: 2,
    title: 'Distribution d’équipements fitness intelligents',
    subtitle: 'Matériel connecté et performance augmentée',
    description:
      'Sélection et distribution d’équipements connectés pensés pour mesurer, suivre et optimiser l’entraînement dans des environnements modernes et haut de gamme.',
    tags: ['Fitness', 'Équipements connectés', 'Performance'],
    image:
      'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80',
    Icon: Dumbbell,
  },
  {
    id: 3,
    title: 'Analyseurs corporels avancés',
    subtitle: 'Mesure, lecture et interprétation',
    description:
      'Outils technologiques conçus pour fournir une lecture précise de la composition corporelle, de l’évolution des résultats et des indicateurs de performance.',
   tags: ['Analyse', 'Scan corporel', 'Précision'],
    image:
      'https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&w=1200&q=80',
    Icon: LineChart,
  },
  {
    id: 4,
    title: 'Applications intelligentes',
    subtitle: 'Expérience utilisateur premium et connectée',
    description:
      'Création d’applications modernes reliant données, interfaces et expérience client dans une approche fluide, utile et stratégiquement pensée.',
    tags: ['Applications', 'Expérience utilisateur', 'Connectivité'],
    image:
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80',
    Icon: Smartphone,
  },
  {
    id: 5,
    title: 'Développement de CRM et plateformes connectées',
    subtitle: 'Infrastructure numérique évolutive',
    description:
      'Conception de plateformes connectées et de systèmes CRM capables de soutenir des opérations intelligentes, des relations clients mieux structurées et une croissance durable.',
    tags: ['CRM', 'Plateformes', 'Évolutivité'],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    Icon: Database,
  },
  {
    id: 6,
    title: 'Service d’accompagnement import Chine – Canada',
    subtitle: 'Pont stratégique et accompagnement international',
    description:
      'Accompagnement stratégique pour faciliter les connexions d’affaires, l’approvisionnement et l’intégration technologique entre différents marchés à fort potentiel.',
   tags: ['International', 'Stratégie', 'Approvisionnement'],
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    Icon: Globe2,
  },
]

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = useMemo(() => services[activeIndex], [activeIndex])

  return (
    <section
      id="services"
      className="relative mx-auto max-w-[1280px] px-5 pb-24 pt-20 md:px-8 lg:px-10 lg:pt-28"
    >
      <div className="mb-16 text-center">
        <p className="section-eyebrow">Nos Services</p>

        <h2 className="section-title mx-auto mt-5 max-w-[900px]">
          Une ingénierie technologique au service de la performance humaine.
        </h2>

        <p className="section-text mx-auto mt-6 max-w-[820px]">
          Découvrez les pôles d’expertise qui structurent l’écosystème SCUDOO.
          Cliquez sur un point pour explorer chaque solution dans une présentation
          plus premium et plus immersive.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[360px_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="relative overflow-hidden rounded-[34px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
            <div className="absolute bottom-8 left-10 top-8 w-px -translate-x-1/2 bg-gradient-to-b from-[#665328] via-[#e0c37d] to-[#665328]" />

            <div className="space-y-6">
              {services.map((service, index) => {
                const Icon = service.Icon
                const isActive = index === activeIndex

                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="group relative flex w-full items-center gap-5 text-left"
                  >
                    <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center">
                      <span
                        className={[
                          'block h-4 w-4 rounded-full border-2 transition-all duration-300',
                          isActive
                            ? 'border-[#f0d189] bg-[#f0d189] shadow-[0_0_18px_rgba(240,209,137,0.95)]'
                            : 'border-[#9f844e] bg-[#071426]',
                        ].join(' ')}
                      />
                    </div>

                    <div className="min-w-0">
                      <div
                        className={[
                          'font-sans text-[11px] font-semibold uppercase tracking-[0.24em] transition',
                          isActive ? 'text-[#dfc37d]' : 'text-white/32',
                        ].join(' ')}
                      >
                        Service {String(index + 1).padStart(2, '0')}
                      </div>

                      <div
                        className={[
                          'mt-1.5 flex items-start gap-2.5 transition',
                          isActive
                            ? 'text-white'
                            : 'text-white/62 group-hover:text-white/85',
                        ].join(' ')}
                      >
                        <Icon
                          className={[
                            'mt-[2px] h-4 w-4 shrink-0 transition',
                            isActive ? 'text-[#dfc37d]' : 'text-white/35',
                          ].join(' ')}
                        />
                        <span className="font-display text-[15px] font-semibold leading-[1.35] md:text-[17px]">
                          {service.title}
                        </span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        <div className="min-h-[580px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService.id}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="overflow-hidden rounded-[36px] border border-[#17365d] bg-[linear-gradient(135deg,rgba(8,22,40,0.96),rgba(7,16,29,0.98))] shadow-[0_30px_90px_rgba(0,0,0,0.32)]"
            >
              <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                <div className="flex flex-col justify-between p-7 md:p-10 lg:p-12">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-[#d5b66e]/20 bg-[#0c1d33] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#dfc37d]">
                      <activeService.Icon className="h-3.5 w-3.5" />
                      Service {String(activeService.id).padStart(2, '0')}
                    </div>

                    <h3 className="card-title mt-6 max-w-[580px] text-white md:text-[42px]">
                      {activeService.title}
                    </h3>

                    <p className="mt-4 text-[13px] font-medium uppercase tracking-[0.18em] text-[#9eb1ca] md:text-[14px]">
                      {activeService.subtitle}
                    </p>

                    <p className="card-text mt-8 max-w-[620px] md:text-lg">
                      {activeService.description}
                    </p>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    {activeService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-white/78"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[320px] overflow-hidden lg:min-h-full">
                  <img
                    src={activeService.image}
                    alt={activeService.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,10,20,0.05),rgba(3,10,20,0.42))]" />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(180deg,transparent,rgba(3,10,20,0.85))]" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}