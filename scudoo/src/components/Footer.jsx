function FooterColumn({ title, items }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-[0.18em] text-[#e3c880]">{title}</h3>
      <div className="mt-5 space-y-3 text-sm text-white/58">
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-white/6 bg-[#020b18]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-5 py-12 md:grid-cols-4 md:px-8 lg:px-10">
        <div>
          <div className="text-[18px] font-semibold tracking-[0.1em] text-[#ddb96e]">SCUDOO</div>
          <p className="mt-4 text-sm leading-7 text-white/55">
            Technologie, intelligence et performance. Une image haut de gamme, futuriste et internationale.
          </p>
        </div>
        <FooterColumn title="Navigation" items={['À propos', 'Services', 'Innovation', 'Contact']} />
        <FooterColumn title="Solutions" items={['IA', 'Fitness intelligent', 'Plateformes', 'Équipements connectés']} />
        <FooterColumn title="Contact" items={['contact@scudoo.com', 'Montréal', 'Global Technology Holding']} />
      </div>
    </footer>
  )
}