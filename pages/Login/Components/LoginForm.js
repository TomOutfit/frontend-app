import LoginInput from './LoginInput'
import LoginButton from './LoginButton'

export default function LoginForm() {
  return (
    <div className="bg-gray-900 p-10 rounded-md max-w-md w-full space-y-4 shadow-lg">
      <h2 className="text-2xl font-bold text-center text-white">Login to Your Account</h2>
      <LoginInput type="email" placeholder="Enter Email" />
      <LoginInput type="password" placeholder="Enter Password" />
      <LoginButton text="LOGIN" />
      <p className="text-sm text-center text-white">
        Don't have an account? <a href="#" className="text-yellow-500">Create one</a>
      </p>
    </div>
  )
}
