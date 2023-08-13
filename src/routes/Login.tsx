import React, {useContext, useRef, useState} from 'react'
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {CrudGetUser} from "./hooks/CrudGetUser";
import {UserContext} from "./context/UserContext";
import {Toast} from "primereact/toast";
import {Logout} from "./components/Logout";
import {Link} from "react-router-dom";

export const Login = () => {
    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const toast = useRef<Toast>(null);

    const userContextType = useContext(UserContext);

    const getUser = CrudGetUser();
    const login = async () => {
        const user = await getUser(userName, password);
        console.log(user);
        if (user) {
            userContextType?.setUser(user);
            localStorage.setItem("user", JSON.stringify(user))
            toast.current?.show({severity: 'success', summary: 'Success', detail: 'Ingreso correctamente sesión'});
        } else {
            toast.current?.show({severity: 'error', summary: 'Error', detail: 'Error al ingresar'});
        }
    }

    return (
        <>
            <Toast ref={toast}/>
            <div className="w-full md:w-5 flex flex-column align-items-s justify-content-center gap-3 py-5">
                <div className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label hidden={!!userContextType?.user} htmlFor="username" className="w-6rem">
                        Username
                    </label>
                    <InputText hidden={!!userContextType?.user} id="username" value={userName}
                               onChange={e => setUserName(e.target.value)} type="text"/>
                </div>
                <div hidden={!!userContextType?.user}
                     className="flex flex-wrap justify-content-center align-items-center gap-2">
                    <label hidden={!!userContextType?.user} htmlFor="password" className="w-6rem">
                        Password
                    </label>
                    <InputText hidden={!!userContextType?.user} id="password" type="password" value={password}
                               onChange={e => setPassword(e.target.value)}/>
                </div>
                <Link className="w-10rem mx-auto" to="/copak/">
                    <Button visible={!userContextType?.user} label="Ingresar" onClick={e => login()} icon="pi pi-user"
                            className="w-10rem mx-auto"></Button>
                </Link>
            </div>
        </>
    )
}
