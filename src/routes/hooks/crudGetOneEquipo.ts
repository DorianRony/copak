import {Firebase} from "../../database/Firebase";
import {Equipo} from "../interfaces/Equipo";
import {collection, getDocs, query, where} from "firebase/firestore";
import {useEffect, useState} from "react";

const {db} = Firebase();

export const CrudGetOneEquipo = () => {

    const consultEquipo = async (equipo: string) => {
        try {
            const q = query(collection(db, 'equipo'), where("name", "==", equipo));

            const querySnapshot = await getDocs(q);
            const docs: Equipo[] = []

            querySnapshot.forEach(doc => {
                docs.push({
                    id: doc.id,
                    name: doc.data().name,
                    descripcion: doc.data().descripcion,
                    diferenciaDeGoles: doc.data().diferenciaDeGoles,
                    golesAFavor: doc.data().golesAFavor,
                    golesEnContra: doc.data().golesEnContra,
                    partidosEmpatados: doc.data().partidosEmpatados,
                    partidosGanados: doc.data().partidosGanados,
                    partidosJugados: doc.data().partidosJugados,
                    partidosPerdidos: doc.data().partidosPerdidos,
                    puntos: doc.data().puntos,
                    img: doc.data().img
                })
            });

            return docs[0];
        } catch (error) {
            console.log(error)
        }
    }

    return (
        consultEquipo
    )
}
