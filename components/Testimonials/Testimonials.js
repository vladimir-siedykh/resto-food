import Image from 'next/image';
import styles from './Testimonials.module.css'

const Testimonials = () => {
  return (
    <div className={styles.bg}>
      <section className='section'>
        <div className='container center'>
          <h2 className='heading-1-black text-center'>
            What Our Customers Say
          </h2>
          <div className={styles.wrapper}>
            <div className={styles.item}>
              <h6 className='heading-2'>It’s really cool!</h6>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className={styles.line}></div>
              <Image
                src='/images/client-1.png'
                alt='client photo'
                width={64}
                height={64}
              />
              <div className={styles.name}>Robert Fox</div>
            </div>
            <div className={styles.item}>
              <h6 className='heading-2'>It’s really cool!</h6>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className={styles.line}></div>
              <Image
                src='/images/client-2.png'
                alt='client photo'
                width={64}
                height={64}
              />
              <div className={styles.name}>Guy Hawkins</div>
            </div>
            <div className={styles.item}>
              <h6 className='heading-2'>It’s really cool!</h6>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
              </p>
              <div className={styles.line}></div>
              <Image
                src='/images/client-3.png'
                alt='client photo'
                width={64}
                height={64}
              />
              <div className={styles.name}>Ralph Edwards</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials