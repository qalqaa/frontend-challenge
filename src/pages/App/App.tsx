import { debounce } from 'lodash';
import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/Card/Card';
import NoAuthPlaceholder from '../../components/NoAuthPlaceholder/NoAuthPlaceholder';
import Skeleton from '../../components/Skeleton/Skeleton';
import { useCatStore } from '../../stores/catStore';
import styles from './App.module.scss';

function App() {
  const {
    breeds,
    fetchBreeds,
    isLoadingMain,
    isNeedToAuth,
    hasMore,
    picturesPerPage,
  } = useCatStore();

  const handleScroll = useCallback(
    debounce(() => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 300 &&
        !isLoadingMain &&
        hasMore
      ) {
        fetchBreeds();
      }
    }, 200),
    [fetchBreeds, isLoadingMain, hasMore],
  );

  useEffect(() => {
    if (isNeedToAuth) return;

    if (breeds.length === 0 && !isLoadingMain) {
      fetchBreeds();
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fetchBreeds]);

  const navigate = useNavigate();
  return (
    <main className={styles.container}>
      {isNeedToAuth ? (
        <NoAuthPlaceholder />
      ) : (
        <>
          <h2>Все породы котиков</h2>
          <ul className={styles.list}>
            {breeds.map((breed) => (
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
            {isLoadingMain &&
              Array.from({ length: picturesPerPage }).map((_, index) => (
                <Skeleton key={index} />
              ))}
          </ul>
        </>
      )}
    </main>
  );
}

export default App;
