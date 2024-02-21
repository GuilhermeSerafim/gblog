import Markdown from "react-markdown";
import styles from "./Newlestter.module.css";

export default function Newlestter() {
    return (
        <div className={styles.dev}>
            <h1>Newlestter em desenvolvimento</h1>
            <img className={styles.dev__imagem} src="https://media1.giphy.com/media/qgQUggAC3Pfv687qPC/giphy.gif" alt="Em desenvolvimento" />
        </div>
    )
}