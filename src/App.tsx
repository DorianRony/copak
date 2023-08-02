import {NavBar} from "./routes/components/NavBar";
import {Navigate, Route, Routes} from "react-router-dom";
import {Posciciones} from "./routes/Posciciones";
import {Equipos} from "./routes/Equipos";
import {Partidos} from "./routes/Partidos";
import {Fases} from "./routes/Fases";

export const App = () => {
    return (
        <>
            <NavBar></NavBar>
            <Routes>
                <Route path={'/'} element={<Posciciones></Posciciones>}></Route>
                <Route path={'/TablaPosciciones'} element={<Posciciones></Posciciones>}></Route>
                <Route path='/Partidos' element={<Partidos></Partidos>}></Route>
                <Route path='/Equipos' element={<Equipos></Equipos>}></Route>
                <Route path='/Fases' element={<Fases></Fases>}></Route>
                <Route path='/*' element={<Navigate to='/'></Navigate>}></Route>
            </Routes>
        </>
    )
}
