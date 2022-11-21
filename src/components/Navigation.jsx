'use client'
import Link from 'next/link'
import style from '../styles/Navigation.module.css'
import Profile from './Profile'

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
  return (
    <>
      <header className="absolute z-10 lg:text-lg bg-white border-y-[1px] shadow-md border-y-gray-400 h-[10vh] xl:h-[8vh] flex items-center justify-center">
        <div className="flex flex-row justify-between	px-4 w-screen h-full">
          <div className="flex flex-row divide-x-2 h-full justify-center items-center sm:space-x-4 space-x-6 lg:space-x-10">
            <div className="flex text-cyan-900 h-full justify-center items-center">Logo</div>
            <div className="pl-4 h-full">
              <ul className="flex space-x-4 h-full justify-center items-center">
                <li key="/">
                  <Link rel="stylesheet" href="/">
                    Home
                  </Link>
                </li>
                <li key="/about">
                  <Link rel="stylesheet" href="/about">
                    About
                  </Link>
                </li>
                <li key="/products">
                  <Link rel="stylesheet" href="/products">
                    Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Profile />
        </div>
      </header>
    </>
  )
}
