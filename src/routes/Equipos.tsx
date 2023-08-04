import {TablaEquipos} from "./components/TablaEquipos";
import {Equipo} from "./interfaces/Equipo";

// @ts-ignore
export const Equipos = ({equipos}: { equipos: Equipo[] }) => {
    return (
        <TablaEquipos equipos={equipos}></TablaEquipos>
    )
}
