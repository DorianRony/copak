import {useEffect, useState} from "react";
import {Firebase} from "../../database/Firebase";
import {addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore";
import {Fase} from "../interfaces/Fase";

const {db} = Firebase();
const addUpdateData = async (fase: Fase) => {
    try {
        if(fase.id === ''){
            await addDoc(collection(db, 'fase',), {...fase});
        }else{
            await setDoc(doc(db, 'fase',fase.id), {...fase});
        }
    } catch (error) {
        console.log(error)
    }
}

export const CrudFases = () => {

    const [fases, setFases] = useState<Fase[]>([]);
    const listData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'fase',));
            const docs: Fase[] = []
            querySnapshot.forEach(doc => {
                console.log(doc)
                docs.push({id: doc.id, name: doc.data().name})
            });
            setFases(docs)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        listData()
    }, [])

    return {
        fases,
        addUpdateData
    }
}
