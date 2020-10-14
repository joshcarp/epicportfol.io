import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAZc4f78LwM1uku3T87AOlz7QAVbOx92A8",
    authDomain: "joshcarp-it-project.firebaseapp.com",
    databaseURL: "https://joshcarp-it-project.firebaseio.com",
    projectId: "joshcarp-it-project",
    storageBucket: "joshcarp-it-project.appspot.com",
    messagingSenderId: "968747045906",
    appId: "1:968747045906:web:1efdab368d039eed2f74cb",
    measurementId: "G-4RDCWWLJ4C"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.auth()


export default {
    firebaseConfig,
}