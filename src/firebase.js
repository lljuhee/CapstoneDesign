import { initializeApp } from 'firebase/app';
import config from '../firebase.json';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getFirestore, collection, doc, setDoc } from 'firebase/firestore';

export const app = initializeApp(config);

export const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

const db = getFirestore(app);

export const createReservation = async ({ studentid }) => {
  const channelCollection = collection(db, 'reservations');
  const newChannelRef = doc(channelCollection);
  const id = newChannelRef.id;
  const newChannel = {
    id,
    studentid: studentid,
    createdAt: Date.now(),
  };
  await setDoc(newChannelRef, newChannel);
  return id;
};
