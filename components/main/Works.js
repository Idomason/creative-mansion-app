import GetStartedButton from './GetStartedButton';
import styles from './Works.module.css';
import Image from 'next/image';

const Works = () => {
  return (
    <div className={styles.works}>
      <div className={styles.worksFirstRow}>
        <div className={styles.projectDetails}>
          <h1 className={styles.worksHeading}>Our Latest Case Studies</h1>
          <p className={styles.worksParagraph}>
            We have a "secret sauce" it would be our awesome team of developers
            in Creative Mansion. We have only professional team!
          </p>
        </div>
        <div className={styles.projectButton}>
          <GetStartedButton label='Projects' />
        </div>
      </div>
      <div className={styles.worksSecondRow}>
        <Image className={styles.worksImage} src={'/static/hero--image.jpg'} width={'300'} height={'300'} />
        <Image className={styles.worksImage} src={'/static/hero--image1.jpg'} width={'300'} height={'300'} />
        <Image className={styles.worksImage} src={'/static/hero--image5.jpg'} width={'300'} height={'300'} />
      </div>
    </div>
  );
};

export default Works;
