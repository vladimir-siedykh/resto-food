import Image from 'next/image';
import styles from './MenuFavourite.module.css'

const MenuFavourite = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-1-black text-center'>Our Favorite Menu</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                style={{ borderRadius: '1.6rem' }}
                src='/images/special-1.png'
                alt='specials picture'
                width={151}
                height={151}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5 className='heading-2'>Our Favorite Menu 1</h5>
                <span>$ 15</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                style={{ borderRadius: '1.6rem' }}
                src='/images/special-2.png'
                alt='specials picture'
                width={151}
                height={151}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5 className='heading-2'>Our Favorite Menu 2</h5>
                <span>$ 15</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                style={{ borderRadius: '1.6rem' }}
                src='/images/special-3.png'
                alt='specials picture'
                width={151}
                height={151}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5 className='heading-2'>Our Favorite Menu 3</h5>
                <span>$ 15</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                style={{ borderRadius: '1.6rem' }}
                src='/images/special-4.png'
                alt='specials picture'
                width={151}
                height={151}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5 className='heading-2'>Our Favorite Menu 4</h5>
                <span>$ 15</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                style={{ borderRadius: '1.6rem' }}
                src='/images/special-5.png'
                alt='specials picture'
                width={151}
                height={151}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5 className='heading-2'>Our Favorite Menu 5</h5>
                <span>$ 15</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco.</p>
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                style={{ borderRadius: '1.6rem' }}
                src='/images/special-6.png'
                alt='specials picture'
                width={151}
                height={151}
              />
            </div>
            <div className={styles.content}>
              <div className={styles.title}>
                <h5 className='heading-2'>Our Favorite Menu 6</h5>
                <span>$ 15</span>
              </div>
              <p>Amet minim mollit non deserunt ullamco.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MenuFavourite