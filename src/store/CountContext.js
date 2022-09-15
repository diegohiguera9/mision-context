
import { useState, createContext, useEffect } from "react";

export const CountContext = createContext();

export const CountProvider = ({ children }) => {
    const [total, setTotal] = useState({
        Diego: 0,
        Ruben: 0,
        Jhon: 0,
        Sergio: 0,
    })
    const [porcentaje, setPorcentaje] = useState({
        Diego: 0,
        Ruben: 0,
        Jhon: 0,
        Sergio: 0,
    })
    const [optionradio, setOptionradio] = useState('')
    const [optioncandidato, setOptioncandidato] = useState({})
    const [outtotal, setOuttotal] = useState(0)
    const [outfinal,setOutfinal] = useState({})

    const handleTotal = (name, count) => {
        setTotal({
            ...total,
            [name]: count
        })
    }

    const handleOption = (option) => {
        setOptionradio(option)
    }

    const handleCandidato = (option)=>{
        setOptioncandidato(option)
    }

    const suma = (obj) => {
        let sum = Object.values(obj).reduce((prev, curr) => {
            return (prev + curr)
        })
        setOuttotal(sum)
    }

    const typeout = (obj, suma) => {
        const values = Object.values(obj)
        const keys = Object.keys(obj)

        values.map((item, index) => {
            return(
                setPorcentaje(prev=>{
                    return {...prev,[keys[index]]:item/suma*100}
                })
            )
        })

    }

    const finalOut = ()=>{
        switch (optionradio){
            case 'porcentaje':
                setOutfinal(porcentaje)
                break;
            case 'total':
                setOutfinal(total)
                break;
            default:
                setOutfinal(total)
        }
    }

    useEffect(() => {
        console.log(total)
        console.log(optionradio)
        suma(total)
    }, [total, optionradio])

    useEffect(() => {
        typeout(total, outtotal)
    }, [outtotal])

    useEffect(()=>{
        finalOut()
        console.log(outfinal)
    },[porcentaje,optionradio])

    return (
        <CountContext.Provider
            value={{
                total,
                handleTotal,
                handleOption,
                handleCandidato,
                outtotal,
                porcentaje,
                optionradio,
                outfinal,
                optioncandidato
            }}
        >
            {children}
        </CountContext.Provider>
    )

}