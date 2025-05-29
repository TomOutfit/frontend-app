export default function HeroSection() {
  return (
    <section className="bg-black text-white py-16 text-center px-6">
      <h1 className="text-4xl font-bold text-yellow-500 mb-4">The Book Lovers Dreamland Awaits!</h1>
      <p className="max-w-2xl mx-auto text-lg mb-6">
        Join our community and contribute to the ever-evolving library of books, where every book has a story, and every reader has one too.
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <input
          type="text"
          placeholder="Search by title..."
          className="p-2 rounded w-1/3 text-black"
        />
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
      <img
        src="/open-book.png"
        alt="Open Book"
        className="mx-auto mt-10 max-w-xs"
      />
    </section>
  )
}
