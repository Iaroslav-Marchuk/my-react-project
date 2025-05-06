import Card from '../Card/Card';
import css from './CompletedList.module.css';

const CompletedList = ({ completedOrders, onDelete }) => {
  return (
    <ul className={css.inprogresslist}>
      {completedOrders.map((completedOrder) => (
        <li key={completedOrder.id} className={css.completedOrders}>
          <Card
            CardData={completedOrder}
            onAction={onDelete}
            btnLabel={'Delete'}
          />
        </li>
      ))}
    </ul>
  );
};

export default CompletedList;
