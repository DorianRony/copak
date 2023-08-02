import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {CrudEquipos} from "../hooks/CrudEquipos";

export const TablaPosciciones = () => {

    const {equipos} = CrudEquipos();


    return (
        <>
            <DataTable value={equipos} sortField={"puntos"}>
                <Column
                    body={(rowData, rowIndex) => rowIndex.rowIndex + 1}
                    header="#"
                    style={{textAlign: 'center'}}/>
                <Column field="name" header="Nombre"></Column>
                <Column field="partidosJugados" header="PJ"></Column>
                <Column field="partidosGanados" header="PG"></Column>
                <Column field="partidosEmpatados" header="PE"></Column>
                <Column field="partidosPerdidos" header="PP"></Column>
                <Column field="golesAFavor" header="GF"></Column>
                <Column field="golesEnContra" header="GC"></Column>
                <Column field="diferenciaDeGoles" header="GD"></Column>
                <Column field="puntos" header="Puntos"></Column>
            </DataTable>
        </>
    )
}
