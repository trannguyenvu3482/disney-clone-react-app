import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCSV90EGYDZNtuJqKnlRnJeA-oON8fZXFM',
  authDomain: 'disney-plus-clone-react-4e9fb.firebaseapp.com',
  projectId: 'disney-plus-clone-react-4e9fb',
  storageBucket: 'disney-plus-clone-react-4e9fb.appspot.com',
  messagingSenderId: '1020708598013',
  appId: '1:1020708598013:web:3ce749bcc277f8df4c8e94',
  measurementId: 'G-Z8JZN0KXYY',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage, signInWithPopup };
export default db;
