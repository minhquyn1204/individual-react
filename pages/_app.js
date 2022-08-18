import Layout from '../components/layout';
import '../styles/globals.css';
import { CartProvider } from 'react-use-cart';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div style={{ maxWidth: 1140, margin: 'auto' }}>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </div>
    </Layout>
  );
}

export default MyApp;
