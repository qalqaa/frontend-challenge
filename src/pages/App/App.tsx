import { getCatsData } from '../../data/api';
import styles from './App.module.scss';

function App() {
  return (
    <main className={styles.container}>
      <button onClick={() => getCatsData()}>Get kittens</button>
    </main>
  );
}

export default App;
