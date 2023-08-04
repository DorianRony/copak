import {TablaFases} from "./components/TablaFases";
import {Fase} from "./interfaces/Fase";

export const Fases = ({fases}: { fases: Fase[] }) => {
    return (
        <TablaFases fases={fases}></TablaFases>
    )
}
