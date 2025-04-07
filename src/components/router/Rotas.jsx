import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import Teste from '../teste';

function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teste" element={<Teste />} />
      </Routes>
    </Router>
  );
}

export default Rotas;
