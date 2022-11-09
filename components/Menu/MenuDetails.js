import Image from 'next/image';
import styles from './MenuDetails.module.css'

const MenuDetails = ({ menuDetail }) => {
  const { title, price, descr, image } = menuDetail;
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.content}>
          <Image
            src={image}
            alt={title}
            width={558}
            height={558}
            style={{ borderRadius: '2.4rem' }}
          />
          <div className={styles.description}>
            <h3 className='heading-1-black'>{title}</h3>
          </div>
        </div>
        <p className={styles.text}>{descr}</p>
      </div>
    </section>
  );
};

export default MenuDetails;
