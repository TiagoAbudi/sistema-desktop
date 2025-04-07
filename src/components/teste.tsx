/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';

function Teste() {
  const navigate = useNavigate();

  const irParaHome = () => {
    navigate('/'); // Redireciona para a rota "/teste"
  };
  return (
    <div>
      <h1 onClick={irParaHome} style={{ color: 'black' }}>
        TESTE
      </h1>
    </div>
  );
}

export default Teste;
