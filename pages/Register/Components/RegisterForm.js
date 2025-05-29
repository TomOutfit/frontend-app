import { useState } from 'react'

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Gửi dữ liệu đến API hoặc xử lý logic đăng ký
    alert(`Registered: ${form.name} - ${form.email}`)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded p-8 shadow-md max-w-md mx-auto text-black">
      <div className="mb-4">
        <label className="block font-semibold mb-1">Full Name</label>
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
        <label className="block font-semibold mb-1">Password</label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className="bg-yellow-500 hover:bg-yellow-600 w-full text-black font-bold py-2 px-4 rounded"
      >
        Register
      </button>
    </form>
  )
}
