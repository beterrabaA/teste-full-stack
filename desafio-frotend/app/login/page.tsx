import Link from 'next/link'
import LoginForm from './form'

export default function LoginPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center sm:bg-slate-100 bg-white">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 text-center sm:text-left">
        <h1 className="font-semibold text-4xl sm:text-2xl">Login</h1>
        <LoginForm />
        <p className="text-center">
          Need to create an account?{' '}
          <Link className="text-indigo-500 hover:underline" href="/register">
            Create Account
          </Link>{' '}
        </p>
      </div>
    </div>
  )
}
