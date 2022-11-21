import { motion } from 'framer-motion';
import { useEffect } from 'react';
import styles from './MenuToggle.module.css';

const Path = (props) => (
  <motion.path
    fill='transparent'
    strokeLinecap='round'
    strokeWidth='3'
    {...props}
  />
);

const transition = { duration: 0.33 };

const MenuToggle = ({toggle, isOpen}) => {

  useEffect(() => {
    //get original value of body
    const originalStyle = window.getComputedStyle(document.body).overflow;
    console.log(originalStyle);
    //prevent scrolling on mount
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    // re-enable scrolling when component unmounts
    return () => (document.body.style.overflow = originalStyle);
  }, [isOpen]);

  return (
    <div onClick={toggle} className={styles.toggle}>
      <svg width='23' height='23' viewBox='0 0 23 23' onClick={toggle} className={styles.toggle}>
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5', stroke: '#ffffff' },
            open: { d: 'M 3 16.5 L 17 2.5', stroke: '#ffffff' },
          }}
          transition={transition}
        />
        <Path
          d='M 2 9.423 L 20 9.423'
          stroke='#ffffff'
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          initial={false}
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346', stroke: '#ffffff' },
            open: { d: 'M 3 2.5 L 17 16.346', stroke: '#ffffff' },
          }}
          transition={transition}
        />
      </svg>
    </div>
  );
};

export default MenuToggle;
