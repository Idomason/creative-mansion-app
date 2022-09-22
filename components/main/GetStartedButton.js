import styles from './GetStartedButton.module.css';
import Link from 'next/link';

import React from 'react';

const GetStartedButton = (props) => {
  return (
    <div>
      <div className={styles.bannerButton}>
        <Link href={'#'}>
          <a>{props.label}</a>
        </Link>
        <span className={styles.arrow}>
          <i class='fa-solid fa-arrow-right-long'></i>
        </span>
      </div>
    </div>
  );
};

export default GetStartedButton;
