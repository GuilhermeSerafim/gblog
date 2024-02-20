import styles from "./Inicio.module.css";
import posts from "json/posts.json";
import Card from "componentes/Card";

export default function Inicio() {
    return (
            <ul className={styles.posts}>
                {posts.map(post => (
                    <li key={post.id}>
                        <Card post={post} />
                    </li>
                ))}
            </ul>
    )
}   
