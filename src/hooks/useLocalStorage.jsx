import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  // Estado para almacenar nuestro valor
  // Pase la función de estado inicial a useState para que la lógica solo se ejecute una vez
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === 'undefined') {
      return initialValue
    }
    try {
      // Obtener del almacenamiento local por clave
      const item = window.localStorage.getItem(key)
      // Analiza json almacenado o si ninguno devuelve initialValue
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Si el error también devuelve initialValue
      console.log(error)
      return initialValue
    }
  })
  // Devolver una versión envuelta de la función setter de useState que...
  // ... conserva el nuevo valor en localStorage.
  const setValue = (value) => {
    try {
      // Permitir que el valor sea una función para que tengamos la misma API que useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      // Guardar Estado
      setStoredValue(valueToStore)
      // Guardar en el almacenamiento local
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
