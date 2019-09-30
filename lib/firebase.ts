import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const options = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseUrl: process.env.FIREBASE_DB_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.FIREBASE_MESSAGING_ID,
  appId: process.env.FIREBASE_APP_ID,
  // measurementId: process.env.FIREBASE_MEASUREMENT_ID,
}

export const app = firebase.initializeApp(options)
export const auth = firebase.auth()
export const db = app.firestore()
export const storage = app.storage()
export const { GeoPoint } = firebase.firestore
