import {useEffect, useState} from "react";
import {Partido} from "../interfaces/Partido";
import {Firebase} from "../../database/Firebase";
import {addDoc, collection, doc, getDocs, setDoc} from "firebase/firestore";

const {db} = Firebase();

const addUpdateData = async (partido: Partido) => {
    try {
        if (partido.id === '') {
            await addDoc(collection(db, 'partido',), {...partido});
        } else {
            await setDoc(doc(db, 'partido', partido.id), {...partido});
        }
    } catch (error) {
        console.log(error)
    }
}
export const CrudPartidos = () => {
    const [partidos, setPartidos] = useState<Partido[]>([]);
    const listData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'partido',));
            const docs: Partido[] = []

            querySnapshot.forEach(doc => {
                docs.push({
                    cuotaLocal: doc.data().cuotaLocal,
                    cuotaVisitante: doc.data().cuotaVisitante,
                    cuotaMas5Goles: doc.data().cuotaVisitante,
                    equipo_local: doc.data().equipo_local,
                    equipo_visitante: doc.data().equipo_visitante,
                    fase: doc.data().fase,
                    fecha: doc.data().fecha,
                    goles_local: doc.data().goles_local,
                    goles_visitante: doc.data().goles_visitante,
                    hora: doc.data().hora,
                    lugar: doc.data().lugar,
                    resultado: doc.data().resultado,
                    cancha: doc.data().cancha,
                    id: doc.id
                })
            });
            setPartidos(docs)

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        listData()
    }, [partidos])
    return {
        partidos,
        addUpdateData
    }
}
