import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import FundoPagina from "componentes/FundoPagina";
import Markdown from "react-markdown";
import PaginaNaoEncontrada from "paginas/NaoEncontrada";
import { useEffect, useState } from "react";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));

    // Parte animação escrita do titulo
    const [titulo, setTitulo] = useState("");
    useEffect(() => {
        animarTexto(post.titulo, setTitulo);
    }, [post.titulo]);

    const animarTexto = (texto, setTexto) => {
        let index = 0;
        const intervalId = setInterval(() => {
            setTexto(texto.slice(0, index));
            index++;
            if (index > texto.length) {
                clearInterval(intervalId); // Parar assim que terminado
            }
        }, 20);
    }

    if (!post) {
        //O return interrompe a execução da função e retorna o JSX especificado.
        return (
            <PaginaNaoEncontrada />
        )
    }

    return (
        <FundoPagina
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={titulo}
        >
            <div className="post-markdown-container">
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </FundoPagina>
    )
}
