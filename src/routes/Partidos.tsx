import {Partido} from "./interfaces/Partido";
import {Equipo} from "./interfaces/Equipo";
import {Fase} from "./interfaces/Fase";
import {TablaPartidosAll} from "./components/TablaPartidosAll";

export const Partidos = ({partidos, equipos, fases}: { partidos: Partido[], equipos:Equipo[], fases:Fase[]}) => {
    return (
        <>
            <TablaPartidosAll partidos={partidos} equipos={equipos} fases={fases}></TablaPartidosAll>
        </>
    )
}
