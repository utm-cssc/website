export const firebase = require('firebase/app')

require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyARA5yjg9uxiFis8tXmhFAkGF3V_KyTl4U',
  authDomain: 'utm-cssc.firebaseapp.com',
  databaseURL: 'https://utm-cssc.firebaseio.com',
  projectId: 'utm-cssc',
  storageBucket: 'utm-cssc.appspot.com',
  messagingSenderId: '966034836059',
  appId: '1:966034836059:web:c7242ced50f02f31c10d7e'
}

try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export const db = firebase.firestore()

export default firebase
