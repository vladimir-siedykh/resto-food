import { AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <AnimatePresence>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AnimatePresence>
  );
}

export default MyApp;
