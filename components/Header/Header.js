import Link from 'next/link';

import { useMediaQuery } from 'react-responsive';
import { DeviceSize } from '../../constants/responsive';
import NavigationMobile from '../Navigation/NavigationMobile';
import NavDesktop from '../Navigation/NavDesktop';
import { useEffect, useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.tablet });

  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href='/'>
          <a>
            Resto<span>food</span>
          </a>
        </Link>
      </div>
      {/* <nav className={styles.nav}>
        <ul className={styles.list}>
          <li>
            <Link href='/'>
              <a className=''>Home</a>
            </Link>
          </li>
          <li>
            <Link href='/about'>
              <a className=''>About</a>
            </Link>
          </li>
          <li>
            <Link href='/menu'>
              <a className=''>Menu</a>
            </Link>
          </li>
          <li>
            <Link href='/news'>
              <a className=''>News</a>
            </Link>
          </li>
          <li>
            <Link href='/contact'>
              <a className=''>Contact</a>
            </Link>
          </li>
          <li>
            <Link href='/reservation'>
              <a className={styles.btn}>Book a Table</a>
            </Link>
          </li>
        </ul>
      </nav> */}
      {!isMobile && <NavDesktop />}
      {isMobile && <NavigationMobile />}
    </header>
  );
};

export default Header;
