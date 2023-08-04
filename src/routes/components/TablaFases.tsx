import React, {useState} from 'react'
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Button} from "primereact/button";
import {AddEditFase} from "./addEditFase";
import {Fase} from "../interfaces/Fase";

export const TablaFases = ({fases}: { fases: Fase[] }) => {
    const [visible, setVisible] = useState(false);
    const [idFase, setIdFase] = useState('');
    const button = <div>
        <Button style={{textAlign: "right"}} label="Agregar" icon="pi pi-plus" onClick={() => {setVisible(true); setIdFase('')}}/></div>;
    return (
        <>
            <DataTable value={fases} header={button}>
                <Column
                    body={(rowData, rowIndex) => rowIndex.rowIndex + 1}
                    header="#"
                    style={{textAlign: 'center', width: 50}}/>
                <Column field="name" header="Name"></Column>
                <Column body={
                    (rowData, rowIndex) =>
                        <Button style={{textAlign: "right"}} label="Editar" icon="pi pi-pencil"
                                onClick={() => {
                                    setVisible(true)
                                    console.log(rowData.id)
                                    setIdFase(rowData.id)
                                }}/>
                } header="Name"></Column>
            </DataTable>
            <AddEditFase visible={visible} setVisible={setVisible} idFase={idFase} setIdFase={setIdFase}></AddEditFase>
        </>
    )
}
