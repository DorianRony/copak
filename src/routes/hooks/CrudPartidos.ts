import {useEffect, useState} from "react";
import {Partido} from "../interfaces/Partido";
import {Firebase} from "../../database/Firebase";
import {collection, getDocs} from "firebase/firestore";

const {db} = Firebase();

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
                    fecha: new Date(doc.data().fecha.seconds*1000),
                    goles_local: doc.data().goles_local,
                    goles_visitante: doc.data().goles_visitante,
                    hora: doc.data().hora,
                    lugar: doc.data().lugar,
                    resultado: doc.data().resultado,
                    cancha: doc.data().cancha,
                    img_local: doc.data().img_local,
                    img_visitante: doc.data().img_visitante,
                    id: doc.id
                })
            });

            setPartidos(docs.sort((pa, pb) => Number(pb.fecha) - Number(pa.fecha)))

        } catch (error) {
            console.log(error)
        }

    }
    useEffect(() => {
        listData()
    }, [])
    return (
        partidos
    )
}
