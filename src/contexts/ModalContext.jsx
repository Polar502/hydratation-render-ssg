'use client'
import { createContext, useContext, useEffect, useState } from 'react'

export const ModalContext = createContext()

export const useModal = () => {
  const context = useContext(ModalContext)
  return context
}

export const ModalProvider = ({ children }) => {
  const modal = ({ Children, open, setOpen }) => {
    return (
      <>
        <div className="text-black absolute flex items-center justify-center bg-fixed bg-blue-800 bg-opacity-50 p-10 top-0 left-0 w-[100vw] h-[100vh]">
          <div className="relatives bg-white rounded-lg shadow-md w-[50vw] h-[50vh]">
            <div className="flex mb-5 pb-5 border-b border-gray-700 items-center justify-between">
              <h3 className="font-semibold text-lg text-cyan-600">Titulo</h3>
              <button className="hover:bg-red-500">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            {Children}
          </div>
        </div>
      </>
    )
  }
  return <ModalContext.Provider value={modal}>{children}</ModalContext.Provider>
}
