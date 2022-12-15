import { useEffect } from "react";
import { useState ,createContext} from "react";

const FactorCnotext = createContext({
    pTala :0,
    setPTala:()=>{},
    maliat:0,
    setMaliat:()=>{},
    ezafi:0,
    setEzafi:()=>{},
    wTala:0,
    setWTala:()=>{},
    profit:0,
    setProfit:()=>{},
    ojrat:0,
    setOjrat:()=>{}
})

const FactorProvider =({children})=>{
    const [pTala,setPTala]= useState(0);
    const [maliat,setMaliat]= useState(9);
    const [ezafi,setEzafi]=useState(0);
    const [wTala,setWTala] =useState(1);
    const [profit,setProfit] = useState(7);
    const [ojrat , setOjrat] = useState(18);
    const val = {
        pTala ,
        setPTala,
        maliat,
        setMaliat,
        ezafi,
        setEzafi,
        wTala,
        setWTala,
        profit,
        setProfit,
        ojrat,
        setOjrat
    }

    return(
        <FactorCnotext.Provider value={val} >
            {children}
        </FactorCnotext.Provider>
    )
}

export {FactorCnotext , FactorProvider}