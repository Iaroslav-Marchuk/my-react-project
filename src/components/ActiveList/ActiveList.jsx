import Card from '../Card/Card';
import css from './ActiveList.module.css';

const ActiveList = ({ activeOrders, onMove }) => {
  return (
    <ul className={css.activelist}>
      {activeOrders.map((activeOrder) => (
        <li key={activeOrder.id} className={css.activeitem}>
          <Card CardData={activeOrder} onAction={onMove} btnLabel={'To Work'} />
        </li>
      ))}
    </ul>
  );
};

export default ActiveList;
