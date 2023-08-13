import {MenuItem} from "primereact/menuitem";
import {Menubar} from "primereact/menubar";
import React, {useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import {UserContext} from "../context/UserContext";
import {Button} from "primereact/button";
import {User} from "../interfaces/User";
import {Logout} from "./Logout";

export const NavBar = () => {
    const userCons = useContext(UserContext);

    const cargarUser = () => {
        const savedUserJSON = localStorage.getItem('user');
        if (savedUserJSON) {
            const savedUser: User = JSON.parse(savedUserJSON)
            userCons?.setUser(savedUser);
            console.log(savedUser);
        } else {
            console.log("No se encontró ningún usuario en el localStorage.");
        }
    }

    const navigate = useNavigate();
    const start = <Link to="/">
        <img alt="logo" src="https://krugercorp.com/wp-content/uploads/2022/09/logo_kruger_.png" height="40"
             className="mr-2"></img>
    </Link>;
    const end =
        <>
            <Link to="/copak/login">
                <Button visible={!userCons?.user} label="Ingresar" icon="pi pi-sign-in"></Button>
            </Link>
            <Logout></Logout>
        </>;


    const items: MenuItem[] = [
        {
            label: 'Tabla Posciciones',
            icon: 'pi pi-fw pi-server',
            command: () => {
                navigate('/copak/Posciciones')
            }
        },
        {
            label: 'Partidos',
            icon: 'pi pi-fw pi-list',
            command: () => {
                navigate('/copak/Partidos')
            }
        },
        {
            label: 'Equipos',
            visible: !!userCons?.user,
            icon: 'pi pi-fw pi-user',
            command: () => {
                navigate('/copak/Equipos')
            }
        },
        {
            label: 'Fases',
            visible: !!userCons?.user,
            icon: 'pi pi-fw pi-user',
            command: () => {
                navigate('/copak/Fases')
            }
        },
    ];
    return (
        <>
            <div className="card">
                <Menubar onLoad={cargarUser} model={items} start={start} end={end}/>
            </div>
        </>
    )
}
