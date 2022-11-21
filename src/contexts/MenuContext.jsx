'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const MenuContext = createContext()

export const useMenu = () => {
  const context = useContext(MenuContext)
  return context
}

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = useState(false)

  return <MenuContext.Provider value={sd}>{children}</MenuContext.Provider>
}
