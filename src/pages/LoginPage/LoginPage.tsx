import React, {ChangeEvent, useState} from 'react';
import styles from './LoginPage.module.css';
import img from '../../assets/Alfie_Key.svg';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Login with email:', email, 'and password:', password);
  };

  const handleRegister = () => {
    console.log('Register with email:', email, 'and password:', password);
  };

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        background: '#FDF3E1',
        justifyContent: 'center',
        height: '100vh',
        position: 'relative',
      }}
    >
      <h1 style={{margin: '20px auto'}}>Вход в аккаунт</h1>
      <img
        style={{
          position: 'absolute',
          left: '20px',
          width: '300px',
          height: '400px',
        }}
        src={img}
      />
      <form className={styles.form}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '8px',
          }}
        >
          <label>Логин или e-mail:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label>Пароль:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <a style={{marginBottom: '8px'}}>Не помню пароль...</a>
        <button className={styles.loginBtn} type="button" onClick={handleLogin}>
          Войти
        </button>
        <button
          className={styles.registerBtn}
          type="button"
          onClick={handleRegister}
        >
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
};
