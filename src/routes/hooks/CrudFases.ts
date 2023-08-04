import {useEffect, useState} from "react";
import {Firebase} from "../../database/Firebase";
import {collection, getDocs} from "firebase/firestore";
import {Fase} from "../interfaces/Fase";

const {db} = Firebase();

export const CrudFases = () => {

    const [fases, setFases] = useState<Fase[]>([]);
    const listData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'fase',));
            const docs: Fase[] = []
            console.log(querySnapshot)
            querySnapshot.forEach(doc => {
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

    return (
        fases
    )
}
