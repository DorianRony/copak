import React, {useEffect, useRef, useState} from 'react'
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
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";

interface OnChangeEquipoParams {
    e: any;
}

export const AddEditPartidoResult = ({visible, setVisible, partido}: { visible: any, setVisible: any, partido: Partido }) => {
    const toast = useRef<Toast>(null);
    const show = () => {
        toast.current?.show({severity: 'error', summary: 'Error', detail: 'No se puede enfrentar al mismo equipo'});
    };

    let [goles_local, setGoles_local] = useState<number>(0);
    let [goles_visitante, setGoles_visitante] = useState(0);
    let [resultado, setResultado] = useState("Empate");

    const crudAddUpdateData = CrudAddUpdateData();
    const onClickAdd = () => {
        const partidoEdit: Partido = {
            id: partido.id,
            cuotaLocal: partido.cuotaLocal,
            cuotaVisitante: partido.cuotaVisitante,
            equipo_local: partido.equipo_local,
            equipo_visitante: partido.equipo_visitante,
            fase: partido.fase,
            fecha: partido.fecha as Date,
            goles_local: goles_local,
            goles_visitante: goles_visitante,
            hora: partido.hora,
            lugar: partido.lugar,
            resultado: resultado,
            cuotaMas5Goles: partido.cuotaMas5Goles,
            cancha: partido.cancha,
        }
        crudAddUpdateData(partidoEdit)
    }


    const onChangeResultado = () => {
        if(goles_local > goles_visitante){
            setResultado("Gana Local")
        }else if(goles_local < goles_visitante){
            setResultado("Gana Visitante")
        }else{
            setResultado("Empate")
        }
    }

    useEffect(() =>{
        onChangeResultado()
    },[goles_local, goles_visitante])

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
                        <div className="text-center p-3 border-round-sm font-bold">
                            <InputText disabled={true} value={partido.equipo_local} className={"col-12"}
                                       type="text"/>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="fase">Goles Local</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputNumber inputId="minmax-buttons" value={goles_local}
                                     onValueChange={(e: InputNumberValueChangeEvent) => setGoles_local(e.value??0)}
                                     mode="decimal" showButtons min={0} max={100} />

                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="equipoVisitante">Equipo Visitante</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <InputText disabled={true} value={partido.equipo_visitante} className={"col-12"}
                                       type="text"/>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="fecha">Goles Visitante</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputNumber inputId="minmax-buttons" value={goles_visitante}
                                     onValueChange={(e: InputNumberValueChangeEvent) => setGoles_visitante(e.value??0)}
                                     mode="decimal" showButtons min={0} max={100} />
                    </div>
                    <div className="col-12 md:col-12 lg:col-3">
                        <div className="text-center p-3 border-round-sm font-bold">
                            <label htmlFor="hora">Resultado</label>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-3 text-center">
                        <InputText disabled={true} value={resultado} className={"col-12"}
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
