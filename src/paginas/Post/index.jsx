import { useParams } from "react-router-dom";
import styles from "./Post.module.css";
import posts from "json/posts.json";

export default function Post() {
    const parametros = useParams();
    const post = posts.find((post) => post.id == parametros.id);
    return (
        <>
            <h1>{post.titulo}</h1>
            <p>{post.texto}</p>
        </> 
    )
}