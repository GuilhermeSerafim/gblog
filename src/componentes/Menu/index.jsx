import styles from "./Menu.module.css";

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <a href="/" className={styles.link}>Inicio</a>
                <a href="/sobremim" className={styles.link}>Sobre Mim</a>
            </nav>
        </header>
    )
}