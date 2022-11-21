'use client'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useModal } from '../contexts/ModalContext'
import { useRouter } from 'next/navigation'
import Modal from './Modal'
import { Alert } from './Alert'

const SignUp = () => {
  const { signup } = useAuth()
  const router = useRouter()
  const [error, setError] = useState()
  const [openLogin, setOpenLogin] = useState(false)

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
      await signup(user.email, user.password)
      router.push('/')
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <div className="flex flex-row h-full w-[80vw] md:w-[60vw] lg:w-[40vw] justify-center items-center">
      {error && <Alert message={error} />}

      <form className="bg-white" onSubmit={hanleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="example@email.com"
          onChange={handleChange}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleChange}
        />

        <button>Resgitrar</button>
      </form>
    </div>
  )
}

export default SignUp
