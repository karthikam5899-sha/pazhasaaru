import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Offers from "./components/Offers";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetailPage from "./components/ProductDetailPage";
import IntroAnimation from "./components/IntroAnimation";

export default function App() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("juice-theme");
    if (saved) return saved === "dark";
    return window.matchMedia?.("(prefers-color-scheme: dark)").matches ?? false;
  });
  const [activeMenuType, setActiveMenuType] = useState("Fresh Juice");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("juice-theme", dark ? "dark" : "light");
  }, [dark]);

  const pageContent = selectedProduct ? (
    <ProductDetailPage
      product={selectedProduct}
      onClose={() => setSelectedProduct(null)}
    />
  ) : (
    <div className="min-h-screen overflow-x-hidden bg-[var(--page-surface)] text-gray-900 dark:bg-[var(--page-dark)] dark:text-white">
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Menu
          activeCategory={activeMenuType}
          setActiveCategory={setActiveMenuType}
          onSelectProduct={setSelectedProduct}
        />
        <Offers activeCategory={activeMenuType} />
        <About />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );

  return (
    <>
      {!introComplete && <IntroAnimation onFinish={() => setIntroComplete(true)} />}
      <div className={introComplete ? "intro-content-ready" : "intro-content-waiting"}>
        {pageContent}
      </div>
    </>
  );
}