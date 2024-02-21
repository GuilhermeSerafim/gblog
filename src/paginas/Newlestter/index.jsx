import styles from "./Newlestter.module.css";
import codando from "assets/codando.gif";

export default function Newlestter() {
    return (
        <div className={styles.dev}>
            <h1>Newlestter em desenvolvimento</h1>
            <img className={styles.dev__imagem} src={codando} alt="Em desenvolvimento" />
        </div>
    )
}