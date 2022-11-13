import Image from 'next/image';
import Link from 'next/link';
import styles from './NewsMain.module.css'
import { BiRightArrowAlt } from 'react-icons/bi';

const NewsMain = () => {
  return (
    <div className={styles.bg}>
      <section className='section'>
        <div className='container center'>
          <h2 className='heading-1-black text-center'>
            Welcome to Our Newsletter
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image
                  style={{ borderRadius: '0.6rem' }}
                  src='/images/news-1.png'
                  alt='news picture'
                  width={332}
                  height={251}
                />
              </div>
              <div className={styles.content}>
                <h5 className='heading-2'>
                  Chicken Lettuce Wraps with Lime Drench
                </h5>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint
                </p>
                <Link href='/'>
                  <a className={styles.link}>
                    Read Full Article <BiRightArrowAlt />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image
                  style={{ borderRadius: '0.6rem' }}
                  src='/images/news-2.png'
                  alt='news picture'
                  width={332}
                  height={251}
                />
              </div>
              <div className={styles.content}>
                <h5 className='heading-2'>
                  Chicken Lettuce Wraps with Lime Drench
                </h5>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint
                </p>
                <Link href='/'>
                  <a className={styles.link}>
                    Read Full Article <BiRightArrowAlt />
                  </a>
                </Link>
              </div>
            </div>
            <div className={styles.item}>
              <div className={styles.img}>
                <Image
                  style={{ borderRadius: '0.6rem' }}
                  src='/images/news-3.png'
                  alt='news picture'
                  width={332}
                  height={251}
                />
              </div>
              <div className={styles.content}>
                <h5 className='heading-2'>
                  Chicken Lettuce Wraps with Lime Drench
                </h5>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint
                </p>
                <Link href='/'>
                  <a className={styles.link}>
                    Read Full Article <BiRightArrowAlt />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <Link href='/'>
            <a className={styles.btn}>See All</a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NewsMain