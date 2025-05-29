import Header from '../components/Header'
import Footer from '../components/Footer'
import ListHeader from '../components/List/ListHeader'
import BookGrid from '../components/List/BookGrid'

export default function ListPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen px-6 py-10 text-white">
        <ListHeader />
        <BookGrid />
      </main>
      <Footer />
    </>
  )
}
