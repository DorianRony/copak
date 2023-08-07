import {Equipo} from "../interfaces/Equipo";
import {addDoc, collection, doc, setDoc} from "firebase/firestore";
import {Firebase} from "../../database/Firebase";
const {db} = Firebase();
export const CrudAddUpdateEquipo = () => {

    const addUpdateData = async (equipo: Equipo) => {
        try {
            if(equipo.id === ''){
                await addDoc(collection(db, 'equipo',), {...equipo});
            }else{
                await setDoc(doc(db, 'equipo',equipo.id), {...equipo});
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        addUpdateData
    )
}
