import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Equipo} from "../interfaces/Equipo";

export const TablaPosciciones = ({equipos}: { equipos: Equipo[] }) => {
    const imageBodyTemplate = (equipo: Equipo) => {
        return <div className="grid font-bold">
            <img src={equipo.img} alt={equipo.img} className="w-2rem shadow-2 border-round"/>
            <div className="p-1">{equipo.name}</div>
        </div>
    };
    return (
        <>
            <DataTable value={equipos} size={"small"} className={"text-xs sm:text-lg md:text-xl lg:text-xl"}>
                <Column
                    body={(rowData, rowIndex) => rowIndex.rowIndex + 1}
                    header="#"
                    style={{textAlign: 'center'}}/>
                <Column body={imageBodyTemplate} header="Nombre"></Column>
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
