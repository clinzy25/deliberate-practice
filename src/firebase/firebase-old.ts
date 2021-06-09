// @ts-nocheck
export {}
// import {
//   GoogleAuthProvider,
//   getAuth,
//   signInWithPopup,
//   signInAnonymously,
//   onAuthStateChanged,
// } from 'firebase/auth';

// const provider = new GoogleAuthProvider();

// const auth = getAuth();
// signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   })
//   .catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });

// const auth = getAuth();
// signInAnonymously(auth)
//   .then(() => {
//     const credential = GoogleAuthProvider.credential(
//       googleUser.getAuthResponse().id_token
//     );
//     const credential = EmailAuthProvider.credential(email, password);

//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ...
//   });

// const auth = getAuth();
// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     const uid = user.uid;
//     // ...
//   } else {
//     // User is signed out
//     // ...
//   }
// });

// import * as firebaseui from 'firebaseui';
// import firebase from 'firebase/app';
// import 'firebase/auth';

// /** Initialize FirebaseUI */
// const ui = new firebaseui.auth.AuthUI(firebase.auth());
// // Temp variable to hold the anonymous user data if needed.
// const data = null;
// // Hold a reference to the anonymous current user.
// const anonymousUser = firebase.auth().currentUser;

// ui.start('#firebaseui-auth-container', {
//   autoUpgradeAnonymousUsers: true,
//   signInOptions: [
//     /** Email and password */
//     firebase.auth.EmailAuthProvider.PROVIDER_ID,
//     // List of OAuth providers supported.
//     firebase.auth.GoogleAuthProvider.PROVIDER_ID,
//     firebase.auth.GithubAuthProvider.PROVIDER_ID,
//   ],
//   callbacks: {
//     // signInFailure callback must be provided to handle merge conflicts which
//     // occur when an existing credential is linked to an anonymous user.
//     signInFailure: (error) => {
//       // For merge conflicts, the error.code will be
//       // 'firebaseui/anonymous-upgrade-merge-conflict'.
//       if (error.code != 'firebaseui/anonymous-upgrade-merge-conflict') {
//         return Promise.resolve();
//       }
//       // The credential the user tried to sign in with.
//       const cred = error.credential;
//       // Copy data from anonymous user to permanent user and delete anonymous
//       // user.
//       // ...
//       // Finish sign-in after data is copied.
//       return firebase.auth().signInWithCredential(cred);
//     },
//   },
// });
