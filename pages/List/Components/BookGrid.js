import BookCard from './BookCard'

const sampleBooks = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    description: "A handbook of Agile software craftsmanship.",
    image: "/book1.jpg"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "Tiny changes, remarkable results.",
    image: "/book2.jpg"
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    description: "Rules for focused success in a distracted world.",
    image: "/book3.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andy Hunt, Dave Thomas",
    description: "Your journey to mastery.",
    image: "/book4.jpg"
  },
]

export default function BookGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {sampleBooks.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  )
}
