import styles from './Counter.module.css';
import cls from 'classnames';

export const Counter = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <i className={cls(styles.icon, 'fa-solid fa-people-group')}></i>
        <span className={styles.num} data-val='45'>
          0000
        </span>
        <span className={styles.text}>Clients</span>
      </div>
      <div className={styles.container}>
        <i className={cls(styles.icon, 'fa-solid fa-list-check')}></i>

        <span className={styles.num} data-val='600'>
          0000
        </span>
        <span className={styles.text}>Projects Done</span>
      </div>
      <div className={styles.container}>
        <i className={cls(styles.icon, 'fa-solid fa-graduation-cap')}></i>

        <span className={styles.num} data-val='150'>
          0000
        </span>
        <span className={styles.text}>Students Trained</span>
      </div>
      <div className={styles.container}>
        <i className={cls(styles.icon, 'fa-solid fa-champagne-glasses')}></i>

        <span className={styles.num} data-val='3'>
          0000
        </span>
        <span className={styles.text}>Glorious Years</span>
      </div>
    </div>
  );
};

export default Counter;
