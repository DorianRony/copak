import React, {useState} from 'react'
import {User} from "../interfaces/User";
import {UserContext} from "./UserContext";

// @ts-ignore
export const UserProvider = ({children}) => {

    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
