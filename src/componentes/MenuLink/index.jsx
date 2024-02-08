import { Link, useLocation } from "react-router-dom";
import styles from "./Menu.module.css";

export default function MenuLink({ children, to }) {
    // Visualizar algumas props dos parametros da URL
    const localizacao = useLocation();

    return (
        <Link
            to={to}
            className={`
            ${styles.link}
            ${localizacao.pathname === to ? styles.linkDestacado : ""}
             `}>
            {children}
        </Link>
    )
}