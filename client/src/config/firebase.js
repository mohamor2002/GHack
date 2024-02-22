import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyCaTMLmtN5d-z76XRmLyn5Z9nQtxBqXM0M",
    authDomain: "ghack-c764c.firebaseapp.com",
    projectId: "ghack-c764c",
    storageBucket: "ghack-c764c.appspot.com",
    messagingSenderId: "1094108300028",
    appId: "1:1094108300028:web:9c624862cc2e62df2f4d79",
};

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;