# Los Peligros de la Rehidratación

## Hidratación en React

En React, la "hidratación"; es cómo React se "adjunta" al HTML creado por el renderizo del lado del servidor (server-side rendering). Durante la hidratación, React intentará adjuntar nuevos de eventos al marcado existente y se hará cargo de la renderización de la aplicación en el cliente (client-side rendering).

## ¿Cuales son los peligros de la hidratación?

Al momento lanzar nuestra aplicación web, el compilador del navegador toma el primer valor que este preparado, y eston son los valores por defecto (SSR), que no dependen de peticiones del lado del cliente. Pero cuando llegan las respuestas del cliente, provocan renderizaciones innecesarias por cual reduce la experiencia del usuario.

> Ejemplo del problema de hidratación (inicia con login y luego carga la imagen del usuario).

![Alt Text](https://github.com/Polar502/hook-useHasMounted-nextjs13/blob/main/public/airbnb.gif?raw=true 'Airbnb error hydratation')

## Solución de rehidratación

Para poder evitar estos problemas utilizaremos un hook con el nombre de `useHasMounted`, el cual se encargara avisarnos si un componente esta preparado o no para su renderización.

```jsx
// Con ayuda de los hooks de react
import { useState, useEffect } from 'react'

// Creamos una funcion que nos avisara cuando el componente este preparado para renderizar
export function useHasMounted() {
  // almacenamos en la variable hasMounted inicialmente como falso
  const [hasMounted, setHasMounted] = useState(false)
  // Cambiaremos el valor a verdadero indicando que el componente esta preparado para ser montado
  useEffect(() => {
    setHasMounted(true)
  }, [])
  // Regresamos hasMounted como un valor Booleano
  return hasMounted
}
```

# Firebase y hasMounted

Al momento de utilizar firebase authenticated en la documentación de firebase nos indica que debemos colocar un useState que no indique cuando la petición del usuario este completada. Este lo podemos exportar por medio de un Context.

La estructura de este es identica al anterio hook `useHasMounted`.

El cual esta declarada de la siguiente manera:

> ./src/contexts/AuthContext.jsx

```jsx
export const AuthProvider = ({ children }) => {
  // contstante para almacenar el valor usuario (inicialmente en vacio)
  const [user, setUser] = useState(null)
  // Hook useHasMounted para el proveedor de usuarios
  const [hasMounted, setHasMounted] = useState(false)

  // con useEffect para que se ejecute una sola vez
  useEffect(() => {
    // metodo onAuthStateChanged de firebase (para obtener la información del usuario logeado)
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      // Obtener el usuario que ha iniciado sesión actualmente
      setUser(currentUser)
      // Nota: El setTimeout es unicamente para atrasar la carga
      // y apreciar el efecto de cargando
      setTimeout(() => {
        // Cambiar el valor de hasMounted como verdadero
        setHasMounted(true)
      }, 2000)
    })
    return () => unsubuscribe()
  }, [])
```

y con el return del proveedor pasaremos el valor del hasMounted a los hijos envueltos con el AuthContext

> ./src/contexts/AuthContext.jsx

```jsx
return (
  <AuthContext.Provider value={{ hasMounted }}>{children}</AuthContext.Provider>
)
```

## Utilización del hasMounted

> ./src/components/Welcome.jsx

```jsx
'use client'
// para poder utilizarlo importaremos el useAuth (funcion useContext)
import { useAuth } from '../contexts/AuthContext'

export const WelcomeWithHasMounted = () => {
  // hacemos uso de los hooks user y hasMounted con la información para el renderizado
  const { user, hasMounted } = useAuth()

  // si hasMounted tiene el valor de false, este aun no ha sido montado, por lo que renderizara un cargando...
  if (!hasMounted) {
    return (
      <>
        <h2 className="my-8 w-40 bg-slate-400 animate-pulse">Cargando...</h2>
      </>
    )
  }

  // Despues del primer renderizado validamos el valor del usuario y si tiene algun valor renderizaremos su valores
  if (user) {
    return (
      <>
        <h2 className="my-8">Welcome {user.displayName || user.email} </h2>
      </>
    )
  }

  // Pero si el valor del usuario es null, entonces nos renderizara la condicion contraria
  return (
    <>
      <h2 className="my-8">No se ha iniciado sesion</h2>
    </>
  )
}
```

# Despliegue de la App en Vercel

Demostración del hook `useHasMounted` en Vercel Deploy [Click Here](https://hydratation-render-ssg.vercel.app/).

```bash
https://hydratation-render-ssg.vercel.app/
```
