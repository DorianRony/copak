import React, {useState} from 'react'
import {Column} from "primereact/column";
import {DataTable} from "primereact/datatable";
import {Button} from "primereact/button";
import {Panel} from "primereact/panel";
import {AddEditEquipo} from "./addEditEquipo";
import {Equipo} from "../interfaces/Equipo";

// @ts-ignore
export const TablaEquipos = ({equipos}: { equipos: Equipo[] }) => {
    const [visible, setVisible] = useState(false);
    const [idEquipo, setIdEquipo] = useState('');
    const button = <div>
        <Button style={{textAlign: "right"}} label="Agregar" icon="pi pi-plus" onClick={() => setVisible(true)}/></div>;
    return (
        <>
            <h1>Equipos</h1>
            <Panel header={button}>
                <DataTable value={equipos}>
                    <Column field="name" header="Nombre"></Column>
                    <Column field="descripcion" header="Descripción"></Column>
                </DataTable>
            </Panel>
            <AddEditEquipo visible={visible} setVisible={setVisible} idEquipo={idEquipo} setIdEquipo={setIdEquipo}></AddEditEquipo>
        </>
    )
}
