// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { AppState } from './store/store';
import { EntryContainer } from './components/EntryContainer';
import './App.css';
import 'firebase/auth';
import firebase from 'firebase/app';
import app from './firebase/firebase-config';
import { signIn, signOut } from './actions/list_actions';
import loadingGif from './assets/preloader.gif';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';

/** https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/read-data */
export const App: React.FC = () => {
  const userSignedIn = useSelector(
    (state: AppState) => state.list.userSignedIn
  );
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const auth = useSelector((state: AppState) => state.firebase.auth);
  const firebase = useFirebase();

  const loginWithGoogle = () => {
    return firebase.login({ provider: 'google', type: 'popup' });
  };

  const loginWithEmail = () => {
    return firebase.login({ email: '', password: ''});
  };

  const logout = () => {
    return firebase.logout();
  };

  return (
    <>
      <header className='flex items-center justify-between mx-32 my-8'>
        <h1 className='font-bold text-4xl justify-self-start  '>
          Deliberate Practice
        </h1>
        <div className='auth'>
          {/* <FirebaseAuthConsumer> */}
          {!isLoaded(auth) ? (
            <img src={loadingGif} alt='' />
          ) : isEmpty(auth) ? (
            <>
              <p>Sign in to save data</p>
              <button onClick={loginWithGoogle}>Sign in with Google</button>
              <button onClick={loginWithEmail}>Sign in with email</button>
            </>
          ) : (
            <button onClick={logout}>Sign out</button>
          )}
          {/* {!isLoaded(auth) ? (
                <img src={loadingGif} alt='' />
              ) : (
                ({ firebase }) =>
                  userSignedIn ? (
                    <div>
                      <h2>Youre signed in 🎉 </h2>
                      <button
                        onClick={async () => {
                          setLoading(true);
                          await firebase.app().auth().signOut();
                          dispatch(signOut());
                          setLoading(false);
                        }}
                      >
                        Sign out
                      </button>
                    </div>
                  ) : isEmpty(auth) ? (
                    <div>
                      <h2>Youre not signed in </h2>
                      <button
                        onClick={async () => {
                          setLoading(true);
                          await firebase.app().auth().signInAnonymously();
                          dispatch(signIn());
                          setLoading(false);
                        }}
                      >
                        Sign in anonymously
                      </button>
                      <button
                        onClick={
                          // const googleAuthProvider =
                          //   new firebase.auth.GoogleAuthProvider();
                          // await firebase
                          //   .auth()
                          //   .signInWithPopup(googleAuthProvider);
                          // setLoading(true);
                          loginWithGoogle
                          // dispatch(signIn());
                          // setLoading(false);
                        }
                      >
                        Sign in with Google
                      </button>
                    </div>
                  ) : (
                    <pre>{JSON.stringify(auth, null, 2)}</pre>
                  )
              )} */}
          {/* </FirebaseAuthConsumer> */}
        </div>
      </header>
      <div className='app-container flex flex-col place-items-center'>
        <EntryContainer userId={auth.uid} />
      </div>
    </>
  );
};
