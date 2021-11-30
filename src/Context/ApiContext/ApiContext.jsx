import { createContext, useEffect } from "react";
import { useState } from "react";
const API = "https://jsonplaceholder.typicode.com/photos"

const Context = createContext();

function Provider({ children }) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(`${API}?albumId=1`)
            .then((res) => res.json())
            .then((data) => setItems(data));
    }, []);

    return (
        <>
            <Context.Provider value={{items, setItems}}>
                {children}
            </Context.Provider>
        </>
    )
}

export { Context, Provider }