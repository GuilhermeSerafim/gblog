import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import SubPost from "componentes/SubPost";
import ReactMarkdown from "react-markdown";
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
        <SubPost
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkdown>
                    {post.texto}
                </ReactMarkdown>
            </div>
        </SubPost>
    )
}
