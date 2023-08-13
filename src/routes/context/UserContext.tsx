import {createContext, Dispatch, SetStateAction} from 'react'
import {User} from "../interfaces/User";

interface UserContextType {
    user: User | null;
    setUser: Dispatch<SetStateAction<User | null>>;
}

export const UserContext = createContext<UserContextType | null>(null);
