import Image from 'next/image';
import styles from './CommentCard.module.css';

const CommentCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.wrapper}>
        <div className={styles.user}>
          <Image
            src='/images/review-user1.jpg'
            alt='user photo'
            width={64}
            height={64}
            className={styles.img}
          />
          <h5 className={styles.name}>Alisa Ronaldson</h5>
        </div>
        <div className={styles.raiting}>*****</div>
      </div>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
        pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat dui et
        enim. Odio feugiat id donec ultricies. Nisi, sed sed pellentesque
        posuere orci sit sed. Gravida facilisis sollicitudin donec vitae quam ut
        nibh enim.
      </p>
      <div className={styles.date}>May 5,2022</div>
    </div>
  );
};

export default CommentCard;