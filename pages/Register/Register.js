import Header from '../components/Header'
import Footer from '../components/Footer'
import RegisterHeader from '../components/Register/RegisterHeader'
import RegisterForm from '../components/Register/RegisterForm'

export default function RegisterPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen py-10 px-4 text-white">
        <RegisterHeader />
        <RegisterForm />
      </main>
      <Footer />
    </>
  )
}
