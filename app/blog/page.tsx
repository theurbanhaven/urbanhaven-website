import { getBlogs } from "../lib/api";
import BlogCard from "../components/blog/BlogCard";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTASection from "../LandingPage/CTASection";

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <>
      <Navbar />

      <div className="px-4 sm:px-6 lg:px-12 mt-30 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>

      <CTASection />
      <Footer />
    </>
  );
}