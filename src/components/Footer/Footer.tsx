import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.me}>Made by qalqa</p>
        <img
          width={32}
          height={32}
          className={styles.avatar}
          src="https://avatars.githubusercontent.com/u/113594321?v=4"
          alt="my avatar"
        />
        <ul className={styles.list}>
          <li className={styles.item}>
            <a className={styles.link} href="https://github.com/qalqaa">
              GitHub
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="https://vk.com/qalqaa">
              VK
            </a>
          </li>
          <li className={styles.item}>
            <a className={styles.link} href="https://t.me/qalqaa">
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
