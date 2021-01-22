import React from "react"
import AboutUs from "../components/AppComponents/AboutUs"
import DefenseSection from "../components/AppComponents/DefenseSection"
import LandingHero from "../components/AppComponents/LandingHero"
import ServiceSection from "../components/AppComponents/ServiceSection"
import TestimonialsSection from "../components/AppComponents/Testimonials"
import ContactSection from "../components/AppComponents/ContactSection"

import AppLayout from "../layout/AppLayout"

export type MenuItem = {
  menuName: string
  reference: React.RefObject<HTMLElement>
}

interface IndexProps {
  testMe?: Array<string>
  onceAgain?: boolean
}

const IndexPage: React.FC<IndexProps> = ({ testMe, onceAgain }) => {
  const landingRef = React.useRef<HTMLDivElement | null>(null!)
  const serviceRef = React.useRef<HTMLDivElement | null>(null)
  const contactRef = React.useRef<HTMLDivElement | null>(null)

  let menu: Array<MenuItem> = [
    {
      menuName: "Home",
      reference: landingRef,
    },

    {
      menuName: "Soluções",
      reference: serviceRef,
    },

    {
      menuName: "Contato",
      reference: contactRef,
    },
  ]

  return (
    <AppLayout menu={menu}>
      <div ref={landingRef}>
        <LandingHero ctaRef={contactRef} secondaryCta={serviceRef} />
      </div>

      <div>
        <DefenseSection />
      </div>

      <div>
        <AboutUs />
      </div>

      <div ref={serviceRef}>
        <ServiceSection />
      </div>

      <div>
        <TestimonialsSection />
      </div>

      <div ref={contactRef}>
        <ContactSection />
      </div>
    </AppLayout>
  )
}

export default IndexPage
