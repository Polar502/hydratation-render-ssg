import { useState, useEffect } from 'react'

export function useHasMounted() {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setHasMounted(true)
    }, 1000)
  }, [])

  return hasMounted
}
