'use client'
import Link from 'next/link'
import style from '../styles/Navigation.module.css'
import { useState } from 'react'
import { useHasMounted } from '../hooks/useHasMounted'
import { getUserInfo } from '../helpers/Auth.helpers'
const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About',
    route: '/about',
  },
  {
    label: 'Products',
    route: '/products',
  },
]

export function Navigation() {
  const hasMounted = useHasMounted()
  // const [userName, setUserName] = useState(getUserInfo())

  // const getUserInfo = () => {
  const userName = hasMounted
    ? window.localStorage.getItem('username')
    : 'loading'

  //   return JSON.parse(username)
  // }

  return (
    <>
      <header className={style.header}>
        <div>
          <ul className={style.navigation}>
            {links.map(({ label, route }) => (
              <li key={route}>
                <Link rel="stylesheet" href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <span>User Name → {userName}</span>
        </div>
      </header>
    </>
  )
}
