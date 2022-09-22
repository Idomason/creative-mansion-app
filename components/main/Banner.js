import styles from './Banner.module.css';
import Image from 'next/image';

import React from 'react';
import GetStartedButton from './GetStartedButton';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerTextBox}>
        <p className={styles.bannerText}>
          Let's take your business to new
          <br /> heights today!
        </p>
        <GetStartedButton label='Lets Get Started' />
      </div>
      <div className={styles.bannerImageBox}>
        <Image
          className={styles.bannerImage}
          src={'/static/hero--image.jpg'}
          width={270}
          height={250}
        />
      </div>
    </div>
  );
};

export default Banner;
