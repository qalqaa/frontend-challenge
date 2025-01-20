import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BreedCard from '../../components/BreedCard/BreedCard';
import Skeleton from '../../components/Skeleton/Skeleton';
import { IBreed } from '../../model/breed';
import { useCatStore } from '../../stores/catStore';
import { ROUTES } from '../../utils/routes';
import NotFound from '../NotFound/NotFound';
import styles from './Breed.module.scss';

const Breed = () => {
  const location = useLocation();
  const state = location.state as { breed: IBreed };
  if (!state) return <NotFound />;

  const { cats, resetCats, fetchCatsByBreed, isLoadingBreed, isNeedToAuth } =
    useCatStore();
  useEffect(() => {
    if (isNeedToAuth) return;
    const fetchData = async () => {
      resetCats();
      if (state.breed.id) {
        await fetchCatsByBreed(state.breed.id);
      }
    };
    fetchData();
  }, [state.breed.id, fetchCatsByBreed]);

  return (
    <>
      <main className={styles.container}>
        {!isNeedToAuth ? (
          <div>
            <h2>Коты породы {state?.breed.name} </h2>
            <ul className={styles.list}>
              {isLoadingBreed ? (
                <Skeleton />
              ) : (
                cats.map((cat) => <BreedCard key={cat.id} cat={cat} />)
              )}
            </ul>
          </div>
        ) : (
          <div className={styles.auth}>
            <img src="../cat-denied.svg" alt="Котик печатает" />
            <h3 className={styles['auth-title']}>
              Пожалуйста, авторизуйтесь, чтобы посмотреть котиков
            </h3>
            <Link className={styles['auth-link']} to={ROUTES.AUTH}>
              Авторизоваться
            </Link>
          </div>
        )}
      </main>
    </>
  );
};

export default Breed;
