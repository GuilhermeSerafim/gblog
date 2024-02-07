import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Inicio from './componentes/Inicio';
import SobreMim from './componentes/SobreMim';

function App() {
  return (
    <div className="App">
      <BrowserRouter> {/* Criando SPA */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobremim" element={<SobreMim />} />
          <Route path="/*" element={<h1>Página não encontrada</h1>} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
