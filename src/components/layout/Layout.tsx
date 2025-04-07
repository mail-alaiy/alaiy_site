import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <div className="md:hidden fixed top-4 left-6 z-40">
      <span className="text-xl font-display font-bold text-primary">
  alaiy
</span>
      </div>

      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;
