import styles from './Card.module.css';
import cls from 'classnames';
import Image from 'next/image';

const Cards = ({ title, description, imgUrl, number }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImageBox}>
        <Image
          className={styles.cardImage}
          src={imgUrl}
          width={40}
          height={40}
        />
      </div>
      <h3 className={cls('item', styles.cardTitle)}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <span className={styles.cardList}>{number}</span>
    </div>
  );
};

export default Cards;
