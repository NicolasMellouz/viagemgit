import React from 'react';
import './App.css';

 const Destino = ({ nome, descricao, distancia }) => {
    return (
      <div className="destino">
        <h2>{nome}</h2>
        <p>{descricao}</p>
      <p>Distância: {distancia} km</p>
      </div>
    );
  };
  
  export default Destino;