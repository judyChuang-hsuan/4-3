import React,{useContext,useState} from "react";

const AppContext=React.createContext();

const AppProvider=({children})=>{
    const [text,setText]=useState("");
    return <AppContext.Provider value={{text,setText}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider};