import firebase from 'firebase';
// Initialize Firebase
try{
    
   var config = {
    apiKey: "AIzaSyApc4okIQUgZs0nFEiKH1dFhOKb9QiCnXQ",
    authDomain: "todoapp-bf00e.firebaseapp.com",
    databaseURL: "https://todoapp-bf00e.firebaseio.com",
    projectId: "todoapp-bf00e",
    storageBucket: "todoapp-bf00e.appspot.com",
    messagingSenderId: "546722624235"
  };
  firebase.initializeApp(config);

}catch(e){

}
export var facebookProvider = new firebase.auth.FacebookAuthProvider();
export var firebaseRef =firebase.database().ref() ;
export default firebase;