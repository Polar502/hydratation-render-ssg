'use client'

import React, { useState, useRef } from 'react'
import { useHasMounted } from '../hooks/useHasMounted'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const { user, logout } = useAuth()
  const hasMounted = useHasMounted()
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleLogout = async () => {
    try {
      await logout()
    } catch (error) {
      console.error(error)
    }
  }

  if (!hasMounted) {
    return (
      <div className="flex flex-row h-full space-x-2 justify-center items-center">
        <button className="border">
          <img
            className="w-5 h-5 animate-pulse"
            src="menu.svg"
            alt="menu icon"
          />
          <img
            className="w-7 h-7 animate-pulse"
            src="userDefault.svg"
            alt="user default"
          />
        </button>
      </div>
    )
  }

  if (user === null) {
    return (
      <>
        <div className="flex h-full justify-center items-center">
          <button
            className="flex flex-row justify-center items-center space-x-2 py-1 px-3 border border-gray rounded-full"
            onClick={() => setOpen(!open)}
          >
            <img className="w-5 h-5" src="menu.svg" alt="menu icon" />
            <img src="userDefault.svg" className="w-8 h-8" alt="user default" />
          </button>
        </div>
        {open && (
          <div className="absolute flex flex-col text-black rounded-xl bg-white py-2 w-52 shadow-lg right-4 top-16">
            <button
              id="SignUp"
              aria-label="Button SignUp"
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => {
                router.push('/signup')
                setOpen(false)
              }}
            >
              Regístrate
            </button>
            <button
              id="login"
              aria-label="Button Login"
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => {
                router.push('/login')
                setOpen(false)
              }}
            >
              Inicia Sesión
            </button>
          </div>
        )}
      </>
    )
  }

  // de lo contrario
  return (
    <>
      <div className="flex flex-row space-x-2 ">
        <button onClick={() => setOpen(!open)}>
          <h1>{user.displayName || user.email}</h1>
          <img src="menu.svg" alt="menu icon" />
        </button>
      </div>
      {open && (
        <div
          className="flex flex-col text-black bg-white p-4 w-52 shadow-lg absolute right-4 top-24"
          // ref={menuDeployedRef}
        >
          <button
            id="Logout"
            aria-label="Button Logout"
            className="p-2 cursor-pointer rounded hover:bg-blue-200"
            onClick={() => {
              handleLogout()
              setOpen(false)
            }}
          >
            Logout
          </button>
        </div>
      )}
    </>
  )
}

export default Profile
