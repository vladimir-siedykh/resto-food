import Image from 'next/image';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import styles from './NewsCard.module.css'

const NewsCard = ({image, title, preview, slug}) => {
  return (
    <div className={styles.item}>
      <div className={styles.img}>
        <Image
          style={{ borderRadius: '0.6rem' }}
          src={image}
          alt={title}
          width={332}
          height={251}
        />
      </div>
      <div className={styles.content}>
        <h5 className='heading-2'>{title}</h5>
        <p>{preview}</p>
        <Link href={`/news/${slug}`}>
          <a className={styles.link}>
            Read Full Article <BiRightArrowAlt />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;