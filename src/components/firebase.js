import app from 'firebase/app';

import 'firebase/auth';
import 'firebase/firebase-firestore'

const config = {
    apiKey: "AIzaSyCyGm_jDrgAMhN3p4m72WwhNPLRszJflx0",
    authDomain: "regis-civil.firebaseapp.com",
    projectId: "regis-civil",
    storageBucket: "regis-civil.appspot.com",
    messagingSenderId: "234950402148",
    appId: "1:234950402148:web:ec925680755c847adb7f71"
}

class Firebase{
    constructor(){
        app.initializeApp(config)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, pass){
        return this.auth.signInWithEmailAndPassword(email, pass)
    }

    logout(){
        return this.auth.signOut()
    }

    async register(name, email, pass, rol){
        const res = await this.auth.createUserWithEmailAndPassword(email, pass).
        then((res) => {
            return res.user.updateProfile({
                displayName: name
            })
        })
        .then(() => {
            const user = this.auth.currentUser;

            this.db.collection('users').doc(user.uid).set({
                fechaCreacion: Date.now(),
                name: user.displayName,
                email: user.email,
                uid: user.uid,
                rol: rol
            })
        })
    }

}

export default new Firebase()
