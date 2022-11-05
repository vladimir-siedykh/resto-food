import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Discover.module.css';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

const Discover = () => {
  const ref = useRef(null);
  const inView = useInView(ref, {
    threshold: 0.5,
    once: true,
  });

  // react-intersection-observer
  // const { ref, inView } = useInView({
  //   // threshold: 0.1,
  // });

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: {
          duration: 1,
          ease: 'easeOut',
          // delay: 0.5,
          // type: 'spring',
          // stiffness: 120,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        x: '-100vw',
      });
    }
  }, [animation, inView]);

  return (
    <section className='section'>
      <div className='container center'>
        <div ref={ref} className={styles.wrapper}>
          <motion.div animate={animation} className={styles.image}>
            <Image
              style={{ borderRadius: '2.4rem' }}
              src='/images/interier.png'
              alt='interier image'
              width={423}
              height={536}
              layout='responsive'
            />
          </motion.div>
          <div className={styles.content}>
            <h2 className='heading-1-black'>Book Your Table Today</h2>
            <p className={styles.text}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint Amet minim mollit non deserunt ullamco est sit aliqua
              dolor do amet sint
            </p>
            <Link href='/reservation'>
              <a className='btn'>Reservation</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
