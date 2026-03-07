import { motion } from 'framer-motion'
import coverImg from '../../assets/scudoo-cover.jpg.jpeg'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-24 md:px-8 md:pb-16 md:pt-28 lg:px-18 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="relative w-full overflow-hidden rounded-[2px] border border-[#0b2748] bg-[#061426] shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
        >
          <img
            src={coverImg}
            alt="SCUDOO Global Technology Holding"
            className="h-auto w-full object-cover"
          />

          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.38),transparent_34%,transparent_70%,rgba(0,0,0,0.1))]" />

          <div className="absolute left-[5%] top-[10%] max-w-[300px]">
            <p className="font-display text-[18px] leading-[1.08] text-[#f1ddaa] md:text-[34px]">
              Leader technologique en performance humaine
            </p>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mx-auto max-w-[920px] px-3 pt-7 text-center text-[13px] leading-7 text-white/88 md:text-[15px]"
        >
          Développement, intégration et distribution de technologies intelligentes
          dédiées à la performance, au fitness connecté et aux écosystèmes
          numériques avancés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="mt-8 mb-10 flex items-center justify-center md:mt-10 md:mb-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[250px_250px] items-center gap-5 md:gap-15">
            
            <a
              href="#contact"
              className="justify-self-end text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-white underline decoration-white/60 underline-offset-4 transition hover:text-[#e7ca88]"
            >
              Contactez-nous
            </a>

            <a
              href="#services"
              className="justify-self-start text-center text-[12px] font-semibold uppercase tracking-[0.14em] text-white underline decoration-white/60 underline-offset-4 transition hover:text-[#e7ca88]"
            >
              Découvrir nos solutions
            </a>
          </div>
        </motion.div>
        <div>
         <a
              href="#about"
              className="group flex h-20 w-16 items-start justify-center justify-self-center"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                className="relative mt-4 h-8 w-8"
              >
                <span className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#d5c19a]" />
                <span className="absolute left-1/2 top-3 h-4 w-4 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#4fa4ea]" />
              </motion.div>
            </a>
</div>
      </div>
    </section>
  )
}