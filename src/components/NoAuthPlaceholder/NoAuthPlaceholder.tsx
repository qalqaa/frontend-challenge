import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import styles from './NoAuthPlaceholder.module.scss';

const NoAuthPlaceholder = () => {
  return (
    <div className={styles.auth}>
      <img src="../cat-denied.svg" alt="Котик печатает" />
      <h3 className={styles['auth-title']}>
        Пожалуйста, авторизуйтесь, чтобы посмотреть котиков
      </h3>
      <Link className={styles['auth-link']} to={ROUTES.AUTH}>
        Авторизоваться
      </Link>
    </div>
  );
};

export default NoAuthPlaceholder;
