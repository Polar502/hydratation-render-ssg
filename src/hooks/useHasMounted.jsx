// con ayuda de los hooks de react 
import { useState, useEffect } from 'react'

// creamos una funcion que nos avisara cuando ha sido mondata
export function useHasMounted() {
  // almacenamos en la variable hasMounted inicialmente como falso
  const [hasMounted, setHasMounted] = useState(false)
  // que al estar preparado se cambiara a verdadero
  useEffect(() => {
    setHasMounted(true)
  }, [])
  // regresando hasMounted como un Boolean
  return hasMounted
}
