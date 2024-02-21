import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css';

export default function MenuLink({ children, to }) {

    return (
        <div className={styles.container}>
            <NavLink
                className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
                to={to}
                end
            >
                {children}
            </NavLink>
        </div>
    )
}
