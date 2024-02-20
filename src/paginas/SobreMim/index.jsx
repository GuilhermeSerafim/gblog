import SubPost from "componentes/SubPost";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from 'assets/sobre_mim_foto.png';
export default function SobreMim() {
    return (
        <SubPost
            fotoCapa={fotoCapa}
            titulo={"Sobre mim"}
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Guilherme!
            </h3>
            <img 
                src={fotoSobreMim}
                alt="Foto do Guilherme"
                className={styles.fotoSobreMim}
            />
        </SubPost>
    )
}