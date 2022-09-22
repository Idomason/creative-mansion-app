import styles from './Strategy.module.css';
import Image from 'next/image';

const Strategy = () => {
  return (
    <div className={styles.strategy}>
      <div className={styles.strategyBox}>
        <h1 className={styles.heading}>
          Expert in Web Development and Digital Services
        </h1>
        <div className={styles.services}>
          <div className={styles.servicesList}>
            <span className={styles.servicesIcon}>
              <i class='fa-regular fa-circle-check'></i>
            </span>
            <div>
              <h2>Web Design Services</h2>
              <p>
                We provide a revolutionary level of transparency into our design
                and implementation of web applications.
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            <span className={styles.servicesIcon}>
              <i class='fa-regular fa-circle-check'></i>
            </span>
            <div>
              <h2>WeCommerce Website Design</h2>
              <p>
                From concept and strategy to development, Creative Mansion team
                will bring your eStore vision to life.
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            <span className={styles.servicesIcon}>
              <i class='fa-regular fa-circle-check'></i>
            </span>
            <div>
              <h2>Social Media Marketing</h2>
              <p>
                Our approach is simple - if it doesn't positive impact your
                bottom line, we don't do it. We are a performance and ROI driven
                agency that turns advertising into profits.
              </p>
            </div>
          </div>
          <div className={styles.servicesList}>
            <span className={styles.servicesIcon}>
              <i class='fa-regular fa-circle-check'></i>
            </span>
            <div>
              <h2>Business Branding</h2>
              <p>
                Branding is what makes you trust a company you've never even
                worked with. Think about what this mean for your business.
                Branding must be done right, we can help.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.servicesImageBox}>
        <Image
          className={styles.servicesImage}
          src={'/static/hero--image2.jpg'}
          width={970}
          height={870}
        />
      </div>
    </div>
  );
};

export default Strategy;
