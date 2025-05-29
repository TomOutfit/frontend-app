const books = [
  { title: "Thunmanhandiya", author: "Mahagama Sekera", img: "/book1.jpg" },
  { title: "Gamperaliya", author: "Martin Wickramasinghe", img: "/book2.jpg" },
  { title: "Nectar in a Sieve", author: "Kamala Markandaya", img: "/book3.jpg" },
  { title: "Andareaya Victoria", author: "Mohan Raj Madawala", img: "/book4.jpg" },
]

export default function BestPicksSection() {
  return (
    <section className="bg-white text-black py-12 px-6 text-center">
      <h2 className="text-2xl font-bold mb-8">Our Best Picks</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {books.map((book, index) => (
          <div key={index} className="shadow-lg rounded overflow-hidden">
            <img src={book.img} alt={book.title} className="w-full h-60 object-cover" />
            <div className="p-2">
              <h3 className="font-semibold text-sm">{book.title}</h3>
              <p className="text-xs">{book.author}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
