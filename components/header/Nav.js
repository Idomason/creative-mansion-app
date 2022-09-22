import Link from 'next/link';
import styles from './Nav.module.css';

const Navigation = () => {
  return (
    <div className={styles.nav}>
      <Link href={'/'}>
        <a>Home</a>
      </Link>
      <Link href={'#'}>
        <a>About Us</a>
      </Link>
      <Link href={'#'}>
        <a>Services</a>
      </Link>
      <Link href={'#'}>
        <a>Academy</a>
      </Link>
      <Link href={'#'}>
        <a>Blog</a>
      </Link>
      <Link href={'#'}>
        <a>Contact Us</a>
      </Link>
    </div>
  );
};

export default Navigation;
