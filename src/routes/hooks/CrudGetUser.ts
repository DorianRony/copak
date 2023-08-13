import React from 'react'
import {collection, doc, getDocs, query, where} from "firebase/firestore";
import {Equipo} from "../interfaces/Equipo";
import {Firebase} from "../../database/Firebase";
import {User} from "../interfaces/User";

const {db} = Firebase();

export const CrudGetUser = () => {
    const getUser = async (userName: string, password: string) => {
        try {
            const q = query(collection(db, 'user'), where("userName", "==", userName),where("password", "==", password));

            const querySnapshot = await getDocs(q);
            const docs: User[] = []

            querySnapshot.forEach(doc => {
                docs.push({
                    id: doc.id,
                    name: doc.data().name,
                    password: "",
                    userName: doc.data().userName
                })
            });

            return docs[0];
        } catch (error) {
            console.log(error)
        }
    }

    return (
        getUser
    )
}
