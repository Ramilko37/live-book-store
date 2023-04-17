import {Footer} from '../Footer';
import {Header} from '../Header';
import styles from './Layout.module.css';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({children}: Props) => {
  return (
    <div className={styles.root}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
