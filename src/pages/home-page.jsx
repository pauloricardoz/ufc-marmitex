import React from 'react';
import { useHistory } from 'react-router';

export default function HomePage() {
  const history = useHistory();
  const nome = 'Carla';
  return (
    <div className="home-page">
      <p>
        Olá,
        {nome}
      </p>
      <p>O que deseja fazer?</p>
      <button type="button" onClick={ () => history.push('/register') }>
        Registrar doação
      </button>
      <button type="button" onClick={ () => history.push('/schedule') }>Escala</button>
      <button type="button" disabled>Conferir doações</button>
      <button type="button" disabled>Dar sugestões</button>
    </div>
  );
}
