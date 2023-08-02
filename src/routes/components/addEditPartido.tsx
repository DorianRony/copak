import React, {useState} from 'react'
import {CrudPartidos} from "../hooks/CrudPartidos";
import {Fase} from "../interfaces/Fase";
import {Partido} from "../interfaces/Partido";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {CrudEquipos} from "../hooks/CrudEquipos";
import {CrudFases} from "../hooks/CrudFases";
import {Dropdown} from "primereact/dropdown";

// @ts-ignore
export const AddEditPartido = ({visible, setVisible, idPartido, setIdPartido}) => {
    const {addUpdateData} = CrudPartidos();
    let [equipo_local, setEquipo_local] = useState("");
    let [equipo_visitante, setEquipo_visitante] = useState("");
    let [fecha, setFecha] = useState("");
    let [fase, setFase] = useState("");
    let [hora, setHora] = useState("");
    let [lugar, setLugar] = useState("Complejo Libertadores");
    let [cuotaVisitante, setCuotaVisitante] = useState("");
    let [cuotaLocal, setCuotaLocal] = useState("");
    let [cuotaMas5Goles, setCuotaMas5Goles] = useState("");
    let [goles_local, setGoles_local] = useState(0);
    let [goles_visitante, setGoles_visitante] = useState(0);
    let [resultado, setResultado] = useState("Pendiente");
    let [cancha, setCancha] = useState("");

    const onClickAdd = () => {
        const partido: Partido = {
            id: idPartido,
            cuotaLocal: cuotaLocal,
            cuotaVisitante: cuotaVisitante,
            equipo_local: equipo_local,
            equipo_visitante: equipo_visitante,
            fase: fase,
            fecha: fecha,
            goles_local: goles_local,
            goles_visitante: goles_visitante,
            hora: hora,
            lugar: lugar,
            resultado: resultado,
            cuotaMas5Goles: cuotaMas5Goles,
            cancha: cancha,
        }
        addUpdateData(partido)
        setIdPartido = '';
    }

    const {equipos} =CrudEquipos();
    const fases = CrudFases().fases.map(f => f.name);

    return (
        <>
            <Dialog header="Fase" onHide={() => setVisible(false)} visible={visible} className="sm:w-12 lg:w-7 md:w-12">
                <div className="grid" >
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="equipoLocal">Equipo Local</label>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        {/*<InputText id="equipoLocal" onChange={(e) => setEquipo_local(e.target.value)} type="text"/>*/}
                        <Dropdown value={equipo_local} onChange={(e) => setEquipo_local(e.value)} options={equipos} optionLabel="name"
                                  placeholder="Seleccione un equipo" className="w-full md:w-14rem" />
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="equipoVisitante">Equipo Visitante</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputText id="equipoVisitante" onChange={(e) => setEquipo_visitante(e.target.value)}
                                   type="text"/>
                        </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="fase">Fase</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputText id="fase" onChange={(e) => setFase(e.target.value)} type="text"/>

                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="fecha">Fecha</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputText id="fecha" onChange={(e) => setFecha(e.target.value)} type="text"/>

                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="hora">Hora</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputText id="hora" onChange={(e) => setHora(e.target.value)} type="text"/>

                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="cancha">Cancha</label>
                        </div>
                    </div>
                    <div className="col-12  md:col-12 lg:col-3 text-center">
                        <InputText id="cancha" onChange={(e) => setCancha(e.target.value)} type="text"/>
                    </div>
                </div>
                <div style={{padding: 20}} className="card flex flex-wrap justify-content-center gap-2">
                    <Button label="Guardar" icon="pi pi-save" onClick={() => {
                        setVisible(false);
                        onClickAdd()
                    }}/>
                    <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)}
                            className="p-button-text"/>
                </div>
            </Dialog>
        </>
    )
}
