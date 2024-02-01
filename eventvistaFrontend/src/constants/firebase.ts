import { initializeApp, FirebaseApp } from "firebase/app";
import { Messaging, getMessaging, getToken, onMessage } from "firebase/messaging";
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDe619_-vmvTLN9YcDea5fEhqR5i5vQwr8",
    authDomain: "testpush-e896f.firebaseapp.com",
    projectId: "testpush-e896f",
    storageBucket: "testpush-e896f.appspot.com",
    messagingSenderId: "1090658494347",
    appId: "1:1090658494347:web:868cf6facf3d449e10718e"
};

export const app: FirebaseApp = initializeApp(firebaseConfig);

export const requestForToken = async (): Promise<string | null> => {
    const messaging: Messaging = getMessaging(app);

    try {
        const token = await getToken(messaging, { vapidKey: "BO5QHD8c1XDce48lKkDSx_I29soZG28fVh5gnma9ULXQxoIef3VTCrViVuk74BBpda1fxbJ0w-bWEvLHsnoV3Bo" });
        console.log(token)
        return token;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const onScreenNotification = () => {
    // Your implementation for onScreenNotification
};
