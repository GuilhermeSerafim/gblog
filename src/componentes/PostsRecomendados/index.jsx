import { Button } from "@mui/material";
import styles from "./PostsRecomendados.module.css";
import posts from "json/posts.json";
import Card from "componentes/Card";
export default function PostsRecomendados({ postAtual }) {
    const postsFiltrados = posts.filter((post) => post !== postAtual).slice(0, 3); // Slice para reduzir apenas a 3 post

    return (
        <div className={styles.container}>
            <h1 >Posts recomendados</h1>
            {postsFiltrados.map((post) => (
                <Card post={post} />
            ))}
        </div>
    )
}