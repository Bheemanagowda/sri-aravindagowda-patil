import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import RealHelpBanner from "./components/RealHelpBanner";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RealHelpPage from "./pages/RealHelpPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import ManifestoPage from "./pages/ManifestoPage";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-orange-500 selection:text-white">
      {/* Scroll to top automatically when route changes */}
      <ScrollToTop />

      {/* Global Topbar & Navigation */}
      <TopBar />
      <Navbar />

      {/* Main Multi-Page Route Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <>
                <AboutPage />
                <RealHelpBanner />
              </>
            }
          />
          <Route path="/real-help" element={<RealHelpPage />} />
          <Route
            path="/gallery"
            element={
              <>
                <GalleryPage />
                <RealHelpBanner />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <ContactPage />
                <RealHelpBanner hideCta={true} />
              </>
            }
          />
          <Route
            path="/manifesto"
            element={
              <>
                <ManifestoPage />
                <RealHelpBanner />
              </>
            }
          />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>

      {/* Global Unified Footer */}
      <Footer />
    </div>
  );
};

export default App;