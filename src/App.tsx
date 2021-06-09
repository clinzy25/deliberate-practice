// @ts-nocheck
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './index.css';
import { AppState } from './store/store';
import { EntryContainer } from './components/EntryContainer';
import './App.css';
import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from '@react-firebase/auth';
import 'firebase/auth';
import firebase from 'firebase/app';
import app from './firebase/firebase-config';
import { signIn, signOut } from './actions/list_actions';
import loadingGif from './assets/preloader.gif';

/** https://react-firebase-js.com/docs/guides/build-a-react-app-with-firebase-auth-and-realtime-database/read-data */
export const App: React.FC = () => {
  const userSignedIn = useSelector((state: AppState) => state.userSignedIn);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <header className='flex items-center justify-between mx-32 my-8'>
        <h1 className='font-bold text-4xl justify-self-start  '>
          Deliberate Practice
        </h1>
        <div className='auth'>
          <FirebaseAuthProvider {...app} firebase={firebase}>
            <FirebaseAuthConsumer>
              {loading ? (
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
                  ) : (
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
                        onClick={async () => {
                          const googleAuthProvider =
                            new firebase.auth.GoogleAuthProvider();
                          await firebase
                            .auth()
                            .signInWithPopup(googleAuthProvider);
                          setLoading(true);
                          dispatch(signIn());
                          setLoading(false);
                        }}
                      >
                        Sign in with Google
                      </button>
                    </div>
                  )
              )}
            </FirebaseAuthConsumer>
          </FirebaseAuthProvider>
        </div>
      </header>
      <div className='app-container flex flex-col place-items-center'>
        <EntryContainer />
      </div>
    </>
  );
};
