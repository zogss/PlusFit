import * as database from 'firebase/database';
import * as firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDV4NMBnhRQnJyMoh9Ac5wT6A6n0jrXlHo",
    authDomain: "app-treinamento-fisico.firebaseapp.com",
    projectId: "app-treinamento-fisico",
    storageBucket: "app-treinamento-fisico.appspot.com",
    messagingSenderId: "329983558595",
    appId: "1:329983558595:web:2a2fccefc366c907187376"
};

if (!firebase.getApps().length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase, database };