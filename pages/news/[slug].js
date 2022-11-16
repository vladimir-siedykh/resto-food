import news from '../../constants/news';
import TitlePage from '../../components/TitlePage/TitlePage';
import Head from 'next/head';
import Subscribtion from '../../components/Subscribtion/Subscribtion';
import NewsDetails from '../../components/News/NewsDetails';
import Comments from '../../components/Comments/Comments';

export const getStaticProps = async ({ params }) => {
  const newsList = news.filter((x) => x.slug.toString() === params.slug);
  return {
    props: {
      newsDetail: newsList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = news.map((article) => ({
    params: { slug: article.slug.toString() },
  }));

  return { paths, fallback: false };
};

const NewsDetailPage = ({ newsDetail }) => {
  console.log(newsDetail);
  return (
    <>
      <Head>
        <title>{`Restofood - ${newsDetail.title}`}</title>
      </Head>
      <TitlePage
        title={newsDetail.title}
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <NewsDetails newsDetail={newsDetail} />
      <Comments />
      <Subscribtion />
    </>
  );
};

export default NewsDetailPage;
