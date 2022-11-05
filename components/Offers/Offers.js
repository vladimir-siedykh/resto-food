import Image from 'next/image';
import Link from 'next/link';
import styles from './Offers.module.css'

const Offers = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <h2 className='heading-1-white'>
              Get Up to 80% Offer On This Weekend
            </h2>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt n
            </p>
            <Link href='/'>
              <a className='btn'>Reservation</a>
            </Link>
          </div>
          <div className={styles.img}>
            <Image
              src='/images/offer.png'
              alt='offer picture'
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Offers