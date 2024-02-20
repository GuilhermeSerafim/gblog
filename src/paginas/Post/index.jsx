import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import posts from "json/posts.json";
import SubPost from "componentes/SubPost";

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
                texto
            </SubPost>
        </> 
    )
}