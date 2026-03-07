import { motion } from 'framer-motion'
import mapImg from '../../assets/scudoo-map.jpg.jpeg'

export default function InnovationSection() {
  return (
    <section id="innovation" className="mx-auto max-w-[1280px] px-5 pb-16 pt-20 md:px-8 lg:px-10 lg:pt-28">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-eyebrow">Innovation & expansion</p>

          <h2 className="section-title mt-5 max-w-[720px]">
            Une ambition technologique pensée pour l’avenir.
          </h2>

          <p className="section-text mt-6 max-w-[620px]">
            SCUDOO Holding développe une vision tournée vers la croissance, l’expansion et la structuration d’un écosystème global. Cette section intègre l’actif visuel d’expansion afin d’ancrer l’idée de projection, de stratégie et d’implantation à grande échelle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-[12px] uppercase tracking-[0.14em] text-white/75">
            {['Innovation', 'Puissance technologique', 'Vision globale', 'Leadership'].map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-[26px] border border-[#143156] bg-[#071527] shadow-[0_30px_70px_rgba(0,0,0,0.28)]"
        >
          <img src={mapImg} alt="Investissez dans l'avenir" className="h-full w-full object-cover" />
        </motion.div>
      </div>
    </section>
  )
}