import { BreedCard } from '../../model/breedCard';
import styles from './Card.module.scss';

const Card = ({ breed }: BreedCard) => {
  return (
    <li className={styles.card}>
      <h3 className={styles.title}>{breed.name}</h3>
      <img
        className={styles.img}
        src={breed.image?.url ? breed.image.url : 'cat-denied.svg'}
        alt={breed.name}
      />
    </li>
  );
};

export default Card;
