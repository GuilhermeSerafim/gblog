import styles from './Card.module.css';

export default function Card({ post }) {
    return (
        <div className={styles.post}>
            <img
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}
                alt="Imagem de capa do post"
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>
            <h3 className={styles.subtitulo}>teste</h3>
        </div>
    )
}