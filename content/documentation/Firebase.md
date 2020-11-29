---
title: Firebase
desc: In depth tutorial on how to set up Firebase
link: firebase
---

# Firebase

### Behind the Scenes with Voting

![Reading Flowchart](/Flowcharts/Voting2.png)

### Firebase Setup:

- Create a Google account if the user does not already have one
- Proceed to [firebase.google.com](https://firebase.google.com/)
- Click select console on the top right corner on the firebase website

  ![Firebase Home Page](https://i.imgur.com/gMOUg4m.png)

- Select Add project
  - Follow displayed instructions
    ![Add project page](https://i.imgur.com/EdKEsRc.png)
- Once the project has been created, select the project to navigate to the
  project's home page
- **Create a new web application:**
  - Select the web application icon
    ![Create web application](https://i.imgur.com/yXfcNHI.png)
  - Select the web development
  - Register application under the displayed instructions
  - Copy the credentials that are given (They should match the Environment
    Variables)
- **Create new firestore:**
  - Select cloud firestore on the sidebar
    ![Cloud Firestore Side Bar](https://i.imgur.com/Djsjrq3.png)
  - Select 'create database'
  - Start in test mode
  - Select a location
  - Click enable
- **Set up database:**

```
  |-Voting (Collection)
    |- 2020 (Document)
      |- Month (Collection)
        |- Option 1 (Document)
          |- Active: true/false (Field)
          |- Vote: 0 (Field)
        |- Option 2
          |- Active: true/false
          |- Vote: 0
    |- Subscription (Document)
      |- Email
```

Notes:

- For the month you wish to set it up for, if it the current date past between
  15-31/30, enter the next month. If the current date is between 1-14, then
  create a collection under the current months. This will make it show the vote
  ended results
- The user collection will automatically be created when a user votes
- There is no limit to the number of options
  ![Database Example 1](https://i.imgur.com/KqLf9iV.png)
  ![Database Example 2](https://i.imgur.com/N6iFYQY.png)

#### Authentication:

In order to enable authentication:

- Navigate to the project on the firebase website
- Select authentication on the sidebar
  ![Authentication Side Bar](https://i.imgur.com/Xeo54Cl.png)
- Switch to the sign-in method
- Enable Google signin
  - Note: If the user wishes to use the Github login, follow the instructions
    firebase provided to enable Github login
- Uncomment the login provider they wish to use (make sure the corresponding
  provider is enabled on firebase)

#### From firebase.js (In the plugins folder)

```
// export const provider = new firebase.auth.GithubAuthProvider()
// export const provider = new firebase.auth.OAuthProvider('microsoft.com')
// export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth()
User can switch between the authentications (Github/google).
```

### Environment Variables

.env

- The .env file is used to load in our environment variables to connect to
  Firebase. This file is not meant to be exposed to the public

| Env Name            | About                     |
| ------------------- | ------------------------- |
| API_KEY             | API Key given by Firebase |
| AUTH_DOMAIN         | Authentication domain     |
| DATABASE_URL        | URL for the database      |
| PROJECT_ID          | Project Name/ID           |
| STORAGE_BUCKET      | The storage bucket link   |
| MESSAGING_SENDER_ID | The messaging sender ID   |
| APP_ID              | The application ID        |

### Possible Responses

#### Successful messages:

The following are success messages you may encounter when voting or subscribing
to the email list

- Vote has been submitted
- Unsubscribed!
- Subcribed!

#### Failure Messages:

The following are failure messages you may encounter when voting, subscribing to
the email list, or if there was an internal server error

- Could not connect to the database
- Internal server error. Please try again
- Please sign in if you wish to vote
- Please select an option for each choice
- You have already voted, your current votes are...
- The options were recently changed, please revote, your current votes are...
  Would you like to revote?
- You are already subscribed, would you like to unsubscribe
- Invalid email
- You are not subscribed
