import {createContext, useContext, useEffect, useState} from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from "../firebase.jsx";


const UserContext = createContext(null)

export const UserProvider = ({children}) => {
const [user, setUser] = useState(null);


useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user)
        } else {
            setUser(null)
        }
    });

},[])

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    )
};

export const useUser = ()=> useContext(UserContext)

