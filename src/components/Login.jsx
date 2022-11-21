'use client'
import { useState } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Alert } from './Alert'

const Login = () => {
  const { login, loginWithGoogle } = useAuth()
  const router = useRouter()
  const [error, setError] = useState()

  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value })
  }

  const hanleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await login(user.email, user.password)
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle()
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex flex-col h-full w-[90vw] md:w-[60vw] lg:w-[30vw] justify-center items-center pt-5">
      {error && <Alert message={error} />}

      <form
        className="flex flex-col w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8"
        onSubmit={hanleSubmit}
      >
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="example@email.com"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-500  hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Iniciar Sesión
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#!"
            // onClick={handleResetPassword}
          >
            Restablecer Contraseña?
          </a>
        </div>
      </form>
      <button
        className="grid grid-cols-4 bg-slate-50 hover:bg-slate-200 text-black shadow rounded border-2 border-gray-300 py-2 px-4 w-full"
        onClick={handleGoogleSignIn}
      >
        <img
          className="col-span-1 w-6 h-6"
          src="google.png"
          alt="icon google"
        />
        <span className="col-span-2">Continúa con Google</span>
      </button>
      <p className="w-full my-4 flex justify-between px-3">
        Aun no tienes una cuenta?
        <Link
          href="/signup"
          className="text-blue-700 hover:text-blue-900 font-semibold"
        >
          Regístrate
        </Link>
      </p>
    </div>
  )
}

export default Login
