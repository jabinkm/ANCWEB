import { TopHeader } from '../components/top-header'
import { Navigation } from '../components/navigation'
import { Hero } from '../components/hero'
import { About } from '../components/about'
import { Services } from '../components/services'
import { Projects } from '../components/projects'
import { Testimonials } from '../components/testimonials'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <main className="flex flex-col max-h-screen">
      <TopHeader />
      <Navigation />
      <Hero />
      <About />
      {/* <Services />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </main>
  )
}

