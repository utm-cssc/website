import { db, firebase } from '~/plugins/firebase.js'

export function getMonthVotes (month) {
  // Read from the database
  // Retrieves a reference of the collection for the month
  const monthRef = db.collection(month)
  return monthRef.get()
    .then((snapshot) => {
      // Loop through each non-null document and creates a dictionary for each field including the document ID
      if (snapshot.empty) {
        console.log('No matching documents.')
        return null
      }
      const optionList = []
      // Will push each document information into an array and return that array at the end
      snapshot.forEach((doc) => {
        const option = {
          // Document id is the name of the vote option, number is the number of votes
          id: doc.id,
          Number: doc.get('Number')
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

export async function addVote (month, voteOptions) {
  // Incrementing value by the counter
  // Will loop through all the vote options and update accordingly.
  // The value for the counter can be adjusted to be more fair
  const optionsRef = db.collection(month)
  let counter = 3
  for (let i = 0; i < voteOptions.length; i++) {
    await optionsRef.doc(voteOptions[i]).update({
      Number: firebase.firestore.FieldValue.increment(counter)
    })
    counter -= 1
  }
}
