'use client'
import { useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { useHasMounted } from '../hooks/useHasMounted'

const LocalStorage = () => {
  const hasMounted = useHasMounted()

  const [user, setUser] = useState({
    name: '',
    lastName: '',
  })

  // const [name, setName] = useLocalStorage('username', '')
  const [time, setTime] = useLocalStorage('time', 0)

  const username = hasMounted ? localStorage.getItem('username') : 'loading'

  const handleInputChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const sendUser = (event) => {
    event.preventDefault()
    window.localStorage.setItem('username', JSON.stringify(user))
    window.location.reload()
    console.log(user.name + ' ' + user.lastName)
  }
  return (
    <>
      <form onSubmit={sendUser}>
        <input
          type="text"
          name="name"
          placeholder="Nombre..."
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Apellido..."
          onChange={handleInputChange}
        />
        <button type="submit">Guardar</button>
        {/* <span>Se ha clickedo {time} veces</span> */}
      </form>
    </>
  )
}

export default LocalStorage
