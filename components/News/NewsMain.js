import Link from 'next/link';
import styles from './NewsMain.module.css'
import news from '../../constants/news';
import NewsCard from './NewsCard';

const NewsMain = () => {
  return (
    <div className={styles.bg}>
      <section className='section'>
        <div className='container center'>
          <h2 className='heading-1-black text-center'>
            Welcome to Our Newsletter
          </h2>
          <div className={styles.wrapper}>
            {news.filter(item => item.feature === true).map((item, id) => {
              return <NewsCard key={id} {...item}/>
            })}
          </div>
          <Link href='/news'>
            <a className={styles.btn}>See All</a>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default NewsMain