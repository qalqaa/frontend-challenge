import { Cat } from '@/model/breed';
import { useCatStore } from '@/stores/catStore';
import clsx from 'clsx';
import LikeButton from 'components/LikeButton/LikeButton';
import styles from './BreedCard.module.scss';
interface IBreedCardProps {
  cat: Cat;
}

const BreedCard = ({ cat }: IBreedCardProps) => {
  const { isFavorite, addToFavorites, removeFromFavorites } = useCatStore();

  const favoriteHandle = () => {
    if (!isFavorite(cat.id)) {
      addToFavorites(cat);
    } else {
      removeFromFavorites(cat.id);
    }
  };
  return (
    <div className={clsx(styles.card)} onClick={favoriteHandle}>
      <div className={styles.like}>
        <LikeButton isFavorite={isFavorite(cat.id)} />
      </div>
      <img className={styles.img} src={cat.url ? cat?.url : 'cat-denied.svg'} />
    </div>
  );
};

export default BreedCard;
