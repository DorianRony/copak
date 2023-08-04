import React from 'react'
import {Partido} from "../interfaces/Partido";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {Firebase} from "../../database/Firebase";
const {db} = Firebase();

export const CrudAddUpdateData = () => {

    const addUpdateData = async (partido: Partido) => {
        try {
            if (partido.id === '') {
                await addDoc(collection(db, 'partido',), {...partido});
            } else {
                await setDoc(doc(db, 'partido', partido.id), {...partido});
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        addUpdateData
    )
}
