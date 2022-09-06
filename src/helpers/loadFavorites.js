import { collection, getDocs } from "firebase/firestore/lite"
import { FirebaseDB } from "../firebase/config"


export const loadFavorites = async(uid = '') => {
    if(!uid) throw new Error('UID inexistente');
    const collectionRef = collection(FirebaseDB, `${uid}/principal/favorites`);

    const docs = await getDocs(collectionRef);
    
    const favorites = [];
     docs.forEach(doc => {
        favorites.push({id: doc.id, ...doc.data()});
        
     })
     return favorites;
}