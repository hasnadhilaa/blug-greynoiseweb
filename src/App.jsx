import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageBackground from "./components/PageBackground";

import Home from "./pages/Home";
import OurTeam from "./pages/OurTeams";
import Blog from "./pages/Blog";

function AppContent() {
  const location = useLocation();

  // halaman yang ingin punya footer
  const showFooter = ["/blog", "/our-team"].includes(location.pathname);

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden z-0">
      <Navbar />
      <PageBackground />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {showFooter && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
