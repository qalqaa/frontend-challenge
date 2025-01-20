import { ROUTES } from '@/utils/routes';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

const NotFound = () => {
  return (
    <main className={styles.container}>
      <img src="not-found-cat.svg" alt="милый котик пишет в тетрадке" />
      <h2 className={styles.title}>Ошибка 404</h2>
      <p className={styles.subtitle}>Упс... Кажется котики украли страницу</p>
      <Link className={styles.link} to={ROUTES.HOME}>
        Вернуться на главную
      </Link>
    </main>
  );
};

export default NotFound;
