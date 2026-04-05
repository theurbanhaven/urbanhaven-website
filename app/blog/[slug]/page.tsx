import { getBlogBySlug } from "../../lib/api";
import BlogContent from "../../components/blog/BlogContent";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import CTASection from "../../LandingPage/CTASection";

export default async function BlogDetail({ params }: any) {
  const { slug } = await params;

  const blog = await getBlogBySlug(slug);

  if (!blog) return <div className="p-6">Blog not found</div>;

  return (
    <>
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-25">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4">
          {blog.title}
        </h1>

        {blog.coverImage?.url && (
          <img
            src={`http://localhost:1337${blog.coverImage.url}`}
            className="w-full h-52 sm:h-72 lg:h-96 object-cover rounded-lg mb-6"
          />
        )}

        <div className="prose max-w-none">
          <BlogContent content={blog.content} />
        </div> 
      </div>

      <CTASection />
      <Footer />
    </>
  );
}
