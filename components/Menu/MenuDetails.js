import Image from 'next/image';
import styles from './MenuDetails.module.css';

const MenuDetails = ({ menuDetail }) => {
  const { title, descr, image } = menuDetail;
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.content}>
          <div className={styles.img}>
            <Image
              src={image}
              alt={title}
              width={558}
              height={558}
              layout='responsive'
              style={{ borderRadius: '2.4rem' }}
            />
          </div>
          <div className={styles.description}>
            <h3 className='heading-1-black'>{title}</h3>
            <p className={styles.text}>{descr}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuDetails;
