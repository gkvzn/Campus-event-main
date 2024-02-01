importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyDe619_-vmvTLN9YcDea5fEhqR5i5vQwr8",
  authDomain: "testpush-e896f.firebaseapp.com",
  projectId: "testpush-e896f",
  storageBucket: "testpush-e896f.appspot.com",
  messagingSenderId: "1090658494347",
  appId: "1:1090658494347:web:868cf6facf3d449e10718e",
});

const messaging = firebase.messaging();

// Handle incoming messages while the app is not in focus (i.e in the background, hidden behind other tabs, or completely closed).
// messaging.onBackgroundMessage(function (payload) {
//     const notificationTitle = payload.notification.title;
//     const notificationOptions = {
//         body: payload.notification.body,
//     };
//     self.registration.showNotification(notificationTitle, notificationOptions);
// });
