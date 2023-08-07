import {Fase} from "../interfaces/Fase";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {Firebase} from "../../database/Firebase";

const {db} = Firebase();
export const CrudAddUpdateFase = () => {
    const addUpdateData = async (fase: Fase) => {
        try {
            if (fase.id === '') {
                await addDoc(collection(db, 'fase',), {...fase});
            } else {
                await setDoc(doc(db, 'fase', fase.id), {...fase});
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        addUpdateData
    )
}
