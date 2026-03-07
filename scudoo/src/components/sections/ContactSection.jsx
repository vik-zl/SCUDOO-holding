import { motion } from 'framer-motion'
import { Mail, MapPinned } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="mx-auto max-w-[1280px] px-5 pb-24 pt-14 md:px-8 lg:px-10 lg:pt-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-[34px] border border-[#d2af69]/20 bg-[linear-gradient(135deg,#081726_0%,#07111d_100%)] px-7 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.3)] md:px-12 md:py-14"
      >
        <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(210,175,105,0.18),transparent_70%)] blur-3xl" />
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="text-[12px] uppercase tracking-[0.2em] text-[#e3c880]">Contact</div>
            <h2 className="mt-4 max-w-[720px] text-3xl font-semibold leading-tight text-white md:text-5xl">
              Entrez dans la prochaine génération de la performance technologique.
            </h2>
            <p className="mt-6 max-w-[760px] text-[15px] leading-8 text-white/72">
              Découvrez comment SCUDOO Holding peut accélérer vos projets technologiques, vos environnements connectés et vos ambitions en performance humaine.
            </p>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <a
              href="mailto:contact@scudoo.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(180deg,#e8ca84_0%,#c39a51_100%)] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#07101b] transition hover:-translate-y-1"
            >
              <Mail className="h-4 w-4" />
              Demander une présentation
            </a>
            <a
              href="#top"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white/[0.03] px-7 py-4 text-[12px] font-semibold uppercase tracking-[0.18em] text-white transition hover:border-[#d2af69]/35"
            >
              <MapPinned className="h-4 w-4" />
              Retour en haut
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}