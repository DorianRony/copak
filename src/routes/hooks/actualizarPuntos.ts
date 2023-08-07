import {useState} from 'react'
import {CrudGetOneEquipo} from "./crudGetOneEquipo";
import {CrudGetPartidosEquipo} from "./crudGetPartidosEquipo";
import {Equipo} from "../interfaces/Equipo";
import {CrudAddUpdateEquipo} from "./crudAddUpdateEquipo";

export const ActualizarPuntos = () => {
    const addUpdateData = CrudAddUpdateEquipo();
    const consultEquipo = CrudGetOneEquipo();
    const {consultPartidosLocal, consultPartidosVisitante} = CrudGetPartidosEquipo();
    const actPuntos = async (equipoName: string) => {
        const equipo = await consultEquipo(equipoName);
        if (!equipo) {
            // Manejar el caso en que no se encuentre el equipo
            return;
        }
        console.log(equipo)
        let partidosLocal = await consultPartidosLocal(equipoName);
        if (!partidosLocal) {
            // Manejar el caso en que no se encuentre el equipo
            return;
        }
        console.log(partidosLocal)

        let partidosVisitante = await consultPartidosVisitante(equipoName);
        if (!partidosVisitante) {
            // Manejar el caso en que no se encuentre el equipo
            return;
        }

        console.log(partidosVisitante)
        let partidosJugados = partidosLocal.length + partidosVisitante.length;
        let partidosGanados = partidosLocal.filter(p => p.resultado === "Gana Local").length
            + partidosVisitante.filter(p => p.resultado === "Gana Visitante").length
        let partidosPerdidos = partidosLocal.filter(p => p.resultado === "Gana Visitante").length
            + partidosVisitante.filter(p => p.resultado === "Gana Local").length
        let partidosEmpatados = partidosLocal.filter(p => p.resultado === "Empate").length
            + partidosVisitante.filter(p => p.resultado === "Empate").length
        let golesLocal = partidosLocal.reduce((goles, p) => goles + p.goles_local, 0);
        let golesvistante = partidosVisitante.reduce((goles, p) => goles + p.goles_visitante, 0);
        let golesAFavor = golesLocal
            + golesvistante
        let golesEnContra = partidosLocal.reduce((goles, p) => goles + p.goles_visitante, 0)
            + partidosVisitante.reduce((goles, p) => goles + p.goles_local, 0)
        let diferenciaDeGoles = golesAFavor - golesEnContra

        let puntos = (partidosGanados * 3) + (partidosEmpatados)

        console.log("partidosJugados" + partidosJugados);
        console.log("partidosGanados" + partidosGanados);
        console.log("partidosPerdidos" + partidosPerdidos);
        console.log("partidosEmpatados" + partidosEmpatados);
        console.log("golesAFavor" + golesAFavor);
        console.log("golesEnContra" + golesEnContra);
        console.log("diferenciaDeGoles" + diferenciaDeGoles);
        console.log("puntos" + puntos);

        const equipoAct: Equipo = {
            id: equipo.id,
            name: equipo.name,
            descripcion: equipo.descripcion,
            partidosJugados: partidosJugados,
            partidosGanados: partidosGanados,
            partidosEmpatados: partidosEmpatados,
            partidosPerdidos: partidosPerdidos,
            golesAFavor: golesAFavor,
            golesEnContra: golesEnContra,
            diferenciaDeGoles: diferenciaDeGoles,
            puntos: puntos,
            img: equipo.img
        }
        console.log(equipoAct)
        addUpdateData(equipoAct);
    }

    return (
        actPuntos
    )
}
