import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import FundoPagina from "componentes/FundoPagina";
import Markdown from "react-markdown";
import PaginaNaoEncontrada from "paginas/NaoEncontrada";
import { useEffect, useState } from "react";
import PostsRecomendados from "componentes/PostsRecomendados";

export default function Post() {
    const parametros = useParams();
    const postAtual = posts.find((post) => post.id === Number(parametros.id)); // Retorna primeiro elemento que atender a condição

    // Parte animação escrita do titulo
    const [titulo, setTitulo] = useState("");
    useEffect(() => {
        animarTexto(postAtual.titulo, setTitulo);
    }, [postAtual.titulo]);

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

    if (!postAtual) {
        //O return interrompe a execução da função e retorna o a PaginaNaoEncontrada.
        return (
            <PaginaNaoEncontrada />
        )
    }

    return (
        <FundoPagina
            fotoCapa={`/assets/posts/${postAtual.id}/capa.png`}
            titulo={titulo}
        >
            <div className="post-markdown-container">
                <Markdown>
                    {postAtual.texto}
                </Markdown>
            </div>
        <PostsRecomendados postAtual={postAtual}/>
        </FundoPagina>
    );
}
