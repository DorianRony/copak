import React, {useState} from 'react'
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {CrudFases} from "../hooks/CrudFases";
import {CrudEquipos} from "../hooks/CrudEquipos";
import {Fase} from "../interfaces/Fase";
import {Equipo} from "../interfaces/Equipo";
import {CrudAddUpdateEquipo} from "../hooks/crudAddUpdateEquipo";

// @ts-ignore
export const AddEditEquipo = ({visible, setVisible, idEquipo, setIdEquipo}) => {
    let [nameEquipo, setNameEquipo] = useState("");
    let [descripcionEquipo, setDescripcionEquipo] = useState("");
    const addUpdateData = CrudAddUpdateEquipo();
    const onClickAdd = () => {
        const equipo : Equipo = {
            descripcion: descripcionEquipo,
            diferenciaDeGoles: 0,
            golesAFavor: 0,
            golesEnContra: 0,
            partidosEmpatados: 0,
            partidosGanados: 0,
            partidosJugados: 0,
            partidosPerdidos: 0,
            puntos: 0,
            id:idEquipo,
            img:"",
            name: nameEquipo}
        addUpdateData(equipo)
        setIdEquipo = '';
    }


    return (
        <Dialog header="Equipo" onHide={() => setVisible(false)} visible={visible} style={{width: 'auto'}}>
            <div className="flex-auto" >
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label htmlFor="nombreEquipo" className="w-10rem">
                        Nombre Equipo
                    </label>
                    <InputText id="Nombre Equipo" onChange={(e) => setNameEquipo(e.target.value)} style={{marginBottom:10}} type="text"/>
                </div>
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label htmlFor="descripcion" className="w-10rem">
                        Descripción
                    </label>
                    <InputText id="descripcion" onChange={(e) => setDescripcionEquipo(e.target.value)} type="text"/>
                </div>
            </div>
            <div style={{padding:20}} className="card flex flex-wrap justify-content-center gap-2">
                <Button label="Guardar" icon="pi pi-save" onClick={() => {setVisible(false);onClickAdd()}}/>
                <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)} className="p-button-text" />
            </div>
        </Dialog>
    )
}
