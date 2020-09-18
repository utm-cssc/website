export const firebase = require('firebase/app')

require('firebase/firestore')
require('firebase/auth')

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  databaseURL: process.env.databaseURL,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId
}
// console.log(JSON.stringify(firebaseConfig))

try {
  firebase.initializeApp(firebaseConfig)
  // console.log('Connected to firebase')
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export const db = firebase.firestore()
// export const provider = new firebase.auth.GoogleAuthProvider()
export const provider = new firebase.auth.GithubAuthProvider()
provider.addScope('user')
export const auth = firebase.auth()

export default firebase
