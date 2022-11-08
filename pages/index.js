import Discover from "../components/Discover/Discover";
import Features from "../components/Features/Features";
import Hero from "../components/Hero/Hero";
import Layout from "../components/Layout/Layout";
import MenuFavourite from "../components/Menu/MenuFavourite";
import NewsMain from "../components/News/NewsMain";
import Offers from "../components/Offers/Offers";
import Subscribtion from "../components/Subscribtion/Subscribtion";
import Team from "../components/Team/Team";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <Discover />
      <Features />
      <Team />
      <Offers />
      <MenuFavourite />
      <NewsMain />
      <Testimonials />
      <Subscribtion />
    </Layout>
  );
}

export default HomePage