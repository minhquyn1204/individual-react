import Footer from './Footer';
import Headers from './Header';

const Layout = ({ children, categories, seo }) => (
  <>
    <Headers />
    {children}
    <Footer />
  </>
);

export default Layout;
