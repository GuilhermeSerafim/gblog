import styles from "./NaoEncontrada.module.css";
import { Button } from "@mui/material";
import erro404 from "assets/erro_404.png";
import { useNavigate } from "react-router-dom";

export default function PaginaNaoEncontrada() {
    const navegar = useNavigate();

    return (
        <>

            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>
                <h1 className={styles.titulo}>Página não encontrada</h1>
                <p className={styles.paragrafo}>Tem certeza que é isso que estava procurando?</p>
                <p className={styles.paragrafo}>Aguarde uns instantes e recarregue a página, ou volte para a página inicial</p>
                <div className={styles.botaoContainer}>
                    <Button
                        variant="contained"
                        size="large"
                        style={{ padding: "15px 30px", borderRadius: "20px", display: "inline-block" }}
                        onClick={() => navegar(-1)}
                    >
                        Voltar
                    </Button>
                </div>
                <img
                    className={styles.imagemCachorro}
                    alt="imagem de um cachorro"
                    src={erro404}
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>

    )
}