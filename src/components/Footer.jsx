import React from "react";
import blugIcon from "../assets/blug-icon.svg";
import greynoiseLogo from "../assets/greynoise-rmv-bg.png";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-custom py-10 text-center">
        <div className="flex flex-col items-center gap-6">
          <div className="footer-logos flex items-center gap-6">
            <img src={blugIcon} alt="BLUG" className="h-12 w-auto" />

            <div className="greynoise-brand flex items-center gap-4">
              <img src={greynoiseLogo} alt="Greynoise" className="h-15 w-auto gn-logo" />
              <div className="gn-divider" aria-hidden="true" />
              <span className="gn-text">Greynoise</span>
            </div>
          </div>

          <p className="text-sm text-gray-300/80">
            Website pengenalan Linux untuk tugas pengkaderan BLUG 2025
          </p>

          <nav>
            <ul className="flex gap-8 text-sm">
              <li>
                <a href="/" className="hover:underline hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/our-team" className="hover:underline hover:text-white">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:underline hover:text-white">
                  Our Blog
                </a>
              </li>
            </ul>
          </nav>

          <div className="pt-4">
            <p className="text-xs text-gray-400">
              © 2025 BLUG - Greynoise. Semua hak cipta dilindungi.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
