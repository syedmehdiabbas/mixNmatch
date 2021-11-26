// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';
import { getFirestore, collection, addDoc, getDocs } from 'firebase/firestore';
import { getStorage, ref, uploadBytes } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore();
const storage = getStorage();

async function addTop() {
  try {
    const docRef = await addDoc(collection(db, 'tops'), {
      color: 'yellow',
      url: 'https://www.kwabey.com/uploads/products/469/469-1619177422-944065-4.jpg',
    });
    console.log('written with id', docRef.id);
  } catch (e) {
    console.error(e);
  }
}

async function readData(coll) {
  const querySnapshot = await getDocs(collection(db, coll));
  const data = [];
  querySnapshot.forEach(doc => {
    data.push(doc.data());
  });
  return data;
}

export { collection, addTop, readData, storage, ref, uploadBytes, addDoc, db };
