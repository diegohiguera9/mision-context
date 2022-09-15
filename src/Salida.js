import { useContext } from "react";
import { CountContext } from "./store/CountContext"

const Salida = () => {
    const outData = useContext(CountContext)
    const salida = outData.outfinal
    const candidatoselect = outData.optioncandidato
    const values = Object.values(salida)
    const keys = Object.keys(salida)

    return (
        <div className="totales">
            {`El total de votos es ${outData.outtotal}`}
            
            {values.map((item, index) => {
                return (
                    candidatoselect.Todos ? (
                        <div className="salida" key={index}>
                            {`${item} ${outData.optionradio} votos para el candidato ${keys[index]}`}
                        </div>
                    ) :(
                        candidatoselect[keys[index]] ? (
                            <div className="salida" key={index}>
                                {`${item} ${outData.optionradio} votos para el candidato ${keys[index]}`}
                            </div>
                        ) : <></>
                    )
                )
            })}

            {/* {values.map((item, index) => {
                return (
                    candidatoselect.Todos ? (
                        <div key={index}>
                            {`${item} ${outData.optionradio} votos para el candidato ${keys[index]}`}
                        </div>
                    ) : (
                        candidatoselect.key[index] ? (
                            <div key={index}>
                                {`${item} ${outData.optionradio} votos para el candidato ${keys[index]}`}
                            </div>
                        ) : <></>
                    )
                )
            })} */}
        </div>
    )
}

export default Salida;