import firebaseconfig from './firebaseIndex';
import firebase from 'firebase';


export const authMethods = {
    signup: (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.error(err)
            })
    },


    signin: (email, password) => {

    },
    signout: (email, password) => {

    },

// firebase helper methods go here...

}