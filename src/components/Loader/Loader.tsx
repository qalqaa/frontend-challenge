import styles from './Loader.module.css';

const Loader = () => {
  return (
    <svg viewBox="0 0 16 16" height="100" width="100" className={styles.loader}>
      <circle r="7px" cy="8px" cx="8px"></circle>
    </svg>
  );
};

export default Loader;
