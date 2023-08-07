import {useEffect, useState} from "react";
import {Equipo} from "../interfaces/Equipo";
import {collection, getDocs} from "firebase/firestore";
import {Firebase} from "../../database/Firebase";

const {db} = Firebase();
export const CrudEquipos = () => {
    const [equipos, setEquipo] = useState<Equipo[]>([]);
    const listData = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, 'equipo',));
            const docs: Equipo[] = []
            querySnapshot.forEach(doc => {
                docs.push({
                    id: doc.id,
                    name: doc.data().name,
                    descripcion: doc.data().descripcion,
                    partidosJugados: doc.data().partidosJugados,
                    partidosGanados: doc.data().partidosGanados,
                    partidosEmpatados: doc.data().partidosEmpatados,
                    partidosPerdidos: doc.data().partidosPerdidos,
                    golesAFavor: doc.data().golesAFavor,
                    golesEnContra: doc.data().golesEnContra,
                    diferenciaDeGoles: doc.data().diferenciaDeGoles,
                    puntos: doc.data().puntos,
                    img: doc.data().img,
                })
            });
            setEquipo(docs.sort((e,e2) => {
                if(e2.puntos !== e.puntos) return e2.puntos - e.puntos
                if(e2.diferenciaDeGoles !== e.diferenciaDeGoles) return e2.diferenciaDeGoles - e.diferenciaDeGoles
                return 0;
            } ))
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        listData()
    }, [])
    return (
        equipos
    )
}
