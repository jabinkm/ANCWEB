import { TopHeader } from '../components/top-header'
import { Navigation } from '../components/navigationHome'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Projects } from '../components/projects'
import { Testimonials } from '../components/testimonials'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import IsoCertificate from '../components/isoCertificate'
import OurClients from '../components/ourClients'

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen overflow-x-hidden">
      <TopHeader />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Projects />
      <OurClients />
      <IsoCertificate />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

