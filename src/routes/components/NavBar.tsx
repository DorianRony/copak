import {MenuItem} from "primereact/menuitem";
import {Menubar} from "primereact/menubar";
import React from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";

export const NavBar = () => {

    const navigate = useNavigate();
    const start = <Link to="/">
        <img alt="logo" src="https://krugercorp.com/wp-content/uploads/2022/09/logo_kruger_.png" height="40" className="mr-2"></img>
    </Link>;
    const items: MenuItem[] = [
        {
            label: 'Tabla Posciciones',
            icon: 'pi pi-fw pi-server',
            command:() => {navigate('/Posciciones') }
        },
        {
            label: 'Partidos',
            icon: 'pi pi-fw pi-list',
            command:() => {navigate('/Partidos') }
        }
    ];
    return (
        <>
            <div className="card">
                <Menubar model={items} start={start}/>
            </div>
        </>
    )
}
