import { useState, useEffect, useContext } from "react"
import { CountContext } from "./store/CountContext"

const Button = ({ name }) => {
    const [count, setCount] = useState(0)
    const Count = useContext(CountContext)

    useEffect(()=>{
        Count.handleTotal(name,count)
    },[count])
    return (
        <div>
            <button
            onClick={()=>setCount((prevcount)=>prevcount+1)}
            >
                {`Votar por candidato ${name} votos: ${count}`}
            </button>
        </div>
    )
}

export default Button