import {CrudPartidos} from "../hooks/CrudPartidos";
import PartidoDataView from "./PartidoPanel";
import {Panel} from "primereact/panel";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {AddEditFase} from "./addEditFase";
import {AddEditPartido} from "./addEditPartido";

export const TablaPartidos = () => {
    const {partidos} = CrudPartidos();
    const [visible, setVisible] = useState(false);
    const [idPartido, setIdPartido] = useState('');
    const button = <div>
        <Button style={{textAlign: "right"}} label="Agregar" icon="pi pi-plus" onClick={() => {setVisible(true); setIdPartido('')}}/></div>;

    return (
        <>
            <Panel header={button}>
                <h1>Partidos</h1>
                <PartidoDataView partidos={partidos ?? []}></PartidoDataView>
            </Panel>
            <AddEditPartido visible={visible} setVisible={setVisible} idPartido={idPartido} setIdPartido={setIdPartido}></AddEditPartido>
        </>
    )
}
