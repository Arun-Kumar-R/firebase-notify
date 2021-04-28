// Firebase config
const firebaseConfig = {

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.requestPermission().then(() => {
    return messaging.getToken()
}).then(token => {
    console.log('Have Permission', token);
}).catch(err => {
    console.log('error occurred')
})