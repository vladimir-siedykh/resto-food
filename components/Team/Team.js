import Image from 'next/image';
import styles from './Team.module.css';

const Team = () => {
  return (
    <section className='section'>
      <div className='container center'>
        <h2 className='heading-1-black text-center'>Meet Our Master Chef</h2>
        <div className={styles.wrapper}>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                src='/images/team-1.png'
                alt='photo team'
                width={288}
                height={374}
                layout='fixed'
                className={styles.img}
              />
            </div>
            <h6 className='heading-2'>Brooklyn Simmons</h6>
            <div className={styles.post}>Master Chef</div>
            <div className={styles.contacts}>
              <Image
                src='/images/icon-team-f.svg'
                alt='icon facebook'
                width={24}
                height={24}
              />
              <Image
                src='/images/icon-team-i.svg'
                alt='icon instagram'
                width={24}
                height={24}
              />
              <Image
                src='/images/icon-team-w.svg'
                alt='icon whatsapp'
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                src='/images/team-2.png'
                alt='photo team'
                width={288}
                height={374}
                layout='fixed'
                className={styles.img}
              />
            </div>
            <h6 className='heading-2'>Robert Hawkins</h6>
            <div className={styles.post}>Master Chef</div>
            <div className={styles.contacts}>
              <Image
                src='/images/icon-team-f.svg'
                alt='icon facebook'
                width={24}
                height={24}
              />
              <Image
                src='/images/icon-team-i.svg'
                alt='icon instagram'
                width={24}
                height={24}
              />
              <Image
                src='/images/icon-team-w.svg'
                alt='icon whatsapp'
                width={24}
                height={24}
              />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.img}>
              <Image
                src='/images/team-3.png'
                alt='photo team'
                width={288}
                height={374}
                layout='fixed'
                className={styles.img}
              />
            </div>
            <h6 className='heading-2'>Cameron Williamson</h6>
            <div className={styles.post}>Master Chef</div>
            <div className={styles.contacts}>
              <Image
                src='/images/icon-team-f.svg'
                alt='icon facebook'
                width={24}
                height={24}
              />
              <Image
                src='/images/icon-team-i.svg'
                alt='icon instagram'
                width={24}
                height={24}
              />
              <Image
                src='/images/icon-team-w.svg'
                alt='icon whatsapp'
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
