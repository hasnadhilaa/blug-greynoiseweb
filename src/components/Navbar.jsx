import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaUsers, FaGlobe } from "react-icons/fa";
import BlugLogo from "../assets/blug-icon.svg";

const navLinks = [
  { name: "Home", path: "/", icon: <FaHome /> },
  { name: "Our Team", path: "/our-team", icon: <FaUsers /> },
  { name: "Our Blog", path: "/blog", icon: <FaGlobe /> },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav
  className={`
    fixed top-6 left-1/2 -translate-x-1/2
    max-w-4xl w-[90%]
    px-6 lg:px-10 py-4
    flex items-center justify-between
    bg-white/15 backdrop-blur-md
    shadow-lg rounded-2xl
    transition-all duration-300 z-50
    ${scrolled ? "shadow-xl scale-[1.01]" : ""}
  `}
>


      {/* Left logo */}
      <div className="flex items-center gap-3">
        <img
          src={BlugLogo}
          alt="BLUG Logo"
          className="h-10 w-auto object-contain shrink-0"
        />
      </div>

      {/* Right nav items */}
      <div className="flex items-center gap-10">
        {navLinks.map((link) => {
          const isActive = pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-2 text-lg font-medium transition
              ${isActive ? "text-[#e47a00]" : "text-black hover:text-[#e47a00]"}`}
            >
              {link.icon}
              {link.name}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
