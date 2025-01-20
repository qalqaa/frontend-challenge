import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import BreedCard from '../../components/BreedCard/BreedCard';
import Loader from '../../components/Loader/Loader';
import { IBreed } from '../../model/breed';
import { useCatStore } from '../../stores/catStore';
import NotFound from '../NotFound/NotFound';
import styles from './Breed.module.scss';

const Breed = () => {
  const location = useLocation();
  const state = location.state as { breed: IBreed };
  if (!state) return <NotFound />;

  const { cats, resetCats, fetchCatsByBreed, isLoadingBreed } = useCatStore();
  useEffect(() => {
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
      <div className={styles.container}>
        <h2>Коты породы {state?.breed.name} </h2>
        {isLoadingBreed && <Loader />}
        <ul className={styles.list}>
          {cats.map((cat) => (
            <BreedCard key={cat.id} cat={cat} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Breed;
