import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter> {/* Criando SPA */}
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route path="/" element={<Inicio />} />
            <Route path="/sobremim" element={<SobreMim />} />
          </Route>
          <Route path="/*" element={<h1>Página não encontrada</h1>} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
