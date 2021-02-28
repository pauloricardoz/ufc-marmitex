import React from 'react';

export default function HomePage() {
  const nome = 'Carla';
  return (
    <div className="home-page">
      <p>Olá, {nome}</p>
      <p>O que deseja fazer?</p>
      <button type="button">Registrar doação</button>
      <button type="button">Escala</button>
      <button type="button">Conferir doações</button>
      <button type="button">Dar sugestões</button>
    </div>
  );
}
