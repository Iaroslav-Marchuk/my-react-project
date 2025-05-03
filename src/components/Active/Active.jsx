import css from './Active.module.css';

const Active = ({ children }) => {
  return <div className={css.active}>Active {children}</div>;
};

export default Active;
