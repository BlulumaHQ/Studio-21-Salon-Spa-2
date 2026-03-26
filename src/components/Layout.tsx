import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";

const Layout = () => {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className={`flex-1 pt-20 pb-14 lg:pb-0${!isHomepage ? " preview-blur" : ""}`}>
        <Outlet />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Layout;
