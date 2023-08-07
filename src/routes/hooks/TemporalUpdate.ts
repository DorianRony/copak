import {CrudPartidos} from "./CrudPartidos";
import {CrudEquipos} from "./CrudEquipos";
import {CrudAddUpdatePartido} from "./crudAddUpdatePartido";
import {ActualizarPuntos} from "./actualizarPuntos";

export const TemporalUpdate = () => {
    const equipos = CrudEquipos();
    const actPuntos = ActualizarPuntos();

    equipos.forEach(e => {
        actPuntos(e.name);
    })

}
