import FundoPagina from "componentes/FundoPagina";
import fotoCapa from "assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from 'assets/sobre_mim_foto.png';
export default function SobreMim() {
    return (
        <FundoPagina
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


            <p className={styles.paragrafo}>
                Me apresento inicialmente como programador, minha história com programação, começou em 2020 quando entrei para Etec Abdias do Nascimento. Desde muito jovem meu fascínio pela exploração do desconhecido me levou a mergulhar de cabeça no universo da programação e outras áreas do meu interesse.
            </p>
            <p className={styles.paragrafo}>
                Na pandemia, sem acesso a um computador, aprendendo no formato EAD, passei três anos lutando para aprender o básico de programação. Imagine a frustração! Mas como um verdadeiro explorador destemido, recusei-me a desistir. Com determinação, consegui um emprego como vendedor de videogames e, com o dinheiro economizado, comprei meu próprio computador. Em pouco tempo, consegui uma posição como programador na renomada seguradora Tokio Marine.
            </p>
            <p className={styles.paragrafo}>
                Minha jornada de aprendizado não parou por aí. Aprendi muito na prática, no dia a dia do trabalho, e também na maior escola de tecnologia da América Latina: a Alura. Agora, munido das ferramentas necessárias, estou em constante evolução e aprendizado. Uma frase que ecoou profundamente em mim durante todo esse processo foi a de Mário Sérgio Cortella: "Faça o teu melhor na condição que você tem, enquanto você não tem condições melhores para fazer melhor ainda!"            </p>
            <p className={styles.paragrafo}>
                Mas não me rótulo apenas um programador; também há o Guilherme armador do basquete; o Guiler dos jogos; Entre outras versões de mim mesmo.  Encontrar o equilíbrio entre minhas diferentes identidades é complexo, mas entendo isso como uma riqueza, que me permite explorar plenamente todas as dimensões do meu ser.
            </p>
            <h3 className={styles.subtitulo}>
                O Explorador
            </h3>
            <p className={styles.paragrafo}>
                E você me conhece por quais dessas "dimensões"? Se eu me perguntasse, como eu me conheço e definisse um eu em todos esses aspectos, diria que me conheço como um explorador. Estou em busca de expandir meus horizontes, desafiar meus limites, afinal de contas, a vida é uma jornada emocionante, repleta de experiências que me permitem expandir meus horizontes e descobrir novos caminhos. Acredito que o aprendizado é uma jornada infinita e que cada dia é uma oportunidade de crescer, evoluir e aprender.
            </p>
        </FundoPagina>
    )
}