import React, {useRef, useState} from 'react'
import {Fase} from "../interfaces/Fase";
import {Partido} from "../interfaces/Partido";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {Equipo} from "../interfaces/Equipo";
import {Toast} from "primereact/toast";
import {Calendar} from "primereact/calendar";
import {CrudAddUpdatePartido} from "../hooks/crudAddUpdatePartido";
import moment from "moment";

interface OnChangeEquipoParams {
    e: any;
}

export const AddEditPartido = ({visible, setVisible, idPartido, setIdPartido, equipos, fases}: {
    visible: any,
    setVisible: any,
    idPartido: any,
    setIdPartido: any,
    equipos: Equipo[],
    fases: Fase[]
}) => {
    const toast = useRef<Toast>(null);
    const show = () => {
        toast.current?.show({severity: 'error', summary: 'Error', detail: 'No se puede enfrentar al mismo equipo'});
    };

    let [equipoLocal, setEquipoLocal] = useState<Equipo | null>();
    let [equipoVisitante, setEquipoVisitante] = useState<Equipo | null>();
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
    const crudAddUpdateData = CrudAddUpdatePartido();
    const onClickAdd = () => {
        const partido: Partido = {
            id: idPartido,
            cuotaLocal: cuotaLocal,
            cuotaVisitante: cuotaVisitante,
            equipo_local: equipoLocal ? equipoLocal.name : "",
            equipo_visitante: equipoVisitante ? equipoVisitante.name : "",
            fase: fase,
            fecha: fecha as Date,
            goles_local: goles_local,
            goles_visitante: goles_visitante,
            hora: hora,
            lugar: lugar,
            resultado: resultado,
            cuotaMas5Goles: cuotaMas5Goles,
            cancha: cancha,
            img_local: equipoLocal ? equipoLocal.img : "",
            img_visitante: equipoVisitante ? equipoVisitante.img : "",
        }
        crudAddUpdateData(partido)
        setIdPartido = '';
    }

    const onChangeEquipoLocal = (value : Equipo) => {
        if (equipoVisitante?.name === value.name) {
            show();
        } else {
            setEquipoLocal(value)
            /* setImgLocal(e.value.img)*/
        }
    }

    const onChangeEquipoVisitante = (value : Equipo) => {
        if (equipoLocal?.name === value.name) {
            show();
        } else {
            setEquipoVisitante(value)
            /*setImgVisitante(e.value.img)*/
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
                    <Dropdown value={equipoLocal} onChange={(e: DropdownChangeEvent) => onChangeEquipoLocal(e.value)} options={equipos} optionLabel="name"
                              placeholder="Seleccione un equipo" className="w-full md:w-14rem" />
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="equipoVisitante">Equipo Visitante</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <Dropdown value={equipoVisitante} onChange={(e: DropdownChangeEvent) => onChangeEquipoVisitante(e.value)}
                                  options={equipos} optionLabel="name"
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
