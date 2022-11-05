import Link from 'next/link';
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <div className={styles.bg}>
      <section className={`section clr-white ${styles.hero}`}>
        <div className={`container ${styles.container}`}>
          <div className={styles.content}>
            <p>Welcome Back to Restofood</p>
            <h1 className={styles.title}>Book Your Table Today</h1>
            <p className={styles.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
              sint Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint
            </p>
            <Link href='/reservation'>
              <a className='btn'>Book a Table</a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero