import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutIntro from '../components/About/AboutIntro'
import MissionSection from '../components/About/MissionSection'
import TeamSection from '../components/About/TeamSection'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutIntro />
        <MissionSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  )
}
