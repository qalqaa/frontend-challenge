import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCatStore } from '../../stores/catStore';
import { ROUTES } from '../../utils/routes';
import styles from './Auth.module.scss';

const Auth = () => {
  const { isNeedToAuth, setApiKey } = useCatStore();

  const [inputKey, setInputKey] = useState<string>('');
  const navigate = useNavigate();

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    setInputKey(event.currentTarget.value);
  };

  const handleAuth = () => {
    setApiKey(inputKey);
    navigate(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {!isNeedToAuth ? (
          <>
            <h2 className={styles.title}>Вы авторизованы!</h2>
            <Link to={ROUTES.HOME} className={styles.button}>
              На главную
            </Link>
          </>
        ) : (
          <>
            <h2 className={styles.title}>Авторизация</h2>
            <div>
              <label className={styles.label} htmlFor="apiKey">
                Вставьте ваш API key
              </label>
              <input
                value={inputKey}
                onInput={(e) => handleInput(e)}
                className={styles.input}
                id="apiKey"
                type="text"
              />
            </div>
            <button onClick={() => handleAuth()} className={styles.button}>
              Подтвердить ключ
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Auth;
