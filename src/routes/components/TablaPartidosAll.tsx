import {Panel} from "primereact/panel";
import React, {useContext, useEffect, useState} from "react";
import {Partido} from "../interfaces/Partido";
import {Equipo} from "../interfaces/Equipo";
import {Fase} from "../interfaces/Fase";
import PartidoPanelAll from "./PartidoPanelAll";
import {Dropdown, DropdownChangeEvent} from "primereact/dropdown";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";
import {AddEditPartido} from "./addEditPartido";
import {UserContext} from "../context/UserContext";

export const TablaPartidosAll = ({partidos, equipos, fases}: {
    partidos: Partido[],
    equipos: Equipo[],
    fases: Fase[]
}) => {
    const userCons = useContext(UserContext);
    const [checked, setChecked] = useState<boolean | undefined>(false);
    let [partidosFilter, setPartidosFilter] = useState<Partido[]>(partidos);
    const [equipoSelect, setEquipoSelect] = useState<string>();
    const [faseSelect, setFaseSelect] = useState<string>();

    const [visible, setVisible] = useState(false);
    const [idPartido, setIdPartido] = useState('');
    const button =
        <Button visible={!!userCons?.user} style={{textAlign: "right"}} label="Agregar" icon="pi pi-plus" onClick={() => {
            setVisible(true);
            setIdPartido('')
        }}/>;


    let equiposList = equipos.map(e => e.name);
    equiposList.unshift("Todos")
    let faseList = fases.map(f => f.name);
    faseList.unshift("Todos")

    const filterList = () => {
        let filteredPartidos = partidos;
        setPartidosFilter(partidos)

        if (equipoSelect && equipoSelect !== 'Todos') {
            filteredPartidos = filteredPartidos.filter((p) => p.equipo_local === equipoSelect || p.equipo_visitante === equipoSelect)
        }

        if (faseSelect && faseSelect !== 'Todos') {
            filteredPartidos = filteredPartidos.filter((p) => p.fase === faseSelect)
        }

        if (checked) {
            filteredPartidos = filteredPartidos.filter((p) => p.resultado === "Pendiente")
        }
        setPartidosFilter(filteredPartidos);
    }

    useEffect(() => {
        filterList()
    }, [partidos, equipoSelect, faseSelect, checked])

    return (
        <>
            <Panel header={<h1>Partidos</h1>}>
                {/*<div className="card flex justify-content-center">
                    <Dropdown value={selectedCity} onChange={(e: DropdownChangeEvent) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                              placeholder="Select a City" className="w-full md:w-14rem" />
                </div>*/}
                {/*<Calendar value={date} onChange={(e) => setDate(e.value)} />*/}

                <div className="flex align-items-start justify-content-center">
                    <div className="grid sm:col-12 md:col-12 lg:col-7">
                        <div className="col-12 md:col-3 lg:col-3">
                            <Checkbox id="checKclassName" onChange={e => setChecked(e.checked)}
                                      checked={checked ? checked : false}></Checkbox>
                            <label htmlFor="checKclassName" className="ml-2">Pendientes</label>
                        </div>
                        <div className="col-12 md:col-3 lg:col-3">
                            <Dropdown value={equipoSelect}
                                      onChange={(e: DropdownChangeEvent) => setEquipoSelect(e.value)}
                                      options={equiposList}
                                      optionLabel=""
                                      placeholder="Seleccione un equipo"/>
                        </div>
                        <div className="col-12 md:col-3 lg:col-3">
                            <Dropdown value={faseSelect} onChange={(e: DropdownChangeEvent) => setFaseSelect(e.value)}
                                      options={faseList}
                                      optionLabel=""
                                      placeholder="Selecccione Fase"/>
                        </div>
                        <div className="col-12 md:col-3 lg:col-3">
                            {button}
                        </div>
                    </div>
                </div>

                <PartidoPanelAll partidos={partidosFilter}></PartidoPanelAll>
            </Panel>
            <AddEditPartido visible={visible} setVisible={setVisible} idPartido={idPartido} setIdPartido={setIdPartido}
                            equipos={equipos} fases={fases}></AddEditPartido>
        </>
    )
}
