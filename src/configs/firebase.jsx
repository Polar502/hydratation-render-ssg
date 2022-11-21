import { getAuth } from 'firebase/auth'
import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBIcGf_u3rR36GvJd2cXDp6FVZ3A-1biGQ',
  authDomain: 'nextjs-firebase-f3bf7.firebaseapp.com',
  projectId: 'nextjs-firebase-f3bf7',
  storageBucket: 'nextjs-firebase-f3bf7.appspot.com',
  messagingSenderId: '794697985413',
  appId: '1:794697985413:web:1466130605bc03a18a28ec',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
