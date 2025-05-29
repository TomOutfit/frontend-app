import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/Login/LoginForm'

export default function Login() {
  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center items-center bg-black text-white px-4">
        <LoginForm />
      </main>
      <Footer />
    </>
  )
}
