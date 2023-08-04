import React, {useState} from 'react'
import {Fase} from "../interfaces/Fase";
import {CrudFases} from "../hooks/CrudFases";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Dialog} from "primereact/dialog";
import {CrudAddUpdateFase} from "../hooks/crudAddUpdateFase";

// @ts-ignore
export const AddEditFase = ({visible, setVisible, idFase, setIdFase}) => {
    const addUpdateFase =CrudAddUpdateFase();
    let [namefase, setNameFase] = useState("");
    const onClickAdd = () => {
        const fase : Fase = {id:idFase, name: namefase}
        addUpdateFase(fase)
        setIdFase = '';
    }

    return (
        <>
            <Dialog header="Fase" onHide={() => setVisible(false)} visible={visible} style={{width: 'auto'}}>
                <div className="flex-auto">
                    <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                        <label htmlFor="nombreEquipo" className="w-10rem">
                            Nombre Fase
                        </label>
                        <InputText id="Nombre Equipo" onChange={(e) => setNameFase(e.target.value)} style={{marginBottom: 10}} type="text"/>
                    </div>
                </div>
                <div style={{padding: 20}} className="card flex flex-wrap justify-content-center gap-2">
                    <Button label="Guardar" icon="pi pi-save" onClick={() => {setVisible(false);onClickAdd()}}/>
                    <Button label="Cancelar" icon="pi pi-times" onClick={() => setVisible(false)}
                            className="p-button-text"/>
                </div>
            </Dialog>
        </>
    )
}
