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
      const createdAt = (new Date().toUTCString());
      console.log("displayName:",displayName)
      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      }
      catch(error){
        alert('error creating user:',error.message);
      }
    }
    else{ return userRef;}
   
  }
  
export default firebase



//Fetch collections from Firestore
export const convertCollectionsFromFirebase= collections =>{
  const convertedCollections = collections.docs.map(doc=>{
    const {title,items}= doc.data()
    return {
      routeName : encodeURI(title.toLowerCase()),
      id:doc.id,
      title,
      items
    }
  }) 
  //console.log(convertedCollections)
  return convertedCollections.reduce((accumulator,collections)=>{
    accumulator[collections.title.toLowerCase()]=collections
    return accumulator
  },{})
}

// Firestore DB uploader
export const addCollectionandDocs = async (collectionKey,objectToAdd)=>{
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()
  let x
  for(x in objectToAdd){
    const {items,title}= objectToAdd[x]
    const newDocRef =collectionRef.doc()
    batch.set(newDocRef,{items,title})
  }

  return await batch.commit()
}