import {NavBar} from "./routes/components/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import {Posciciones} from "./routes/Posciciones";
import {Equipos} from "./routes/Equipos";
import {Partidos} from "./routes/Partidos";
import {Fases} from "./routes/Fases";
import {CrudEquipos} from "./routes/hooks/CrudEquipos";
import {CrudPartidos} from "./routes/hooks/CrudPartidos";
import {CrudFases} from "./routes/hooks/CrudFases";

export const App = () => {

    const equipos = CrudEquipos();
    const partidos = CrudPartidos()
    const fases = CrudFases();

    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path={'/'} element={<Posciciones equipos={equipos}></Posciciones>}></Route>
                <Route path={'/TablaPosciciones'} element={<Posciciones equipos={equipos}></Posciciones>}></Route>
                <Route path='/Partidos' element={<Partidos partidos={partidos} equipos={equipos} fases={fases}></Partidos>}></Route>
                <Route path='/Equipos' element={<Equipos equipos={equipos}></Equipos>}></Route>
                <Route path='/Fases' element={<Fases fases={fases}></Fases>}></Route>
                <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
            </Routes>
        </>
    )
}
