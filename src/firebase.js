import { initializeApp } from 'firebase/app';
import config from '../firebase.json';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
} from 'firebase/firestore';

export const app = initializeApp(config);

export const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

const db = getFirestore(app);

export const createReservation = async ({ studentid }) => {
  const reservationCollection = collection(db, 'reservations');
  const newReservationRef = doc(reservationCollection);
  const id = newReservationRef.id;
  const newReservation = {
    id,
    studentId: studentid,
    createdAt: Date.now(),
  };
  await setDoc(newReservationRef, newReservation);
  return id;
};

export const addInfo = async ({
  addName,
  addStudentId,
  addPhoneNum,
  addPeople,
  addPurpose,
}) => {
  try {
    await addDoc(collection(db, 'reservations'), {
      name: addName,
      studentId: addStudentId,
      phoneNum: addPhoneNum,
      people: addPeople,
      purpose: addPurpose,
    });
    console.log('Create Complete!');
  } catch (error) {
    console.log(error.message);
  }
};
