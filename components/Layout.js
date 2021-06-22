import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container py-4">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
