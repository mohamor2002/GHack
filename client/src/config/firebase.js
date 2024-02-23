import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider,setPersistence, browserLocalPersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const config = {
    apiKey: "AIzaSyDiVZJLiREhc41F5c9FgOSzMMSlo61tnAM",
    authDomain: "ghack-ad5ba.firebaseapp.com",
    projectId: "ghack-ad5ba",
    storageBucket: "ghack-ad5ba.appspot.com",
    messagingSenderId: "446135334003",
    appId: "1:446135334003:web:c5c4db57099e18d1dc2606"
}

const app = initializeApp(config);

export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;