import { useNavigate, useParams } from "react-router-dom";
import "./Post.css";
import posts from "json/posts.json";
import SubPost from "componentes/SubPost";
import ReactMarkdown from "react-markdown";
import { Button } from "@mui/material";

export default function Post() {
    const navegar = useNavigate();
    const parametros = useParams();
    const post = posts.find((post) => post.id === Number(parametros.id));

    if (!post) {
        return (
            <div className="notfound__container">
                <h1>Post não encontrado</h1>
                <Button
                    variant="contained"
                    size="large"
                    style={{ padding: "15px 30px", borderRadius: "20px" }}
                    onClick={() => navegar(-1)}
                >
                    Voltar
                </Button>
            </div>

        )
    }

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