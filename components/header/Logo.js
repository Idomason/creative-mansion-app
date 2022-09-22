import Image from 'next/image';
import Link from 'next/link';
import styles from './Logo.module.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href={'/'}>
        <a>
          <Image
            className={styles.logoImage}
            src={'/static/images/cm-logo.jpg'}
            width={80}
            height={80}
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
