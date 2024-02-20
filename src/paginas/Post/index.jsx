import { useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import SubPost from "componentes/SubPost";
import ReactMarkdown from "react-markdown";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));
    console.log(parametros)
    return (
        <>
            <SubPost
                fotoCapa={`/assets/posts/${(post.id)}/capa.png`}
                titulo={post.titulo}
            >
                <div className="post-markdown-container">
                    <ReactMarkdown>
                        {post.texto}
                    </ReactMarkdown>
                </div>

            </SubPost>
        </>
    )
}