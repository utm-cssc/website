import { db, firebase } from '~/plugins/firebase.js'

export async function getMonthVotes (year, month) {
  // Read from the database
  // Retrieves a reference of the collection for the month
  const monthRef = db.collection('Voting').doc(year).collection(month)
  return await monthRef.get()
    .then((snapshot) => {
      // Loop through each non-null document and creates a dictionary for each field including the document ID
      if (snapshot.empty) {
        // console.log('No matching documents.')
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
      console.log(err)
      return null
    })
}

// export async function addOptions (name) {
//   const optionsRef = db.collection('month').doc(name)
//   await optionsRef.set({
//     Number: 0
//   })
// }

export async function checkUser (year, month, currentUtorid) {
  // Checks to see if the user has already voted or not
  // If they have not voted, they would not be in the user collection, therefore returning false
  const userMonth = month + ' - Users'
  const userRef = db.collection('Voting').doc(year).collection(userMonth)
  return await userRef.where('utorid', '==', currentUtorid).limit(1).get()
    .then(async (snapshot) => {
      if (snapshot.empty) {
        // console.log('No matching documents.')
        await userRef.doc().set({
          utorid: currentUtorid
        })
        return false
      }
      return true
    })
    .catch((err) => {
      console.log('Error getting document', err)
      return null
    })
}

export async function addUser (year, month, newUtorid) {
  // Adds the user to the database to prevent voting multiple times
  const userMonth = month + ' - Users'
  const userRef = db.collection('Voting').doc(year).collection(userMonth).doc()
  await userRef.set({
    utorid: newUtorid
  })
}

export async function addVote (year, month, voteOptions) {
  // Incrementing value by the counter
  // Will loop through all the vote options and update accordingly.
  // The value for the counter can be adjusted to be more fair
  const optionsRef = db.collection('Voting').doc(year).collection(month)
  for (const key in voteOptions) {
    await optionsRef.doc(key).update({
      Vote: firebase.firestore.FieldValue.increment(voteOptions[key])
    })
  }
}
