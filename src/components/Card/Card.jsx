import css from './Card.module.css';

const Card = ({ CardData: { id, EP, pedidos = [] }, btnLabel, onAction }) => {
  return (
    <div className={css.card}>
      <p className={css.epHeader}>EP-{EP}</p>
      <div className={css.tableWrapper}>
        <table className={css.table}>
          <thead>
            <tr>
              <th>#</th>
              <th>Tipo de Vidro</th>
              <th>Medida</th>
              <th>Quantidade</th>
              <th>Motivo</th>
              <th>Local</th>
              <th>Operador</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((pedido, index) => (
              <tr key={`${id}-${index}`}>
                <td>{index + 1}</td>
                <td>{pedido.tipo}</td>
                <td>
                  {pedido.medida.x}x{pedido.medida.y}
                </td>
                <td>{pedido.quantidade}</td>
                <td>{pedido.motivo}</td>
                <td>{pedido.zona.linha}</td>
                <td>{pedido.zona.operador}</td>
                <td>{pedido.zona.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className={css.btn} onClick={() => onAction(id)}>
        {btnLabel}
      </button>
    </div>
  );
};

export default Card;
