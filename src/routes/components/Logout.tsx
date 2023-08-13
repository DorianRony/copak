import React, {useContext, useRef} from 'react'
import {Button} from "primereact/button";
import {UserContext} from "../context/UserContext";
import {Toast} from "primereact/toast";

export const Logout = () => {
    const userContextType = useContext(UserContext);
    const toast = useRef<Toast>(null);
    const logout = async () => {
        userContextType?.setUser(null);
        localStorage.removeItem("user")
        toast.current?.show({severity: 'success', summary: 'Success', detail: 'Se cerro la sesión'});
    }
    return (
        <div className="grid p-2">
            <Toast ref={toast}/>
            <label hidden={!userContextType?.user} htmlFor="username" className="w-6rem">
                Bienvenido, {userContextType?.user?.name}
            </label>
            <Button visible={!!userContextType?.user}
                    label="Salir" onClick={e => logout()} icon="pi pi-sign-out"></Button>
        </div>
    )
}
