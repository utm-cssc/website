import { db, firebase, auth, provider } from '~/plugins/firebase.js'

// Fetch the vote information from the database
export async function getMonthVotes(year, month) {
    // Retrieves a reference of the collection for the year and month
    const monthRef = db.collection('Voting').doc(year).collection(month)
    const voteOptions = {}
    return await monthRef.get()
        .then((snapshot) => {
            snapshot.forEach((doc) => {
                if (doc.get("Active")){
                    voteOptions[doc.id] = doc.get('Vote')
                }
            })
            return voteOptions
        })
        .catch(() => {
            return voteOptions
        })
}

// Checks to see if the user has already voted or not
// If they have not voted, they will be added to the database
export async function userVoted(year, month, currentUtorid, voteOptions) {
    // Collection of users who voted for that month (e.g. NovemberUsers)
    const userMonthCollection = month + 'Users'
    const allUsers = db.collection('Voting').doc(year).collection(userMonthCollection)
    const userInfo = {}
    return await allUsers.where('utorid', '==', currentUtorid).limit(1).get()
        .then(async(snapshot) => {
            if (snapshot.empty) {
                await allUsers.doc().set({
                    utorid: currentUtorid
                }).catch(() => {
                    return null
                })
                return userInfo
            }
            snapshot.forEach((doc) => {
                userInfo['id'] = doc.id
                voteOptions.map((option) => {
                    if (doc.get(option) == undefined) {
                        userInfo[option] = 0
                    } else {
                        userInfo[option] = doc.get(option)
                    }
                })
            })
            return userInfo
        })
        .catch(() => {
            return null
        })
}

// Add the user's vote to the database
export async function addVote(year, month, voteValue, voteOrder, currentUtorid) {
    const optionsRef = db.collection('Voting').doc(year).collection(month)
    const userMonth = month + 'Users'
    let error = false
    const updatedVotes = []
    userVoted(year, month, currentUtorid, Object.keys(voteOrder))
        .then(async(result) => {
            // If result is null, there was an internal server error when reading the document
            if (result == null) {
                error = true
            } else {
                await db.collection('Voting').doc(year).collection(userMonth).doc(result['id']).update(voteOrder)
                    .catch(() => {
                        return null
                    })
            }
        })
    if (error) {
        return false
    }
    for (const key in voteValue) {
        await optionsRef.doc(key).update({
                Vote: firebase.firestore.FieldValue.increment(parseInt(voteValue[key]))
            })
            .catch(() => {
                return null
            })
    }
    return true

}

// Add/Remove the user's email to the subscription list
export async function setEmail(email, operation) {
    const emailRef = db.collection('Voting').doc('Subscription').collection('Email')
    return await emailRef.where('Email', '==', email).limit(1).get()
        .then(async(snapshot) => {
            switch (operation) {
                case "Add":
                    if (!snapshot.empty) {
                        return false
                    }
                    await emailRef.doc().set({
                        Email: email
                    }).catch(() => {
                        return null
                    })
                    return true
                case "Remove":
                    if (snapshot.empty) {
                        return false
                    }
                    snapshot.forEach(async(doc) => {
                        await emailRef.doc(doc.id).delete()
                            .catch(() => {
                                return null
                            })
                    })
                    return true
            }
        })
        .catch(() => {
            return null
        })
}
// Login using the provider specified (Currently github)
export async function login() {
    return await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
        .then(async() => {
            const result = await auth.signInWithPopup(provider)
            return result.user.uid
        })
        .catch(() => {
            return ''
        })
}