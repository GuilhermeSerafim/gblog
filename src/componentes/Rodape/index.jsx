import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <MarcaRegistrada />
            <p>
                Desenvolvido por <a className={styles.rodape__autor} href="https://guilhermeserafim.github.io/portifolio/" target='blank'>Guilherme</a>
            </p>
        </footer>
    )
}