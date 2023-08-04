import React, {useRef, useState} from 'react'
import {Fase} from "../interfaces/Fase";
import {Partido} from "../interfaces/Partido";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import {Equipo} from "../interfaces/Equipo";
import {Toast} from "primereact/toast";
import {Calendar} from "primereact/calendar";
import {CrudAddUpdateData} from "../hooks/crudAddUpdateData";
import moment from "moment";

interface OnChangeEquipoParams {
    e: any;
}

export const AddEditPartido = ({visible, setVisible, idPartido, setIdPartido, equipos, fases}: { visible: any, setVisible: any, idPartido: any, setIdPartido: any, equipos: Equipo[], fases: Fase[] }) => {
    const toast = useRef<Toast>(null);
    const show = () => {
        toast.current?.show({severity: 'error', summary: 'Error', detail: 'No se puede enfrentar al mismo equipo'});
    };

    let [equipo_local, setEquipo_local] = useState("");
    let [equipo_visitante, setEquipo_visitante] = useState("");
    let [fecha, setFecha] = useState<string | Date | Date[] | undefined>('');
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
    const crudAddUpdateData = CrudAddUpdateData();
    const onClickAdd = () => {
        const partido: Partido = {
            id: idPartido,
            cuotaLocal: cuotaLocal,
            cuotaVisitante: cuotaVisitante,
            equipo_local: equipo_local,
            equipo_visitante: equipo_visitante,
            fase: fase,
            fecha: fecha as Date,
            goles_local: goles_local,
            goles_visitante: goles_visitante,
            hora: hora,
            lugar: lugar,
            resultado: resultado,
            cuotaMas5Goles: cuotaMas5Goles,
            cancha: cancha,
        }
        crudAddUpdateData(partido)
        setIdPartido = '';
    }

    const onChangeEquipoLocal = ({e}: OnChangeEquipoParams) => {
        if (equipo_visitante === e.value) {
            show();
        } else {
            setEquipo_local(e.value)
        }
    }

    const onChangeEquipoVisitante = ({e}: OnChangeEquipoParams) => {
        if (equipo_local === e.value) {
            show();
        } else {
            setEquipo_visitante(e.value)
        }
    }

    return (
        <>
            <Toast ref={toast}/>
            <Dialog header="Fase" onHide={() => setVisible(false)} visible={visible} className="sm:w-12 lg:w-7 md:w-12">
                <div className="grid">
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="equipoLocal">Equipo Local</label>
                        </div>
                    </div>

                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        {/*<InputText id="equipoLocal" onChange={(e) => setEquipo_local(e.target.value)} type="text"/>*/}
                        <Dropdown value={equipo_local} onChange={(e) => onChangeEquipoLocal({e: e})} options={equipos}
                                  optionLabel="name" optionValue={"name"}
                                  placeholder="Seleccione un equipo" className="w-full md:w-14rem"/>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="equipoVisitante">Equipo Visitante</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <Dropdown value={equipo_visitante} onChange={e => onChangeEquipoVisitante({e: e})}
                                  options={equipos} optionLabel="name" optionValue={"name"}
                                  placeholder="Seleccione un equipo" className="w-full md:w-14rem"/>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="fase">Fase</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <Dropdown value={fase} onChange={e => setFase(e.value)} options={fases} optionValue={"name"}
                                  optionLabel="name"
                                  placeholder="Seleccione una Fase" className="w-full md:w-14rem"/>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="fecha">Fecha</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <Calendar className={"col-12"} value={fecha} onChange={(e) => {
                            setFecha(e.value !== null ? e.value : "")
                        }}/>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="hora">Hora</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputText placeholder="hh:mm" className={"col-12"} id="hora"
                                   onChange={(e) => setHora(e.target.value)} type="text"/>

                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="cancha">Cancha</label>
                        </div>
                    </div>
                    <div className="col-12  md:col-12 lg:col-3 text-center">
                        <InputText className={"col-12"} id="cancha" onChange={(e) => setCancha(e.target.value)}
                                   type="text"/>
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
