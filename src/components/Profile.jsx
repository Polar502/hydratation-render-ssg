'use client'

import React, { useState, useRef } from 'react'
import { useAuth } from '../contexts/AuthContext'
import { useRouter } from 'next/navigation'

const Profile = () => {
  const { user, logout, hasMounted } = useAuth()
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
      <>
        <div className="flex h-full justify-center items-center">
          <button className="flex flex-row justify-center items-center space-x-2 py-1 px-3 border border-gray rounded-full">
            <img
              className="w-5 h-5 animate-pulse"
              src="menu.svg"
              alt="menu icon"
            />
            <img
              className="w-8 h-8 animate-pulse"
              src="userDefault.svg"
              alt="user default"
            />
          </button>
        </div>
      </>
    )
  }

  if (user === null) {
    return (
      <>
        <div className="flex h-full justify-center items-center">
          <button
            className="flex flex-row justify-center items-center space-x-2 py-1 px-3 border border-gray rounded-full hover:shadow-lg"
            onClick={() => setOpen(!open)}
          >
            <img className="w-5 h-5" src="menu.svg" alt="menu icon" />
            <img src="userDefault.svg" className="w-8 h-8" alt="user default" />
          </button>
        </div>
        {open && (
          <div className="absolute flex flex-col text-black rounded-lg bg-white py-2 w-52 shadow-lg right-4 top-16">
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
      <div className="flex h-full justify-center items-center">
        <button
          className="flex flex-row justify-center items-center space-x-2 py-1 px-3 border border-gray rounded-full hover:shadow-lg"
          onClick={() => setOpen(!open)}
        >
          <img className="w-5 h-5 " src="menu.svg" alt="menu icon" />
          {user.photoURL !== null ? (
            <img
              src={user.photoURL}
              className="w-8 h-8 rounded-[50%]"
              alt="user photo"
            />
          ) : (
            <img
              src="userLoggedIn.svg"
              className="w-8 h-8"
              alt="user default"
            />
          )}
        </button>
      </div>
      {open && (
        <div
          className="absolute flex flex-col text-black rounded-lg bg-white py-2 w-52 shadow-lg right-4 top-16"
          // ref={menuDeployedRef}
        >
          <button
            id="Logout"
            aria-label="Button Logout"
            className="p-2 cursor-pointer hover:bg-blue-100"
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
