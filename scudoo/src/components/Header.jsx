import shieldImg from '../assets/scudoo-shield.jpg.jpeg'

const navItems = [
  { label: 'Contactez-Nous', href: '#contact' },
  { label: 'Innovation', href: '#innovation' },
  { label: 'Services', href: '#services' },
  { label: 'Vision', href: '#about' },
]

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-[#031127]/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-5 md:px-8 lg:px-10">
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative">
            <img
              src={shieldImg}
              alt="Logo SCUDOO"
              className="h-11 w-11 rounded-full border border-[#2e4c73] object-cover shadow-[0_0_24px_rgba(89,129,194,0.16)] transition duration-300 group-hover:shadow-[0_0_30px_rgba(224,191,121,0.22)]"
            />
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(224,191,121,0.14),transparent_70%)] opacity-0 transition duration-300 group-hover:opacity-100" />
          </div>

          <span className="text-[20px] font-semibold tracking-[0.08em] text-[#e0bf79] transition duration-300 group-hover:text-[#f0d189]">
            SCUDOO
          </span>
        </a>

        <nav className="hidden items-center gap-10 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#e7ca88] md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative transition duration-300 hover:text-white"
            >
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#dfc37d] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}