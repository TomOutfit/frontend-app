import Link from 'next/link'

export default function ListHeader() {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-white">Book List</h1>
      <Link href="/add-book">
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded font-semibold">
          + Add New Book
        </button>
      </Link>
    </div>
  )
}
