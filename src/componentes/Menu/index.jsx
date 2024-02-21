import styles from "./Menu.module.css";
import MenuLink from "../MenuLink";
import { Button } from "@mui/material";

export default function Menu() {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to={"/"}>ÍNICIO</MenuLink>
                <MenuLink to={"/sobremim"}>SOBRE MIM</MenuLink>
                <Button color="secondary" variant="outlined">
                    <MenuLink to={"/newlestter"}>NEWLESTTER</MenuLink> {/*Em desenvolvimento */}
                </Button>
            </nav>
        </header>
    )
}