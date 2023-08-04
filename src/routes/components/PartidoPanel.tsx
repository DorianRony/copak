import React, {Fragment, useState} from 'react';
import {DataView} from "primereact/dataview";
import {Partido} from "../interfaces/Partido";
import {Button} from "primereact/button";
import {Badge} from "primereact/badge";
import {Panel, PanelHeaderTemplateOptions} from "primereact/panel";
import {Ripple} from "primereact/ripple";
import {AddEditPartidoResult} from "./addEditPartidoResult";

export default function PartidoDataView({partidos}: { partidos: Partido[] }) {

    const [visible, setVisible] = useState(false);

    const getSeverityLocal = (partido: Partido) => {
        if (partido.goles_local > partido.goles_visitante) {
            return 'success';
        } else if (partido.goles_local < partido.goles_visitante) {
            return 'danger';
        } else {
            return 'warning';
        }
    };

    const getSeverityVisitante = (partido: Partido) => {
        if (partido.goles_local < partido.goles_visitante) {
            return 'success';
        } else if (partido.goles_local > partido.goles_visitante) {
            return 'danger';
        } else {
            return 'warning';
        }
    };

    const itemTemplate = (partido: Partido) => {

        const resultado =
            <div className="sm:col-1 md:col-10 lg:col-10 grid">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div>
                        {partido.equipo_local}
                    </div>
                    <div>
                        <Badge size="normal" value={partido.goles_local}
                               severity={getSeverityLocal(partido)}></Badge>
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        {partido.equipo_visitante}
                    </div>
                    <div>
                        <Badge size="normal" value={partido.goles_visitante}
                               severity={getSeverityVisitante(partido)}></Badge>
                    </div>
                </div>
            </div>

        const header =
            <>
                <div>
                    <Button icon="pi pi-plus" size="small"
                            onClick={() => setVisible(true)}
                            visible={partido.resultado === "Pendiente"}
                            label={"Resultado"}></Button>
                    <AddEditPartidoResult visible={visible} setVisible={setVisible} partido={partido}></AddEditPartidoResult>
                </div>
            </>

        const headerExpand =
            <div className="sm:col-1 md:col-10 lg:col-10 grid">
                <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                    <div>
                        {partido.fase}
                    </div>
                    <div>
                        -
                    </div>
                    <div>
                        {partido.resultado}
                    </div>
                </div>
            </div>
        const template = (options: PanelHeaderTemplateOptions) => {
            const toggleIcon = options.collapsed ? 'pi pi-chevron-down' : 'pi pi-chevron-up';
            const className = `${options.className} justify-content-start`;
            const titleClassName = options.collapsed ? `${options.className}`
                : `${options.className} ml-12 text-primary`;
            const resultadoPartido = options.collapsed ? resultado : headerExpand;

            return (
                <div className={className}>
                    <button className={options.togglerClassName} onClick={options.onTogglerClick}>
                        <span className={toggleIcon}></span>
                        <Ripple/>
                    </button>
                    <div className={titleClassName + " col-10 sm-col-1"}>
                        {resultadoPartido} {header}
                    </div>
                </div>
            );
        };

        return (
            <>
                <Panel headerTemplate={template} className="col-12" toggleable>
                    <div className="grid sm:col-1 md:col-12 lg:col-12">
                        <div className="col">
                            <strong>Fecha: </strong>
                            {partido.fecha.toLocaleDateString("en-US")}
                        </div>
                        <div className="col">
                            <strong>Lugar: </strong>
                            {partido.lugar}
                        </div>
                        <div className="col">
                            <strong>Hora: </strong>
                            {partido.hora}
                        </div>
                        <div className="col">
                            <strong>Resultado: </strong>
                            {partido.resultado}
                        </div>
                        <div className="col">
                            <strong>Fase: </strong>
                            {partido.fase}
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="flex flex-column xl:flex-row xl:align-items-start p-4 gap-4">
                            <div
                                className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                                <div className="font-bold">
                                    {partido.equipo_local}
                                </div>
                                <div className="font-bold">
                                    <Badge size="large" value={partido.goles_local}
                                           severity={getSeverityLocal(partido)}></Badge>
                                </div>
                                <div className="font-bold">
                                    {partido.equipo_visitante}
                                </div>
                                <div className="font-bold">
                                    <Badge size="large" value={partido.goles_visitante}
                                           severity={getSeverityVisitante(partido)}></Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </Panel>
            </>
        );
    };

    return (
        <>
            <div className="card">
                <DataView value={partidos} itemTemplate={itemTemplate}/>
            </div>
        </>
    )
};

