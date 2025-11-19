import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background blobs (diambil dari index.css) */}
      <div className="blur-blob-left"></div>
      <div className="blur-blob-right"></div>
      <div className="stars-bg"></div>

      {/* Main */}
      <HeroSection />
    </div>
  );
}
