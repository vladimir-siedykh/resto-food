import Image from 'next/image';
import styles from './About.module.css'

const About = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2
          className='heading-1-black text-center'
          style={{ maxWidth: '70rem', marginInline: 'auto' }}
        >
          Our Restaurant has been present for 10 years in the market.
        </h2>
        <p className={styles.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        <div className={styles.content}>
          <Image
            src='/images/about-video.png'
            alt='Video'
            width={1140}
            height={557}
            style={{ borderRadius: '2.4rem' }}
          />
        </div>
      </div>
    </section>
  );
}

export default About