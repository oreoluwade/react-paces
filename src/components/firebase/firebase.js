import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
        this.db = app.database();
    }

    createUser = payload =>
        this.auth.createUserWithEmailAndPassword(
            payload.email,
            payload.password
        );

    login = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    logout = () => this.auth.signOut();

    resetPassword = email => this.auth.sendPasswordResetEmail(email);

    updatePassword = password => this.auth.currentUser.updatePassword(password);

    user = uid => this.db.ref(`users/${uid}`);

    users = () => this.db.ref('users');

    info = uid => this.db.ref(`infobloc/${uid}`);

    getAddedInfo = () => this.db.ref('infobloc');
}

export default Firebase;
