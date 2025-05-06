import ActiveList from '../ActiveList/ActiveList';
import css from './Active.module.css';

const Active = ({ activeOrders, onMove }) => {
  return (
    <div className={css.active}>
      {<ActiveList activeOrders={activeOrders} onMove={onMove} />}
    </div>
  );
};

export default Active;
