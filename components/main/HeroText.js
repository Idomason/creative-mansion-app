import styles from './HeroText.module.css';
import Image from 'next/image';

const HeroText = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.heroText}>
        <span className={styles.heroTextLarge}>
          <h1 className={styles.heroTextHeading}>
            Original, Expressive and Innovative.
          </h1>
        </span>
        <span className={styles.heroTextMedium}>
          <p className={styles.heroTextParagraph}>
            We deliver the best Digital and Web Developemt services at an
            affordable cost. With a dedicated team of diverse creativity and
            expertise, your interests are delivered.
          </p>
        </span>
      </div>

      <div className={styles.heroImageBox}>
        <Image
          className={styles.heroImage}
          src={'/static/hero--image.jpg'}
          width={350}
          height={250}
        />
      </div>
    </div>
  );
};

export default HeroText;
