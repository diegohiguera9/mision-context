import { useState, useEffect, useContext } from "react"
import { CountContext } from "./store/CountContext"



const Radio = () => {
    const[option,setOption] = useState('total')
    const[candidato,setCandidato] = useState({
        Diego: false,
        Ruben: false,
        Jhon: false,
        Sergio: false,
        Todos:false,
    })
    
    const Count = useContext(CountContext)    

    useEffect(()=>{
        Count.handleOption(option)
        Count.handleCandidato(candidato)
    },[option,candidato])

    return (
        <div>
            <div>
                <label htmlFor="porcentaje">Porcentaje</label>
                <input
                    type="radio"
                    id="porcentaje"
                    name="radio"
                    value="porcentaje"
                    onChange={(e)=>setOption(e.target.value)}
                />
            </div>

            <div>
                <label htmlFor="total">Total</label>
                <input
                    type="radio"
                    id="total"
                    name="radio"
                    value="total"
                    onChange={(e)=>setOption(e.target.value)}
                />
            </div>
            <span> Escoge candidato</span>
            <div>
                <label htmlFor="Diego">Diego</label>
                <input
                    type="checkbox"
                    id="Diego"
                    name="radio2"
                    value="Diego"
                    onChange={(e)=>setCandidato({...candidato,['Diego']:e.target.checked})}
                />
            </div>

            <div>
                <label htmlFor="Ruben">Ruben</label>
                <input
                    type="checkbox"
                    id="Ruben"
                    name="radio2"
                    value="Ruben"
                    onChange={(e)=>setCandidato({...candidato,['Ruben']:e.target.checked})}
                />
            </div>
            <div>
                <label htmlFor="John">John</label>
                <input
                    type="checkbox"
                    id="John"
                    name="radio2"
                    value="Jhon"
                    onChange={(e)=>setCandidato({...candidato,['Jhon']:e.target.checked})}
                />
            </div>
            <div>
                <label htmlFor="Sergio">Sergio</label>
                <input
                    type="checkbox"
                    id="Sergio"
                    name="radio2"
                    value="Sergio"
                    onChange={(e)=>setCandidato({...candidato,['Sergio']:e.target.checked})}
                />
            </div>
            <div>
            <label htmlFor="Todos">Todos</label>
                <input
                    type="checkbox"
                    id="Todos"
                    name="radio2"
                    value="Todos"
                    onChange={(e)=>setCandidato({...candidato,['Todos']:e.target.checked})}
                />
            </div>
        </div>
    )
}

export default Radio;