import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeams";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

function Layout() {
  const location = useLocation();
  
  // halaman yang punya footer
  const showFooter = ["/blog", "/our-team"].includes(location.pathname);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      {showFooter && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}