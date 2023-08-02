import React from 'react';
import {DataView} from "primereact/dataview";
import {Partido} from "../interfaces/Partido";
import {Tag} from "primereact/tag";

export default function PartidoDataView({partidos}: { partidos: Partido[] }) {

    const getSeverityLocal = (partido: Partido) => {
        if (partido.goles_local > partido.goles_visitante){
            return 'success';
        }else if(partido.goles_local < partido.goles_visitante){
            return 'danger';
        }else{
            return 'warning';
        }
    };

    const getSeverityVisitante = (partido: Partido) => {
        if (partido.goles_local < partido.goles_visitante){
            return 'success';
        }else if(partido.goles_local > partido.goles_visitante){
            return 'danger';
        }else{
            return 'warning';
        }
    };

    const itemTemplate = (partido: Partido) => {
        return (
            <>
                <div>
                    <div>
                        <strong>Fecha: </strong>
                        {partido.fecha}
                    </div>
                    <div>
                        <strong>Lugar: </strong>
                        {partido.lugar}
                    </div>
                    <div>
                        <strong>Hora: </strong>
                        {partido.hora}
                    </div>
                    <div>
                        <strong>Resultado: </strong>
                        {partido.resultado}
                    </div>
                    <div>
                        <strong>Fase: </strong>
                        {partido.fase}
                    </div>
                </div>
                <div className="col-12">
                    <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                        <div
                            className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                            <div className="text-1xl font-bold text-900">
                                {partido.equipo_local}
                            </div>
                            <div className="text-1xl font-bold text-900">
                                <Tag value={partido.goles_local} severity={getSeverityLocal(partido)}></Tag>
                            </div>
                            <div className="text-1xl font-bold text-900">
                                {partido.equipo_visitante}
                            </div>
                            <div className="text-1xl font-bold text-900">
                                <Tag value={partido.goles_visitante} severity={getSeverityVisitante(partido)}></Tag>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };

    return (
        <div className="card">
            <DataView value={partidos} itemTemplate={itemTemplate}/>
        </div>
    )
};

