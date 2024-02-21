import { Button } from "@mui/material";
import styles from "./PostsRecomendados.module.css";
import posts from "json/posts.json";
import Card from "componentes/Card";
export default function PostsRecomendados({ postAtual }) {
    const postsRecomendados = posts.filter((post) => post !== postAtual) // Todos os posts menos o atual
    .slice(0, 3)// Reduzindo a 3 post
    .sort((a, b) => b.id - a.id); // Ordenando descrescente

    return (
        <div className={styles.container}>
            <h1 >Posts recomendados</h1>
            {postsRecomendados.map((post) => (
                <Card post={post} />
            ))}
        </div>
    );
}