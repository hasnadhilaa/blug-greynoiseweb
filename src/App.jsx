import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-team" element={<div>Our Team Page</div>} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}
