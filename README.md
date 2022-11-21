# Los Peligros de la Rehidratación

## Hidratación en React

En React, la "hidratación"; es cómo React se "adjunta" al HTML creado por el renderizo del lado del servidor (server-side rendering). Durante la hidratación, React intentará adjuntar nuevos de eventos al marcado existente y se hará cargo de la renderización de la aplicación en el cliente (client-side rendering).

## Cuales son los peligros de la hidratación?

Al momento de poner nuestra aplicación web en producción, React comete un malentendido al renderizar los componetes con hidratación, tomando valores inesperados.

> Ejemplo del problema de hidratación (inicia con login y luego carga la imagen del usuario).

![Alt Text](https://github.com/Polar502/hook-useHasMounted-nextjs13/blob/main/public/airbnb.gif?raw=true 'Airbnb error hydratation')

## Solución de rehidratación

Para poder evitar estos problemas utilizaremos un hook con el nombre de `useHasMounted`, el cual se encargara de avisarnos cuando la hidratación este lista para montarse en el componente.

```jsx
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
```

# Deploy on Vercel

Demostración del hook `useHasMounted` en Vercel Deploy [Click Here](https://hook-use-has-mounted-nextjs13.vercel.app/).

```bash
https://hook-use-has-mounted-nextjs13.vercel.app/
```

# Estrucura del hook hasMounte

## 1. Declaración de variables

Declararemos una constante que se encargara de contener estado booleano del `hasMounted`, inicialmente en false, que indica que aun no se a montado.

```jsx
const [hasMounted, setHasMounted] = React.useState(false)
```
