importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyA-V64FYtz1SDsAL6GYE0tcoVK2PbE8eiU",
    authDomain: "quiz-pwa-p7a2.firebaseapp.com",
    databaseURL: "https://quiz-pwa-p7a2.firebaseio.com",
    projectId: "quiz-pwa-p7a2",
    storageBucket: "quiz-pwa-p7a2.appspot.com",
    messagingSenderId: "75556244082",
    appId: "1:75556244082:web:e933bff153c34943c110eb"
});

firebase.messaging();