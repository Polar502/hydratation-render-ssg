'use client'
import {
  getUserInfo,
  FAKE_USER,
  INITIAL,
  LOCAL_STORAGE_KEY,
} from '../helpers/Auth.helpers'
import { useState, useEffect } from 'react'
import useHasMounted from '../hooks/useHasMounted'

const isBeingPrebuilt = typeof window === 'undefined'

const AuthMenu = () => {
  const [user, setUser] = useHasMounted(LOCAL_STORAGE_KEY, getUserInfo())

  let Empty = () => {
    return (
      <button>
        {/* no hay un img */}
        <span>Esperando Peticion</span>
      </button>
    )
  }

  let LoggedInMenu = () => {
    return (
      <button onClick={() => setUser(null)}>
        {/* <img src={user.avatar} alt={`${user.displayName}'s avatar`} /> */}
        {/* Esta es la peticion del cliente*/}
        <span>{user.displayName}</span>
      </button>
    )
  }

  let LoginLink = () => {
    return (
      <button onClick={() => setUser(FAKE_USER)}>
        {/* aca tampoco no hay un img */}
        <span>log in</span>
      </button>
    )
  }

  if (isBeingPrebuilt) {
    return <Empty />
  } else {
    return (
      <>
        {user ? (
          <LoggedInMenu user={user} setUser={setUser} />
        ) : (
          <LoginLink setUser={setUser} />
        )}
      </>
    )
  }
}

export default AuthMenu
