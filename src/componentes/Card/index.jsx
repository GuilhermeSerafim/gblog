import { Link } from 'react-router-dom';
import styles from './Card.module.css';
import { useState } from 'react';

export default function Card({ post }) {
    const rolarParaCima = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Para uma rolagem suave
        });
    }

    let postPendente = post.subtitulo === "" ? "Em desenvolvimento" : post.subtitulo;
    const classePost = post.subtitulo === "" ? `${styles.post} ${styles.postPendente}` : styles.post;

    return (
        <Link 
            to={`/posts/${post.id}`}
            onClick={(() => {
                rolarParaCima();
            })}
        >
            <div className={classePost}>
                <img
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}
                    alt="Imagem de capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>
                <h3 className={styles.subtitulo}>{postPendente}</h3>
            </div>
        </Link>
    )
}
