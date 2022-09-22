import SearchBar from './SearchBar';
import styles from './SecondaryNav.module.css';

const SecondaryNav = () => {
  return (
    <div className={styles.nav2}>
      <img src='/static/phone-call.png' alt='Phone icon' width={20} />
      <p className={styles.phoneNumber}>+2348147953648</p>
      <SearchBar />
    </div>
  );
};

export default SecondaryNav;
