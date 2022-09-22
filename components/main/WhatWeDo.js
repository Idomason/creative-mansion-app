import styles from './WhatWeDo.module.css';
import Image from 'next/image';

import React from 'react';

const WhatWeDo = () => {
  return (
    <div className={styles.whatWeDo}>
      <div className={styles.whatWeDoTextBox}>
        <div className={styles.whatWeDoHeadingBox}>
          <h1 className={styles.whatWeDoHeading}>
            We are on a mission to chgange your view on Digital Services.
          </h1>
        </div>
        <div className={styles.whatWeDoParagraph1Box}>
          <p className={styles.whatWeDoParagraph1}>
            Creative Mansion is value-driven digital agency dedicated to
            empowering our customers.
          </p>
        </div>
        <div className={styles.whatWeDoParagraph2Box}>
          <p className={styles.whatWeDoParagraph2}>
            Over the years, we have worked with furtune 100s and brans-new
            start-ups. We help ambitious businesses like yours generate more
            profit by building awareness, driving traffic,connecting with
            customers and growing overall sales. Certified by
            <strong className={styles.cac}> CAC</strong> Corporate Affairs
            Commisiion
            <strong className={styles.cacNumber}>(BN/RC: 3359684).</strong>{' '}
            <em>Give us a call now!</em>
          </p>
        </div>
        <div className={styles.videoContainer}>
          <p className={styles.videoIconBox}>
            <Image
              className={styles.videoIcon}
              src='/static/play-button.png'
              alt='Video Icon'
              width={60}
              height={60}
            />
          </p>
          <p className={styles.videoIconText}>video showcase</p>
        </div>
      </div>
      <div className={styles.whatWeDoHeroImageBox}>
        <Image
          className={styles.whatWeDoHeroImage}
          src='/static/hero--image1.jpg'
          alt='students studying with laptop'
          width={379}
          height={379}
        />
      </div>
    </div>
  );
};

export default WhatWeDo;
