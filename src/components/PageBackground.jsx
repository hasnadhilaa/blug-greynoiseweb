export default function PageBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 w-full h-full z-[-1]">
      {/* Blur kiri bawah */}
      <div className="blur-blob-left"></div>
      {/* Stars kiri bawah */}
      <div className="stars-left"></div>

      {/* Blur kanan atas */}
      <div className="blur-blob-right"></div>
      {/* Stars kanan atas */}
      <div className="stars-right"></div>
    </div>
  );
}
