import Image from 'next/image';
import styles from './Features.module.css'

const Features = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <div className={styles.wrapper}>
          <h2 className='heading-1-black text-center'>Why People Choose Us</h2>
          <div className={styles.items}>
            <div className={styles.item}>
              <Image
                src='/images/icon-why-1.svg'
                alt='icon'
                width={48}
                height={48}
              />
              <h5 className='heading-2'>Fresh Ingredient</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className={styles.item}>
              <Image
                src='/images/icon-why-2.svg'
                alt='icon'
                width={48}
                height={48}
              />
              <h5 className='heading-2'>Specialist Chef</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
            <div className={styles.item}>
              <Image
                src='/images/icon-why-3.svg'
                alt='icon'
                width={48}
                height={48}
              />
              <h5 className='heading-2'>Menu for every taste</h5>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features