const {initializeApp}  = require('firebase/app');
const { getStorage, ref, deleteObject} = require('firebase/storage');

const firebaseConfig = {
    apiKey: "AIzaSyDevG1pIU5tamAgTNrqiRF3ba_5rOPZogY",
    authDomain: "projet-pw2.firebaseapp.com",
    projectId: "projet-pw2",
    storageBucket: "projet-pw2.appspot.com",
    messagingSenderId: "300037244487",
    appId: "1:300037244487:web:4f72d059101a9d7c4f5362",
    measurementId: "G-ZRZ3XJZ59L"
};

const firebaseApp = initializeApp(firebaseConfig);

const storage = getStorage(firebaseApp);

const deleteImage = (imagem)=>{

    const deleteRef = ref(storage, imagem);

    deleteObject(deleteRef)
    .then(()=>{
        console.log('IMAGEM EXCLUÍDA COM SUCESSO!');
    })
    .catch((error)=>{
        console.log('ERRO AO EXCLUIR IMAGEM!');
    });

}

module.exports = deleteImage;