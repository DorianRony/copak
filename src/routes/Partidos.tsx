import {TablaPartidos} from "./components/TablaPartidos";
import {Partido} from "./interfaces/Partido";
import {Equipo} from "./interfaces/Equipo";
import {Fase} from "./interfaces/Fase";

export const Partidos = ({partidos, equipos, fases}: { partidos: Partido[], equipos:Equipo[], fases:Fase[]}) => {
    return (
        <>
            <TablaPartidos partidos={partidos} equipos={equipos} fases={fases}></TablaPartidos>
        </>
    )
}
