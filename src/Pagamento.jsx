import React from 'react';

const Pagamento = ({ subtotal, finalizarCompra }) => {
  return (
    <div>
      <h2>Pagamento</h2>
      <p>Total: R${subtotal}</p>
      <button onClick={finalizarCompra}>Finalizar Compra com PIX</button>
      <button onClick={finalizarCompra}>Finalizar Compra com Cartão de Crédito</button>
    </div>
  );
};
const Destino = ({ nome, descricao, distancia }) => {
       const [irParaPagamento, setIrParaPagamento] = useState(false);
    
       const finalizarCompra = () => {
         alert('Compra finalizada!');
         setIrParaPagamento(false);
       };
    
       if (irParaPagamento) {
         return <Pagamento subtotal={subtotal} finalizarCompra={finalizarCompra} />;
       }
    
      return (
        <div className="destino">
          <h2>{nome}</h2>
          <p>{descricao}</p>
          <p>Distância: {distancia} km</p>
          <label>Data de Ida:
            <input type="date" value={dataIda} onChange={(e) => setDataIda(e.target.value)} />
          </label>
          <label>Data de Volta:
            <input type="date" value={dataVolta} onChange={(e) => setDataVolta(e.target.value)} />
          </label>
          <label>Tipo de Estalagem:
            <select value={tipoEstalagem} onChange={(e) => setTipoEstalagem(e.target.value)}>
              <option value="padrão">Padrão</option>
              <option value="luxo">Luxo</option>
            </select>
          </label>
          <label>Número de Participantes:
            <input type="number" value={participantes} onChange={(e) => setParticipantes(e.target.value)} min="1" />
          </label>
          <p>Subtotal: R${subtotal}</p>
         <button onClick={() => setIrParaPagamento(true)}>Comprar</button>
        </div>
      );
    };
export default Pagamento;