import RegisterForm from './form'

export default function RegisterPage() {
  return (
    <div className="h-screen w-screen flex justify-center items-center sm:bg-slate-100 bg-white">
      <div className="sm:shadow-xl px-8 pb-8 pt-12 sm:bg-white rounded-xl space-y-12 text-center sm:text-left">
        <h1 className="font-semibold text-4xl sm:text-2xl">Register</h1>
        <RegisterForm />
      </div>
    </div>
  )
}
