import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Skeleton from '../../components/Skeleton/Skeleton';
import { useCatStore } from '../../stores/catStore';
import styles from './App.module.scss';

function App() {
  const { breeds, fetchBreeds, isLoading } = useCatStore();
  if (breeds.length === 0 && !isLoading) fetchBreeds();

  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      <h2>Все породы котиков</h2>

      <ul className={styles.list}>
        {isLoading
          ? Array.from({ length: 66 }).map((_, index) => (
              <Skeleton key={index} />
            ))
          : breeds.map((breed) => (
              <Card
                key={breed.id}
                breed={breed}
                onCLick={() => {
                  navigate(`/breed/${breed.id}`, {
                    state: { breed },
                  });
                }}
              />
            ))}
      </ul>
    </main>
  );
}

export default App;
