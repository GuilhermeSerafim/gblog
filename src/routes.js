import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/Inicio';
import SobreMim from './paginas/SobreMim';
import Menu from './componentes/Menu';
import Rodape from 'componentes/Rodape';
import PaginaPadrao from 'componentes/PaginaPadrao';
import Post from 'paginas/Post';
import PaginaNaoEncontrada from 'paginas/NaoEncontrada';
function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter> {/* Criando SPA */}
        <Menu />
        <Routes>
          {/*Rotas aninhadas */}
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path="sobremim" element={<SobreMim />} />
            <Route path="posts/:id" element={<Post />} />
          </Route>
          <Route path="*" element={<PaginaNaoEncontrada/>} />
        </Routes>
        <Rodape />
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
