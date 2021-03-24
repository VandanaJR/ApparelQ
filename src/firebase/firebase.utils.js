import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCZookU2adbl8fzcn7pdJkB5uf-l1IlkVA",
    authDomain: "apparelq-db.firebaseapp.com",
    projectId: "apparelq-db",
    storageBucket: "apparelq-db.appspot.com",
    messagingSenderId: "770397212117",
    appId: "1:770397212117:web:cb92a9106a5a6e6e84415c",
    measurementId: "G-WDH8R4TVC9"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
 
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
  }

  export const createUserProfileDocument = async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    //console.log("snap:",snapShot)
    if(!snapShot.exists){
      //console.log("snapShot exists")
      const {displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        console.log('error creating user:',error.message);
      }
    }
    return userRef;
  }

export default firebase;