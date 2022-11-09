import Head from "next/head";
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
    </>
  );
};

export default NewsPage;
