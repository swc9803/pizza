import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBQWmy_CYeq3O-lsx8CXBaDTtGw2rNNzSs',
  authDomain: 'pizza-48258.firebaseapp.com',
  projectId: 'pizza-48258',
  storageBucket: 'pizza-48258.appspot.com',
  messagingSenderId: '102103804993',
  appId: '1:102103804993:web:39bf7f6a8a38c2f15d2ac0'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {
  db,
  auth,
  storage
}
