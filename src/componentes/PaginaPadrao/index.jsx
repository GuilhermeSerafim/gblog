import Banner from "componentes/Banner";
import { Outlet } from "react-router-dom";

export default function PaginaPadrao() {
    return (
        <main>
            <Banner />
            <Outlet/> {/* Aqui é onde os componentes das rotas aninhadas serão renderizados */}
        </main>
    )
}