import { Outlet } from "react-router-dom";
import styles from "./Banner.module.css";
import React, { useEffect, useState } from "react";
import gatinhoAstronauta from "assets/gatinhoAstronauta.jpg"

export default function Banner() {
    const [tituloTexto, setTituloTexto] = useState("");
    const [paragrafoTexto, setParagrafoTexto] = useState("");

    // O useEffect é executado após a montagem do componente (componentDidMount) 
    // E sempre que alguma das dependências especificadas no array de dependências for alterada (componentDidUpdate).
    useEffect(() => {
        const titulo = "Bem-vindo ao Glestter";
        const paragrafo = "Aqui você será como um verdadeiro explorador, desbravando os territórios desconhecidos da inteligência artificial, mergulhando nas profundezas da mente humana e contemplando os mistérios do universo. Prepare-se para uma viagem além da imaginação, onde cada descoberta é uma porta para o futuro.";

        animarTexto(titulo, setTituloTexto);
        animarTexto(paragrafo, setParagrafoTexto);
    }, []);

    const animarTexto = (texto, setTexto) => {
        let index = 0;
        const intervalId = setInterval(() => {
            setTexto(texto.slice(0, index));
            index++;
            if (index > texto.length) {
                clearInterval(intervalId); // Parar assim que terminado
            }
        }, 20);
    };

    return (
        <main>
            <div className={styles.banner}>
                <div className={styles.apresentacao}>
                    <h1 className={styles.titulo}>
                        {tituloTexto}
                    </h1>
                    <p className={styles.paragrafo}>
                        {paragrafoTexto}
                    </p>
                </div>
                <div className={styles.imagens}>
                    <img
                        className={styles.gatinhoAstronauta}
                        src={gatinhoAstronauta}
                        alt="Minha foto"
                        aria-hidden={true}
                    />
                </div>
            </div>
            <Outlet />
        </main>
    )
}
