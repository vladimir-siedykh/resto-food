import Head from "next/head";
import NewsAll from "../../components/News/NewsAll";
import TitlePage from "../../components/TitlePage/TitlePage";

const NewsPage = () => {
  return (
    <>
    <Head>
      <title>Restofood - News</title>
    </Head>
      <TitlePage
        title='News'
        text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint'
      />
      <NewsAll />
    </>
  );
};

export default NewsPage;
