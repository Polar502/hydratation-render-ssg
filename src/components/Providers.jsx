'use client'

import { AuthProvider } from '../contexts/AuthContext'
import { ModalProvider } from '../contexts/ModalContext'

export function Providers({ children }) {
  return (
    <AuthProvider>
      <ModalProvider>
        {children}
      </ModalProvider>
    </AuthProvider>
  )
}
