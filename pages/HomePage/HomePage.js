import HeroSection from '../components/Main/HeroSection'
import BestPicksSection from '../components/Main/BestPicksSection'
import StatsSection from '../components/Main/StatsSection'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function HomePage() {
  return (
    <>
      <Header />
      <HeroSection />
      <BestPicksSection />
      <StatsSection />
      <Footer />
    </>
  )
}
