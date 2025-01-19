import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import Loader from '../../components/Loader/Loader';
import { useCatStore } from '../../stores/catStore';
import styles from './App.module.scss';

function App() {
  const { breeds, fetchBreeds, isLoading } = useCatStore();
  useEffect(() => {
    if (breeds.length === 0 && !isLoading) fetchBreeds();
  }, [breeds.length, isLoading, fetchBreeds]);
  return (
    <main className={styles.container}>
      <h2>Все породы котиков</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <ul className={styles.list}>
          {breeds.map((breed) => (
            <Card key={breed.id} breed={breed} />
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;
