import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeams";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer /> 
    </Router>

  );
}
