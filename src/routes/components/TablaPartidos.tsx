import PartidoDataView from "./PartidoPanel";
import {Panel} from "primereact/panel";
import React, {useState} from "react";
import {Button} from "primereact/button";
import {AddEditPartido} from "./addEditPartido";
import {Partido} from "../interfaces/Partido";
import {Equipo} from "../interfaces/Equipo";
import {Fase} from "../interfaces/Fase";
import {AddEditPartidoResult} from "./addEditPartidoResult";

export const TablaPartidos = ({partidos, equipos, fases}: { partidos: Partido[], equipos:Equipo[], fases:Fase[]}) => {
    const [visible, setVisible] = useState(false);
    const [idPartido, setIdPartido] = useState('');
    const button = <div>
        <Button style={{textAlign: "right"}} label="Agregar" icon="pi pi-plus" onClick={() => {setVisible(true); setIdPartido('')}}/></div>;

    return (
        <>
            <Panel header={button}>
                <h1>Partidos</h1>
                <PartidoDataView partidos={partidos}></PartidoDataView>
            </Panel>
            <AddEditPartido visible={visible} setVisible={setVisible} idPartido={idPartido} setIdPartido={setIdPartido} equipos={equipos} fases={fases}></AddEditPartido>
        </>
    )
}
