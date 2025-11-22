import { useState, useEffect } from "react";
import GreyLogo from "../assets/greynoise-logo.png";

export default function HeroSection() {
  const fullText = "GREYNOISE";
  const [displayText, setDisplayText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    let index = 0;
    let deleting = false;

    const interval = setInterval(() => {
      if (!deleting) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;

        if (index === fullText.length) {
          setTimeout(() => {
            deleting = true;
          }, 1000);
        }
      } else {
        setDisplayText(fullText.slice(0, index - 1));
        index--;

        if (index === 0) {
          deleting = false;
        }
      }
    }, 120);

    const cursorBlink = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 450);

    return () => {
      clearInterval(interval);
      clearInterval(cursorBlink);
    };
  }, []);

  return (
    <section
      className="
        relative
        min-h-screen w-full 
        flex items-center justify-center 
        px-6 lg:px-20
      "
    >
      {/* ---- CONTENT ONLY (background dipindah ke PageBackground) ---- */}
      <div className="relative z-10 max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT TEXT */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Welcome To
            <br />

            {/* TYPEWRITER */}
            <span className="text-[#ff9418]">
              {displayText}
              <span className={cursorVisible ? "opacity-100" : "opacity-0"}>
                |
              </span>
            </span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg max-w-md mx-auto lg:mx-0">
            Website portofolio dan blog Kelompok Greynoise Pengkaderan BLUG 2025!
          </p>

          <div className="flex gap-5 mt-8 justify-center lg:justify-start">
            <a
              href="/our-team"
              className="bg-yellow-100 text-black px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Our Teams
            </a>

            <a
              href="/blog"
              className="bg-yellow-100 text-black px-8 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition"
            >
              Our Blog
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div
            className="
              w-[330px] h-[330px] 
              lg:w-[420px] lg:h-[420px] 
              rounded-3xl bg-background-80 backdrop-blur-lg 
              shadow-xl flex items-center justify-center
            "
          >
            <img
              src={GreyLogo}
              className="w-[65%] object-contain drop-shadow-2xl"
              alt="Greynoise Logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
