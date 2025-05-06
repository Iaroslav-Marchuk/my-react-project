import InProgressList from '../InProgressList/InProgressList';
import css from './InProgress.module.css';

const InProgress = ({ inProgressOrders, onMove }) => {
  return (
    <div className={css.inprogress}>
      {<InProgressList inProgressOrders={inProgressOrders} onMove={onMove} />}
    </div>
  );
};

export default InProgress;
