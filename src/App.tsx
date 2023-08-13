import {NavBar} from "./routes/components/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import {Posciciones} from "./routes/Posciciones";
import {Equipos} from "./routes/Equipos";
import {Partidos} from "./routes/Partidos";
import {Fases} from "./routes/Fases";
import {CrudEquipos} from "./routes/hooks/CrudEquipos";
import {CrudPartidos} from "./routes/hooks/CrudPartidos";
import {CrudFases} from "./routes/hooks/CrudFases";
import {UserProvider} from "./routes/context/UserProvider";
import {UserContext} from "./routes/context/UserContext";
import {useContext} from "react";
import {Login} from "./routes/Login";

export const App = () => {

    const equipos = CrudEquipos();
    const partidos = CrudPartidos()
    const fases = CrudFases();
    return (
        <UserProvider>
            <NavBar></NavBar>
            <Routes>
                <Route path={'/copak/'} element={<Posciciones equipos={equipos}></Posciciones>}></Route>
                <Route path={'/copak/TablaPosciciones'} element={<Posciciones equipos={equipos}></Posciciones>}></Route>
                <Route path={'/copak/Partidos'}
                       element={<Partidos partidos={partidos} equipos={equipos} fases={fases}></Partidos>}></Route>
                <Route path={'/copak/Equipos'} element={<Equipos equipos={equipos}></Equipos>}></Route>
                <Route path={'/copak/Fases'} element={<Fases fases={fases}></Fases>}></Route>
                <Route path={'/copak/*'} element={<Navigate to='/copak/'></Navigate>}></Route>
                <Route path={'/*'} element={<Navigate to='/copak/'></Navigate>}></Route>
                <Route path={'/copak/login'} element={<Login></Login>}></Route>
            </Routes>
        </UserProvider>
    )
}
