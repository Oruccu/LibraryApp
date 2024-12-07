// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {initializeAuth, getReactNativePersistence, getAuth} from "firebase/auth"
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyC63UiEWowgdXFlZoyyZ2v1waZ-H4I073c",
  authDomain: "libraryapp-f3708.firebaseapp.com",
  projectId: "libraryapp-f3708",
  storageBucket: "libraryapp-f3708.appspot.com",
  messagingSenderId: "379461250639",
  appId: "1:379461250639:web:2ed9667876e1cf8f5ec43a",
  measurementId: "G-7VDVZJYLSR"
};

const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
const database = getDatabase(app);

export {auth, database}
