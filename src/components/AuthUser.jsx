'use client'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useHasMounted } from '../hooks/useHasMounted'

const AuthUser = () => {
  const hasMounted = useHasMounted()

  const user = useLocalStorage('name', '')

  return (
    <>
      <div>
        <span>Este es el user {user}</span>
      </div>
    </>
  )
}

export default AuthUser
