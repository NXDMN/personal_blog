const firebaseConfig = {
  apiKey: 'AIzaSyCfEXoteIt2HiJZpvDApQKjFUIdaBcNLtA',
  authDomain: 'blog-website-b7f87.firebaseapp.com',
  projectId: 'blog-website-b7f87',
  storageBucket: 'blog-website-b7f87.appspot.com',
  messagingSenderId: '194190251619',
  appId: '1:194190251619:web:94a7adab77237f22a04a56',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
