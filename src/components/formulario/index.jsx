import { useState, useEffect } from "react"

const Formulario = () => {
    const [materiaA, setMateriA] = useState(0);
    const [materiaB, setMateriB] = useState(0);
    const [materiaC, setMateriC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() =>{
        console.log("o componente iniciou");

        return () => {
            console.log("o componente finalizou");
        }
    }, [])

    useEffect(() =>{
        console.log("o estado nome mudou");
    }, [nome]);

    useEffect(() =>{
        console.log("materia A mudou para:" + materiaA);
    }, [materiaA]);

    const alteraNome = (evento) =>{
        // setNome(evento.target.value);
        setNome(estadoAnterior => {

            return evento.target.value;
        })
    }

    const renderizaResultado = () =>{
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7){
            return (
                <p>Olá {nome}. Você foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome}. Você não foi aprovado</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu Nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota matéria A" onChange={({target}) => setMateriA(parseInt(target.value))} />
            <input type="number" placeholder="Nota matéria B" onChange={evento => setMateriB(parseInt(evento.target.value))} />
            <input type="number" placeholder="Nota matéria C" onChange={evento => setMateriC(parseInt(evento.target.value))} />
            {renderizaResultado()}
        </form>
    )
}

export default Formulario