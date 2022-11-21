'use client'
import { useAuth } from '../contexts/AuthContext'

export const WelcomeWithHasMounted = () => {
  const { user, hasMounted } = useAuth()

  if (!hasMounted) {
    return (
      <>
        <h2 className="my-8 w-full bg-slate-400 animate-pulse">Cargando...</h2>
      </>
    )
  }

  if (user) {
    return (
      <>
        <h2 className="my-8">Welcome {user.displayName || user.email} </h2>
      </>
    )
  }

  return (
    <>
      <h2 className="my-8">No se ha iniciado sesion</h2>
    </>
  )
}

export const WelcomeWithOutHasMounted = () => {
  const { user } = useAuth()

  if (user) {
    return (
      <>
        <h2 className="my-8">Welcome {user.displayName || user.email} </h2>
      </>
    )
  }

  return (
    <>
      <h2 className="my-8">No se ha iniciado sesion</h2>
    </>
  )
}
