export const firebase = require('firebase/app')

require('firebase/firestore')

const firebaseConfig = {
  apiKey: 'AIzaSyCBcKiiiM45yhGhTfKEO56cz54_yvDHr5I',
  authDomain: 'testing-c47c3.firebaseapp.com',
  databaseURL: 'https://testing-c47c3.firebaseio.com',
  projectId: 'testing-c47c3',
  storageBucket: 'testing-c47c3.appspot.com',
  messagingSenderId: '227759401353',
  appId: '1:227759401353:web:b9433b7891b6d96ef59958',
  measurementId: 'G-NXG6DB51L0'
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
