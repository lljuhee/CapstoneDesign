import { initializeApp } from 'firebase/app';
import config from '../firebase.json';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
} from 'firebase/firestore';
import { format } from 'date-fns';

export const app = initializeApp(config);

export const auth = getAuth(app);

export const signin = async ({ email, password }) => {
  const { user } = await signInWithEmailAndPassword(auth, email, password);
  return user;
};

const db = getFirestore(app);

export const createReservation = async ({ studentid }) => {
  const reservationCollection = collection(db, 'Reservations');
  const newReservationRef = doc(reservationCollection, '1');
  const id = newReservationRef.id;
  const newReservation = {
    id,
    StudentId: studentid,
    //CreatedAt: Date.now(),
    CreatedAt: format(Date.now(), "yyyy-MM-dd'T'HH:mm:ss'Z'"),
  };
  await setDoc(newReservationRef, newReservation);
  return id;
};

export const updateDate = async ({ addDate }) => {
  const reservationCollection = collection(db, 'Reservations');
  const ReservationRef = doc(reservationCollection, '1');
  try {
    await updateDoc(ReservationRef, {
      Date: addDate,
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
};

export const updateRoom = async ({ addRoom }) => {
  const reservationCollection = collection(db, 'Reservations');
  const ReservationRef = doc(reservationCollection, '1');
  try {
    await updateDoc(ReservationRef, {
      StudyRoom: addRoom,
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
};

export const updateTime = async ({ addTime }) => {
  const reservationCollection = collection(db, 'Reservations');
  const ReservationRef = doc(reservationCollection, '1');
  try {
    await updateDoc(ReservationRef, {
      Time: addTime,
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
};

export const updateInfo = async ({
  addName,
  addStudentId,
  addPhoneNum,
  addPeople,
  addPurpose,
}) => {
  const reservationCollection = collection(db, 'Reservations');
  const ReservationRef = doc(reservationCollection, '1');
  try {
    await updateDoc(ReservationRef, {
      Name: addName,
      StudentId: addStudentId,
      PhoneNum: addPhoneNum,
      People: addPeople,
      Purpose: addPurpose,
    });
  } catch (e) {
    console.log(e);
  } finally {
    console.log('end');
  }
};

export const getReservation = async () => {
  const reservationCollection = collection(db, 'Reservations');
  const ReservationRef = doc(reservationCollection, '1');

  const docSnap = await getDoc(ReservationRef);
  if (docSnap.exists()) {
    const { data } = docSnap.data();
    return data;
  }
};
// if (docSnap.exists()) {
//   return docSnap;
// }
