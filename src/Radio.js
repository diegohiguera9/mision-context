import { useState, useEffect, useContext } from "react";
import { CountContext } from "./store/CountContext";

const Radio = () => {
  const [option, setOption] = useState("total");
  const [candidato, setCandidato] = useState({
    Diego: false,
    Ruben: false,
    Jhon: false,
    Sergio: false,
    Todos: true,
  });

  const Count = useContext(CountContext);

  useEffect(() => {
    Count.handleOption(option);
    Count.handleCandidato(candidato);
  }, [option, candidato]);

  const handleClick = (who, check) => {
    console.log(`who:${who}, ev:${check}`)
    if (who === "Todos") {
      setCandidato({
        Diego: false,
        Ruben: false,
        Jhon: false,
        Sergio: false,
        Todos: true,
      })
    } else {
      setCandidato({ ...candidato, [who]: check, ["Todos"]: false })
    }
  }

  return (
    <div className="sectionsFlex">
      <div className="options">
        <div>
          <label htmlFor="porcentaje">Porcentaje</label>
          <input
            type="radio"
            id="porcentaje"
            name="radio"
            value="porcentaje"
            onChange={(e) => setOption(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="total">Total</label>
          <input
            type="radio"
            id="total"
            name="radio"
            value="total"
            onChange={(e) => setOption(e.target.value)}
          />
        </div>
      </div>
      <div className="candidatosFlex">
        <span> Escoge candidato</span>
        <div>
          <label htmlFor="Diego">Diego</label>
          <input
            type="checkbox"
            id="Diego"
            name="radio2"
            value="Diego"
            checked={candidato.Diego}
            onChange={(e) =>
              handleClick("Diego", e.target.checked)
            }
          />
        </div>

        <div>
          <label htmlFor="Ruben">Ruben</label>
          <input
            type="checkbox"
            id="Ruben"
            name="radio2"
            value="Ruben"
            checked={candidato.Ruben}
            onChange={(e) =>
              handleClick("Ruben", e.target.checked)
            }
          />
        </div>
        <div>
          <label htmlFor="John">John</label>
          <input
            type="checkbox"
            id="John"
            name="radio2"
            value="Jhon"
            checked={candidato.Jhon}
            onChange={(e) =>
              handleClick("Jhon", e.target.checked)
            }
          />
        </div>
        <div>
          <label htmlFor="Sergio">Sergio</label>
          <input
            type="checkbox"
            id="Sergio"
            name="radio2"
            value="Sergio"
            checked={candidato.Sergio}
            onChange={(e) =>
              handleClick("Sergio", e.target.checked)
            }
          />
        </div>
        <div>
          <label htmlFor="Todos">Todos</label>
          <input
            type="checkbox"
            id="Todos"
            name="radio2"
            value="Todos"
            checked={candidato.Todos}
            onChange={(e) =>
              handleClick("Todos", e.target.checked)
            }
          />
        </div>
      </div>

    </div>
  );
};

export default Radio;
