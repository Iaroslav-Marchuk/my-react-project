import Card from '../Card/Card';
import css from './InProgressList.module.css';

const InProgressList = ({ inProgressOrders, onMove }) => {
  return (
    <ul className={css.inprogresslist}>
      {inProgressOrders.map((inProgressOrder) => (
        <li key={inProgressOrder.id} className={css.inprogressitem}>
          <Card
            CardData={inProgressOrder}
            onAction={onMove}
            btnLabel={'Completed'}
          />
        </li>
      ))}
    </ul>
  );
};

export default InProgressList;
