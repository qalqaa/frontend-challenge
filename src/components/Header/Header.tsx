import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to={ROUTES.HOME}>
          <i>🐈</i> Kitenest
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link className={styles.link} to={ROUTES.HOME}>
              Все котики
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to={ROUTES.HOME}>
              Любимые котики
            </Link>
          </li>
          <li className={styles.item}>
            <Link className={styles.link} to={ROUTES.AUTH}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
