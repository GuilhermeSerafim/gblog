import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './pages/Inicio';
import SobreMim from './pages/SobreMim';
import Menu from './componentes/Menu';

function AppRoutes() {
  return (
    <div className="App">
      <BrowserRouter> {/* Criando SPA */}
        <Menu/>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/*" element={<h1>Página não encontrada</h1>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AppRoutes;
