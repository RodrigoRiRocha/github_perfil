import { useState, useEffect } from "react";

const Formulario = () => {
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState('');

    useEffect(() => {
        console.log('O componente foi montado');
        return () => {
            console.log('O componente foi desmontado');
        };
    }, []);

    useEffect(() => {
        console.log('O estado mudou');
    }, [nome]);

    useEffect(() => {
        console.log('Mateira A mudou para: ' + materiaA);
    }, [materiaA, materiaB, materiaC]);

    const aleraNome = (evento) => {
        setNome(estadoAnterior => evento.target.value);
    };

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return <p> Olá {nome} Você foi aprovado</p>;
        } else {
            return <p> Olá {nome} Você não foi aprovado</p>;
        }
    };

    return (
        <form>
            <ul>
                {[1, 2, 3, 4, 5].map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Seu nome"
                onChange={aleraNome}
            />
            <input
                type="number"
                placeholder="Nota matéria A"
                onChange={({ target }) => setMateriaA(parseInt(target.value))}
            />
            <input
                type="number"
                placeholder="Nota matéria B"
                onChange={evento => setMateriaB(parseInt(evento.target.value))}
            />
            <input
                type="number"
                placeholder="Nota matéria C"
                onChange={evento => setMateriaC(parseInt(evento.target.value))}
            />
            {renderizaResultado()}
        </form>
    );
};

export default Formulario;