import { useState } from "react";
import CaptainDataContext from "../contextData/CaptainDataContext";

const CaptainContext = ({children})=>{

    const [captainData, setCaptainData] = useState({});

    return (
        <CaptainDataContext.Provider value={{captainData, setCaptainData}}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext;