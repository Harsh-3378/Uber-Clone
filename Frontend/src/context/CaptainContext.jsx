import { useState } from "react";
import CaptainDataContext from "../contextData/CaptainDataContext";

const CaptainContext = ({children})=>{

    const [captain, setCaptain] = useState({});

    return (
        <CaptainDataContext.Provider value={{captain, setCaptain}}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext;