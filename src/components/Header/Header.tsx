import clsx from 'clsx';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCatStore } from '../../stores/catStore';
import { ROUTES } from '../../utils/routes';
import styles from './Header.module.scss';

const Header = () => {
  const { isNeedToAuth } = useCatStore();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link className={styles.logo} to={ROUTES.HOME}>
          <i>🐈</i> Kitenest
        </Link>
        <nav className={styles.nav}>
          <button
            className={clsx(styles.burger, { [styles.active]: isMenuOpen })}
            aria-label="Бургер меню"
            onClick={toggleMenu}
          >
            <span />
            <span />
            <span />
          </button>
          <ul className={`${styles.list} ${isMenuOpen ? styles.listOpen : ''}`}>
            <li className={styles.item}>
              <Link className={styles.link} to={ROUTES.HOME}>
                Все котики
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to={ROUTES.FAVORITES}>
                Любимые котики
              </Link>
            </li>
            {isNeedToAuth && (
              <li className={styles.item}>
                <Link className={styles.link} to={ROUTES.AUTH}>
                  Войти
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
