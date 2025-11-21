import BlogPage from "../components/BlogPage";

export default function Blog() {
  return (
    <div className="min-h-screen container-custom">
      <div className="blur-blob-left"></div>
      <div className="blur-blob-right"></div>
      <div className="stars-bg"></div>

      {/* Main */}
      <BlogPage />
    </div>
  )
}