import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Gửi form đến email service hoặc API
    alert(`Message sent by ${form.name} (${form.email})`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded shadow-md p-8 max-w-xl mx-auto text-black">
      <div className="mb-4">
        <label className="block font-semibold mb-1">Your Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block font-semibold mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32 resize-none"
        />
      </div>

      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 w-full text-black font-bold py-2 px-4 rounded"
      >
        Send Message
      </button>
    </form>
  )
}
