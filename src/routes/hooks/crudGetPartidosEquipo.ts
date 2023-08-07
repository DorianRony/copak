import {Firebase} from "../../database/Firebase";
import {collection, getDocs, query, where} from "firebase/firestore";
import {Partido} from "../interfaces/Partido";

const {db} = Firebase();

export const CrudGetPartidosEquipo = () => {
        const consultPartidosLocal = async (equipo: String) => {
        try {
            const q = query(collection(db, 'partido'), where("equipo_local", "==", equipo), where("resultado", "!=", "Pendiente"));

            const querySnapshot = await getDocs(q);
            const docs: Partido[] = []

            console.log(querySnapshot)

            querySnapshot.forEach(doc => {
                docs.push({
                    cancha: doc.data().cancha,
                    cuotaLocal: doc.data().cuotaLocal,
                    cuotaMas5Goles: doc.data().cuotaMas5Goles,
                    cuotaVisitante: doc.data().cuotaVisitante,
                    equipo_local: doc.data().equipo_local,
                    equipo_visitante: doc.data().equipo_visitante,
                    fase: doc.data().fase,
                    fecha: doc.data().fecha,
                    goles_local: doc.data().goles_local,
                    goles_visitante: doc.data().goles_visitante,
                    hora: doc.data().hora,
                    id: doc.id,
                    lugar: doc.data().lugar,
                    resultado: doc.data().resultado,
                    img_local: doc.data().img_local,
                    img_visitante: doc.data().img_visitante,
                })
            });
            return docs;
        } catch (error) {
            console.log(error)
        }
    }

    const consultPartidosVisitante = async (equipo: String) => {
        try {
            const q = query(collection(db, 'partido'), where("equipo_visitante", "==", equipo), where("resultado", "!=", "Pendiente"));

            const querySnapshot = await getDocs(q);
            const docs: Partido[] = []
            console.log(querySnapshot)
            querySnapshot.forEach(doc => {
                docs.push({
                    cancha: doc.data().cancha,
                    cuotaLocal: doc.data().cuotaLocal,
                    cuotaMas5Goles: doc.data().cuotaMas5Goles,
                    cuotaVisitante: doc.data().cuotaVisitante,
                    equipo_local: doc.data().equipo_local,
                    equipo_visitante: doc.data().equipo_visitante,
                    fase: doc.data().fase,
                    fecha: doc.data().fecha,
                    goles_local: doc.data().goles_local,
                    goles_visitante: doc.data().goles_visitante,
                    hora: doc.data().hora,
                    id: doc.id,
                    lugar: doc.data().lugar,
                    resultado: doc.data().resultado,
                    img_local: doc.data().img_local,
                    img_visitante: doc.data().img_visitante,
                })
            });
            return docs;
        } catch (error) {
            console.log(error)
        }
    }

    return {
        consultPartidosLocal,
        consultPartidosVisitante,
    }
}
