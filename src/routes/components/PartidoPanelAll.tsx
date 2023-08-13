import React, {Fragment, useContext, useState} from 'react';
import {DataView} from "primereact/dataview";
import {Partido} from "../interfaces/Partido";
import {Panel} from "primereact/panel";
import {Button} from "primereact/button";
import {AddEditPartidoResult} from "./addEditPartidoResult";
import {UserContext} from "../context/UserContext";

export default function PartidoPanelAll({partidos}: { partidos: Partido[] }) {

    const [visible, setVisible] = useState(false);
    const [partidoDialog, setPartidoDialog] = useState<Partido>();
    const userCons = useContext(UserContext);
    const getSeverityLocal = (partido: Partido) => {
        if (partido.resultado === "Pendiente") {
            return '';
        }
        if (partido.goles_local > partido.goles_visitante) {
            return 'bg-green-500 text-0';
        } else if (partido.goles_local < partido.goles_visitante) {
            return 'bg-red-500 text-0';
        } else {
            return 'bg-primary text-0';
        }
    };

    const getSeverityVisitante = (partido: Partido) => {
        if (partido.resultado === "Pendiente") {
            return '';
        }

        if (partido.goles_local < partido.goles_visitante) {
            return 'bg-green-500 text-0';
        } else if (partido.goles_local > partido.goles_visitante) {
            return 'bg-red-500 text-0';
        } else {
            return 'bg-primary text-0';
        }
    };

    const itemTemplate = (partido: Partido) => {
        return (
            <>
                <Panel className="col-12 border-top-1">
                    <div className="grid">
                        <div className="grid lg:col-6 col-12">
                            <div className="font-bold grid lg:col-6 col-12">
                                <img src={partido.img_local} alt={partido.img_local}
                                     className="w-2rem shadow-2 border-round"/>
                                <div className="p-1">{partido.equipo_local}</div>
                            </div>
                            <div
                                className={`${getSeverityLocal(partido)} text-center border-round-sm font-bold lg:col-6 col-12`}>
                                {partido.resultado === "Pendiente" ? "-" : partido.goles_local}
                            </div>
                        </div>
                        <div className="grid lg:col-6 col-12">
                            <div className="font-bold grid lg:col-6 col-12">
                                <img src={partido.img_visitante} alt={partido.img_visitante}
                                     className="w-2rem shadow-2 border-round"/>
                                <div className="p-1">{partido.equipo_visitante}</div>
                            </div>
                            <div className={`${getSeverityVisitante(partido)} 
                                text-center border-round-sm font-bold lg:col-6 col-12`}>
                                {partido.resultado === "Pendiente" ? "-" : partido.goles_visitante}
                            </div>
                        </div>
                    </div>
                    <div className="grid">
                        <div className="col-6 lg:col-3">
                            <strong>Fecha: </strong>
                            {partido.fecha.toLocaleDateString("en-US")}
                        </div>
                        <div className="col-6 lg:col-3">
                            <strong>Hora: </strong>
                            {partido.hora}
                        </div>
                        <div className="col-6 lg:col-3">
                            <strong>Resultado: </strong>
                            {partido.resultado}
                        </div>
                        <div className="col-6 lg:col-3">
                            <strong>Fase: </strong>
                            {partido.fase}
                        </div>
                        <Button icon="pi pi-plus" size="small" visible={!!userCons?.user}
                                onClick={() => {setVisible(true); setPartidoDialog(partido);}}
                            // visible={partido.resultado === "Pendiente"}
                                label={"Resultado"}></Button>
                    </div>
                </Panel>
            </>
        );
    };

    return (
        <div className="flex align-items-center justify-content-center">
            <div className="card xs:col-12 sm:col-12 md:col-12 lg:col-8">
                <DataView value={partidos} itemTemplate={itemTemplate}/>
            </div>
            <AddEditPartidoResult visible={visible} setVisible={setVisible}
                                  partido={partidoDialog}></AddEditPartidoResult>
        </div>
    )
};

