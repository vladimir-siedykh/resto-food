import Image from 'next/image';
import styles from './NewsDetails.module.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const NewsDetails = ({ newsDetail }) => {
  const { title, descr, image } = newsDetail;
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <Image
            src={image}
            alt={title}
            layout='responsive'
            priority='true'
            width={1140}
            height={690}
            style={{ borderRadius: '2.4rem' }}
          />
          <p className={styles.text}>{descr}</p>
          <p className={styles.quote}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat
            dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
            pellentesque posuere orci sit sed. Gravida facilisis sollicitudin
            donec vitae quam ut nibh enim.
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            pellentesque et nibh tincidunt bibendum. Sed in tellus in
            feugiatugiat id donec ultricies. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Tortor pellentesque et nibh tincidunt
            bibendum. Sed in tellus in feugiat dui et enim. Odio feugiat id
            donec ultricies.{' '}
          </p>
          <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
            pellentesque et nibh tincidunt bibendum. Sed in tellus in feugiat
            dui et enim. Odio feugiat id donec ultricies. Nisi, sed sed
            pellentesque posuere orci sit sed. Gravida facilisis sollicitudin
            donec vitae quam ut nibh enim. Enim semper nulla quis est. Est
            scelerisque malesuada maecenas augue elementum integer. Sollicitudin
            augue in libero eu neque augue diam lectus laoreet. Viverra amet, in
            massa integer tincidunt ullamcorper. Accumsan massa consequat amet
            cursus condimentum consectetur. Enim sem cursus viverra at
            imperdiet.
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.tags}>
            Tags:
            <div>
              <span className={styles.tag}>Food</span>
              <span className={styles.tag}>Healthy</span>
              <span className={styles.tag}>Desert</span>
            </div>
          </div>
          <div className={styles.socials}>
            Share:
            <div className={styles.socialsLink}>
              <FaFacebookF />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    </section>
  );
};

export default NewsDetails;
