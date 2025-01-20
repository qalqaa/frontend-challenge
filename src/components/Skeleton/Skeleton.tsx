import styles from './Skeleton.module.scss';

interface ISkeletonProps {
  width?: string;
  height?: string;
}
const Skeleton = ({ width, height }: ISkeletonProps) => {
  return (
    <li className={styles.skeleton} style={{ width, height }}>
      <div className={styles.loader}></div>
    </li>
  );
};

export default Skeleton;
