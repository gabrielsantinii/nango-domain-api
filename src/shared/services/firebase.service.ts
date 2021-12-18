import * as firebase from "firebase-admin";

export class FirebaseService {
    static init() {
        const serviceAccount = JSON.parse(process.env.FIREBASE_CONFIG as string);
        const firebaseApp = firebase.initializeApp({
            credential: firebase.credential.cert(serviceAccount),
        });
        if (firebaseApp.appCheck()) {
            console.log("Firebase connected successfully.");
            return;
        }
        throw new Error("Error connecting to Firebase.");
    }
}
