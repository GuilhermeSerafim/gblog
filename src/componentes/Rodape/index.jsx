import styles from "./Rodape.module.css";
import { ReactComponent as MarcaRegistrada } from "assets/marca_registrada.svg";

export default function Rodape() {
    return (
        <footer className={styles.rodape}>
            <ul className={styles.logos}>
                    <li className={styles.logo}>
                        <a href="https://www.youtube.com/channel/UCDwZfT1FeLccSRAgWubJHng" target="blank">
                            <img src="assets/youtube.png" alt="Youtube" />
                        </a>
                    </li>
                    <li className={styles.logo}>
                        <a href="wa.link/8dnjl7" target="blank">
                            <img src="assets/whatsapp.png" alt="Whatsapp" />
                        </a>
                    </li>
                    <li className={styles.logo}>
                        <a href="https://www.instagram.com/iamguiler/" target="blank">
                            <img src="assets/ig.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            <MarcaRegistrada />
            <p>
                Desenvolvido por <a className={styles.rodape__autor} href="https://guilhermeserafim.github.io/portifolio/" target='blank'>Guilherme</a>
            </p>
        </footer>
    )
}
