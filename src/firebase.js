import { initializeApp } from 'firebase/app';
import config from '../firebase.json';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
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
  const newReservationRef = doc(reservationCollection, '1');
  const id = newReservationRef.id;
  const newReservation = {
    id,
    studentId: studentid,
    createdAt: Date.now(),
  };
  await setDoc(newReservationRef, newReservation);
  return id;
};

export const updateInfo = async ({
  addName,
  addStudentId,
  addPhoneNum,
  addPeople,
  addPurpose,
}) => {
  const reservationCollection = collection(db, 'reservations');
  const ReservationRef = doc(reservationCollection, '1');
  try {
    await updateDoc(ReservationRef, {
      name: addName,
      studentId: addStudentId,
      phoneNum: addPhoneNum,
      people: addPeople,
      purpose: addPurpose,
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
};

export const updateDate = async ({ addDate }) => {
  const reservationCollection = collection(db, 'reservations');
  const ReservationRef = doc(reservationCollection, '1');
  try {
    await updateDoc(ReservationRef, {
      date: addDate,
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
};
