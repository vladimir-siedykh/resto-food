import Image from 'next/image';
import Link from 'next/link';
import menu from '../../constants/menu'
import styles from './MenuAll.module.css'


const MenuAll = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-1-black text-center'>Choose Your Dish</h2>
        <div className={styles.wrapper}>
          {menu.map((item) => {
            const { id, title, price, image, preview, slug } = item;
            return (
              <div key={id} className={styles.item}>
                <Link href={`/menu/${slug}`}>
                  <a>
                    <Image
                      src={image}
                      alt={title}
                      width={362}
                      height={362}
                      style={{ borderRadius: '2.4rem' }}
                    />
                    <div className={styles.content}>
                      <div className={styles.title}>
                        <h3 className='heading-2'>{title}</h3>
                        <span className={styles.price}>${price}</span>
                      </div>
                      <p className={styles.text}>{preview}</p>
                    </div>
                  </a>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default MenuAll