import css from './Completed.module.css';

const Completed = ({ children }) => {
  return <div className={css.completed}>Completed {children}</div>;
};

export default Completed;
