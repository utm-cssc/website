import { db, firebase, auth, provider } from '~/plugins/firebase.js'

// Fetch the vote information from the database
export async function getMonthVotes (year, month) {
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

// Checks to see if the user has already voted or not
// If they have not voted, they will be added to the databsae, then returning false
// Return true otherwise
export async function checkUser (year, month, currentUtorid, voteOptions) {
  const userMonth = month + 'Users'
  const userRef = db.collection('Voting').doc(year).collection(userMonth)
  return await userRef.where('utorid', '==', currentUtorid).limit(1).get()
    .then(async (snapshot) => {
      if (snapshot.empty) {
        await userRef.doc().set({
          utorid: currentUtorid
        })
        return [false]
      }
      const voteList = {}
      snapshot.forEach((doc) => {
        voteOptions.map((option) => { voteList[option] = (doc.get(option)) })
      })

      return [true, voteList]
    })
    .catch((err) => {
      console.log('CheckUser: Error getting document', err)
      return null
    })
}

// Return the document id of the user's document on the database
async function getDocID (year, month, currentUtorid) {
  const userMonth = month + 'Users'
  const userRef = db.collection('Voting').doc(year).collection(userMonth)
  return await userRef.where('utorid', '==', currentUtorid).limit(1).get()
    .then((snapshot) => {
      if (snapshot.empty) {
        return null
      }
      let result = null
      snapshot.forEach((doc) => {
        result = doc.id
      })

      return result
    })
    .catch((err) => {
      console.log('getDocID: Error getting document', err)
      return null
    })
}

// Add the user's vote to the database
export async function addVote (year, month, voteValue, voteOrder, currentUtorid) {
  // Incrementing value by the counter
  // Will loop through all the vote options and update accordingly.
  const optionsRef = db.collection('Voting').doc(year).collection(month)
  const userMonth = month + 'Users'
  let error = false
  getDocID(year, month, currentUtorid)
    .then((result) => {
      // If result is null, there was an internal server error when reading the document
      if (result == null) {
        error = true
      } else {
        db.collection('Voting').doc(year).collection(userMonth).doc(result).update(voteOrder)
      }
    })
  if (!error) {
    for (const key in voteValue) {
      await optionsRef.doc(key).update({
        Vote: firebase.firestore.FieldValue.increment(parseInt(voteValue[key]))
      })
    }
    return true
  } else {
    return false
  }
}

// Login using the provider specified (Currently github)
export async function login () {
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
