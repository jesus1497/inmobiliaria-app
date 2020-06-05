import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyAzWf9g_gAg8LcJjiTpEgbCsrO-akeE4bo",
    authDomain: "home-property.firebaseapp.com",
    databaseURL: "https://home-property.firebaseio.com",
    projectId: "home-property",
    storageBucket: "home-property.appspot.com",
    messagingSenderId: "394476902766",
    appId: "1:394476902766:web:64fcc0ce498a8e9736097f",
    measurementId: "G-D50VZVBH96"
  };

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.db = app.firestore();
        this.auth = app.auth();
    }

    estaIniciado() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }
}

export default Firebase;