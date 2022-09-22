import Logo from './Logo';
import Nav from './Nav';
import SecondaryNav from './SecondaryNav';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <Nav />
      <SecondaryNav />
    </div>
  );
};

export default Header;
