import {TablaPosciciones} from "./components/TablaPosciciones";
import {Equipo} from "./interfaces/Equipo";

export const Posciciones = ({equipos}: { equipos: Equipo[] }) => {
    return (
        <TablaPosciciones equipos={equipos}></TablaPosciciones>
    )
}
