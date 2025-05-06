import CompletedList from '../CompletedList/CompletedList';
import css from './Completed.module.css';

const Completed = ({ completedOrders, onDelete }) => {
  return (
    <div className={css.inprogress}>
      {<CompletedList completedOrders={completedOrders} onDelete={onDelete} />}
    </div>
  );
};

export default Completed;
