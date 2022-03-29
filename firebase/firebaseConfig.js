import { initializeApp } from 'firebase/app';
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, onValue, set } from 'firebase/database';

// //import * as firebase from 'firebase/app';
import firebase from 'firebase/app';

// // 사용할 파이어베이스 서비스 주석을 해제합니다
import "firebase/auth";
// import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdN3flr7ERb3BqrOiesA1fvRGPXRQuG4A",
  authDomain: "capstone-7bc19.firebaseapp.com",
  projectId: "capstone-7bc19",
  storageBucket: "capstone-7bc19.appspot.com",
  messagingSenderId: "874632972413",
  appId: "1:874632972413:web:beb94fbd629467a829c914",
  measurementId: "G-CBQDZNE2BD"
};


//사용 방법입니다. 
//파이어베이스 연결에 혹시 오류가 있을 경우를 대비한 코드로 알아두면 됩니다.
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

/* function storeHighScore(userId, score) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId);
    set(reference, {
      highscore: score,
    });
  } */
export const firebase_db = firebase.database()