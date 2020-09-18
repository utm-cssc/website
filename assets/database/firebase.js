import { db, firebase, auth, provider } from '~/plugins/firebase.js'

export async function getMonthVotes (year, month) {
  // Fetch from the database
  // Retrieves a reference of the collection for the year and month
  const monthRef = db.collection('Voting').doc(year).collection(month)
  return await monthRef.get()
    .then((snapshot) => {
      // Loop through each non-null document and creates a dictionary for each field including the document ID
      if (snapshot.empty) {
        return null
      }
      const optionList = []
      // Will push each document information into an array and return that array at the end
      snapshot.forEach((doc) => {
        const option = {
          // Document id is the name of the vote option, number is the number of votes
          id: doc.id,
          Vote: doc.get('Vote')
        }
        optionList.push(option)
      })
      return optionList
    })
    .catch((err) => {
      console.log('GetMonthVotes: Error getting document', err)
      return null
    })
}

export async function checkUser (year, month, currentUtorid) {
  // Checks to see if the user has already voted or not
  // If they have not voted, they will be added to the databsae, then returning false
  // Return true otherwise
  const userMonth = month + 'Users'
  const userRef = db.collection('Voting').doc(year).collection(userMonth)
  return await userRef.where('utorid', '==', currentUtorid).limit(1).get()
    .then(async (snapshot) => {
      if (snapshot.empty) {
        await userRef.doc().set({
          utorid: currentUtorid
        })
        return false
      }
      return true
    })
    .catch((err) => {
      console.log('CheckUser: Error getting document', err)
      return null
    })
}

export async function addVote (year, month, voteOptions) {
  // Incrementing value by the counter
  // Will loop through all the vote options and update accordingly.
  const optionsRef = db.collection('Voting').doc(year).collection(month)
  for (const key in voteOptions) {
    await optionsRef.doc(key).update({
      Vote: firebase.firestore.FieldValue.increment(voteOptions[key])
    })
  }
}

export async function login () {
  // Login using Google
  return await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(async function () {
      const result = await auth.signInWithPopup(provider)
      console.log(result.user.uid)
      return result.user.uid
    })
    .catch((err) => {
      console.log('Login: Error getting document', err)
      return ''
    })
}
