import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import FundoPagina from "componentes/FundoPagina";
import Markdown from "react-markdown";
import PaginaNaoEncontrada from "paginas/NaoEncontrada";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));

    if (!post) {
        //O return interrompe a execução da função e retorna o JSX especificado.
        return (
            <PaginaNaoEncontrada />
        )
    }

    return (
        <FundoPagina
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <Markdown>
                    {post.texto}
                </Markdown>
            </div>
        </FundoPagina>
    )
}
