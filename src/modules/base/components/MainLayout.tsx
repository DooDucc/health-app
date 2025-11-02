import Navbar from "./Navbar";
import Footer from "./Footer";
import { componentScroll } from "../assets";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-gray-50 pt-16">{children}</main>
      <Footer />

      <button
        onClick={scrollToTop}
        className="fixed right-4 z-50 hover:opacity-80 transition-opacity duration-200"
        style={{
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <img src={componentScroll} alt="Scroll to top" className="w-12 h-12" />
      </button>
    </div>
  );
};

export default MainLayout;
