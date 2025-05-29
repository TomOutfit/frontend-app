export default function LoginInput({ type, placeholder }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="w-full p-2 rounded bg-gray-800 text-white placeholder-gray-400 mb-4"
    />
  )
}
