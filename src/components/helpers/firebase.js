import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCyGm_jDrgAMhN3p4m72WwhNPLRszJflx0",
    authDomain: "regis-civil.firebaseapp.com",
    projectId: "regis-civil",
    storageBucket: "regis-civil.appspot.com",
    messagingSenderId: "234950402148",
    appId: "1:234950402148:web:ec925680755c847adb7f71"
}

app.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = app.auth();


export {db, auth}