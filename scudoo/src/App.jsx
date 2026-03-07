import './App.css'
import BackgroundLayers from './components/BackgroundLayers'
import Footer from './components/Footer'
import Header from './components/Header'
import AboutSection from './components/sections/AboutSection'
import ContactSection from './components/sections/ContactSection'
import HeroSection from './components/sections/HeroSection'
import InnovationSection from './components/sections/InnovationSection'
import ServicesSection from './components/sections/ServicesSection'

export default function App() {
  return (
    <div className="min-h-screen bg-[#02122a] text-white selection:bg-[#d2af69] selection:text-[#08111d]">
      <BackgroundLayers />
      <Header />

      <main id="top" className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <InnovationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}