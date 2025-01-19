import { Cat } from '../../model/breed';
import styles from './BreedCard.module.scss';
interface IBreedCardProps {
  cat: Cat;
}

const BreedCard = ({ cat }: IBreedCardProps) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={cat.url ? cat?.url : 'cat-denied.svg'} />
    </div>
  );
};

export default BreedCard;
