export default function BookCard({ book }) {
  return (
    <div className="bg-white rounded shadow-md overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold text-black">{book.title}</h2>
        <p className="text-sm text-gray-700 mb-2">{book.author}</p>
        <p className="text-sm text-gray-600">{book.description}</p>
      </div>
    </div>
  )
}
