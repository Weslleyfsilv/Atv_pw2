const {initializeApp}  = require('firebase/app');
const { getStorage, ref, deleteObject} = require('firebase/storage');

const firebaseConfig = {
    /* DADOS DE CONEXÃO COM O FIREBASE */
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