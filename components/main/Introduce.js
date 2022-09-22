import styles from './Introduce.module.css';
import Card from './Card';
import cardData from '../../Data/cardData.json';

// export async function getStaticProps() {
//   return {
//     props: {
//       cardData,
//     },
//   };
// }

const Introduce = () => {
  return (
    <div className={styles.introduce}>
      {cardData.map((card) => {
        return (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            imgUrl={card.imgUrl}
            number={card.number}
          />
        );
      })}
    </div>
  );
};
export default Introduce;
