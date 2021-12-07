import React, {useState, useEffect,  createContext} from "react";
import { auth } from "../services/firebase"

export const UserContext = createContext({user: null})

export default function Provider() {
    const [user, setUser] = useState(null)
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            const { displayName, email }  = user;
            setUser({
                displayName,
                email
            })
        })
    },[])
    return (
        <UserContext.Provider value={user}>{this.props.children}</UserContext.Provider>
    )
}