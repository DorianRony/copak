import {useEffect, useState} from "react";
import {Equipo} from "../interfaces/Equipo";
import {addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore";
import {Firebase} from "../../database/Firebase";

const {db} = Firebase();
const addUpdateData = async (equipo: Equipo) => {
    try {
        if(equipo.id === ''){
            await addDoc(collection(db, 'equipo',), {...equipo});
        }else{
            await setDoc(doc(db, 'equipo',equipo.id), {...equipo});
        }
    } catch (error) {
        console.log(error)
    }
}
export const CrudEquipos = () => {
    const [equipos, setEquipo] = useState<Equipo[]>([]);
    const listData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'equipo',));
            const docs: Equipo[] = []
            querySnapshot.forEach(doc => {
                console.log(doc)
                docs.push({
                    id: doc.id,
                    name: doc.data().name,
                    descripcion: doc.data().descripcion,
                    partidosJugados: 0,
                    partidosGanados: 0,
                    partidosEmpatados: 0,
                    partidosPerdidos: 0,
                    golesAFavor: 0,
                    golesEnContra: 0,
                    diferenciaDeGoles: 0,
                    puntos: 0,
                })
            });
            setEquipo(docs)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        listData()
    }, [])
    return {
        equipos,
        addUpdateData
    }
}
