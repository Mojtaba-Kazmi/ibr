import BlogDetail from "../components/blog/BlogDetail";
import { getBlogData } from "../../../shared/utils/getBlogData";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const { blog } = await getBlogData(slug);

  // Prioritize `excerpt` for meta description and fallback to a default value
  const description =
    blog.excerpt ||
    "Discover expert walling services in Adelaide, including brick repairs, rendering, texture coatings, and more to improve your property.";

  // Use the blog thumbnail or a default image for OpenGraph
  const imageUrl = blog.thumbnail
  ? `https://www.hqws.com.au${blog.thumbnail}`
  : "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737897009/HQWS-Logo-web_mhb0ic.svg";

  // Return metadata structure for SEO & Open Graph
  return {
    title: `${blog.title} | HQWS`,
    description,
    openGraph: {
      title: blog.title,
      description,
      url: `https://hqws.com.au/blog/${slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `Cover image for the blog: ${blog.title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${blog.title} | HQWS`,
      description,
      image: imageUrl,
    },
  };
}

export default async function BlogPostDetailPage({ params }) {
  // Ensure params is awaited properly before accessing its properties
  const awaitedParams = await params;
  const { slug } = awaitedParams;

  const { blog, relatedBlogs } = await getBlogData(slug);

  return <BlogDetail blog={blog} relatedBlogs={relatedBlogs} />;
}
