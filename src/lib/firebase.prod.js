import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyABPbQVukaU_k3ukjRm-tVpDuOtWLUYTzM',
  authDomain: 'netflix-88fb6.firebaseapp.com',
  databaseURL: 'https://netflix-88fb6.firebaseio.com',
  projectId: 'netflix-88fb6',
  storageBucket: 'netflix-88fb6.appspot.com',
  messagingSenderId: '941199011356',
  appId: '1:941199011356:web:9be084a662ca74f4c379d9',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
