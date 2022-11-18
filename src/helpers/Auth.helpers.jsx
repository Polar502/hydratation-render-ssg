const isBeingPrebuilt = typeof window === 'undefined'

export const LOCAL_STORAGE_KEY = 'username'

export const EXAMPLE_USER = {
  displayUser: 'Mario Arita',
}

// obtener la informacion del usuario, si este es indefinido retornar un null
export const getUserInfo = () => {
  if (isBeingPrebuilt) {
    return null
  }

  const persistedData = window.localStorage.getItem('username')

  if (!persistedData) {
    return null
  }

  return JSON.parse(persistedData)
}

// export const persistUserInfo = (user) => {
//   window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(user))
// }
