import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import LadiesWoven from "./pages/products/LadiesWoven";
import Sweater from "./pages/products/Sweater";
import WipingRags from "./pages/products/WipingRags";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/ladies-woven" element={<LadiesWoven />} />
            <Route path="/products/sweater" element={<Sweater />} />
            <Route path="/products/wiping-rags" element={<WipingRags />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
