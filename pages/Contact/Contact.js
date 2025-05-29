import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactHeader from '../components/Contact/ContactHeader'
import ContactForm from '../components/Contact/ContactForm'

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen px-4 py-12 text-white">
        <ContactHeader />
        <ContactForm />
      </main>
      <Footer />
    </>
  )
}
