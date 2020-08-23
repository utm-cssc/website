// export const firebase = require('firebase/app')

// require('firebase/auth')
// require('firebase/firestore')

// const firebaseConfig = {
//     // Need to change this to match the correct key
//     // apiKey: "AIzaSyADgf3-YaxKssgLTBBNnaP_wkliBD3-lMc",
//     // authDomain: "project-app-builders-utm.firebaseapp.com",
//     // databaseURL: "https://project-app-builders-utm.firebaseio.com",
//     // projectId: "project-app-builders-utm",
//     // storageBucket: "project-app-builders-utm.appspot.com",
//     // messagingSenderId: "444041330162",
//     // appId: "1:444041330162:web:e6931670f59cf41cc2ff6b",
//     // measurementId: "G-9X8GX7K8J5"
// };

// try {
//     firebase.initializeApp(firebaseConfig);
// } catch (err) {
//     if (!/already exists/.test(err.message)) {
//         console.error("Firebase initialization error", err.stack);
//     }
// }

// export function getMonthVotes() {
//     let monthRef = db.collection('month')
//     return monthRef.get()
//         .then(snapshot => {
//             if (snapshot.empty) {
//                 console.log('No matching documents.');
//                 return null;
//             }
//             var optionList = [];
//             snapshot.forEach(doc => {
//                 var option = {
//                     "id": doc.id
//                      OR we can do, this depends on if we want the document id to be a random id or have a name attribute, name as ID would make it easier
//                     "name": doc.get("Name")
// 
//                      Number is the number of votes
//                     "number": doc.get("Number"),
//                 }
//                 optionList.push(option);
//             })

//             return optionList;
//         })
//         .catch(err => {
//             console.log('Error getting document', err);
//             return null;
//         })
// }

// export async function addOptions(vote, name) {

//     let optionsRef = db.collection('month').doc();

//     let setOption = await optionsRef.set({
//         'Name': name,
//         'Number': 0,
//     })
// }

// export async function addVote(option) {
//     Incrementing value by 1
//     let optionsRef = db.collection('month').doc(option);
//     let setOption = await optionsRef.update({
//         'Number': firebase.firestore.FieldValue.increment(1)
//     })
// }