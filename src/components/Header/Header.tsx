import Logo from '../../assets/LogoRu.png';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header className={styles.container}>
      <img className={styles.logo} src={Logo} alt="" />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li>Profile</li>
          <li>Shop</li>
          <li>About</li>
        </ul>
      </nav>
      <div className={styles.rightSection}>
        <button className={styles.liveBookBtn}>Open Live Book</button>
        <select className={styles.languageSelector}>
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="es">Español</option>
        </select>
      </div>
    </header>
  );
};
