'use client'
import { createContext, useContext, useEffect, useState } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { auth } from '../configs/firebase'

export const AuthContext = createContext()

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error('No hay proveedor de autenticación.')
  return context
}

export const AuthProvider = ({ children }) => {
  // contstante para almacenar el valor usuario (inicialmente en vacio)
  const [user, setUser] = useState(null)
  // Hook useHasMounted para el proveedor de usuarios
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      // Obtener el usuario que ha iniciado sesión actualmente
      setUser(currentUser)
      // Obtener valor de hasMounted como verdadero
      // Nota: El setTimeout es unicamente para atrasar la carga
      // y apreciar el efecto de carga
      setTimeout(() => {
        setHasMounted(true)
      }, 2000)
    })
    return () => unsubuscribe()
  }, [])

  // ====== Registrar Nuevo Usuario con Email y Contraseña ======
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }

  // ====== Iniciar Sesión con Email y Contraseña ======
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // ====== Iniciar Sesión Con el proveedor Google ======
  const loginWithGoogle = () => {
    const GoogleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, GoogleProvider)
  }

  const logout = () => signOut(auth)

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email)

  return (
    <AuthContext.Provider
      value={{
        signup,
        login,
        logout,
        loginWithGoogle,
        resetPassword,
        user,
        hasMounted,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
