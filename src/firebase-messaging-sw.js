importScripts('https://www.gstatic.com/firebasejs/9.9.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.9.2/firebase-messaging-compat.js');
firebase.initializeApp({
    apiKey: "AIzaSyA8iVpqTgLCuv-SvyvH9FCsfcspK-L6ab8",
    authDomain: "fcm-notification-5a63b.firebaseapp.com",
    projectId: "fcm-notification-5a63b",
    storageBucket: "fcm-notification-5a63b.appspot.com",
    messagingSenderId: "919601232406",
    appId: "1:919601232406:web:2a70b9328c54c3ba90d337"
});
const messaging = firebase.messaging();