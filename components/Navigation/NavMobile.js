import Link from 'next/link';
import styles from './NavMobile.module.css';
import { motion } from 'framer-motion';

const NavMobile = ({ setOpen }) => {
  const handle = () => {
    setTimeout(() => {
      setOpen(!setOpen);
    }, 300);
  };

  const list = {
    visible: {
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.1,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: 'afterChildren',
      },
    },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };


  return (
    <motion.nav
      className={styles.nav}
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: '100vh', opacity: 1 }}
      transition={{ duration: 0.5 }}
      exit={{
        height: 0,
        opacity: 0,
      }}
    >
      <motion.ul
        initial='hidden'
        animate='visible'
        variants={list}
        className={styles.list}
      >
        <motion.li variants={item}>
          <Link href='/'>
            <a onClick={handle}>
              Home
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/about'>
            <a onClick={handle}>
              About
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/menu'>
            <a onClick={handle}>
              Menu
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/news'>
            <a onClick={handle}>
              News
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/contact'>
            <a onClick={handle}>
              Contact
            </a>
          </Link>
        </motion.li>
        <motion.li variants={item}>
          <Link href='/reservation'>
            <a className={styles.btn} onClick={handle}>
              Book a Table
            </a>
          </Link>
        </motion.li>
      </motion.ul>
    </motion.nav>
  );
};

export default NavMobile;
