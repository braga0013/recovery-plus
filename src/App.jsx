import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => {
      el.style.opacity = '0'
      el.style.transform = 'translateY(32px)'
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#faf8f5' }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
