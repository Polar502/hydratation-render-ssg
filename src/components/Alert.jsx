'use client'

export const Alert = ({ message }) => {
  return (
    <>
      <div className="bg-red-100 border w-full border-red-500 text-red-700 px-4 py-2 rounded relative mb-2 text-center">
        <span className="sm:inline-block">{message}</span>
      </div>
    </>
  )
}
