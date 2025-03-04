import fs from "fs/promises"; // Use fs.promises for async file operations
import path from "path";
import matter from "gray-matter";

// Directory containing blog posts
const postsDirectory = path.join(process.cwd(), "markdown/blog");

async function fetchAllBlogs() {
  const filenames = await fs.readdir(postsDirectory); // Async readdir

  const blogPromises = filenames.map(async (filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = await fs.readFile(filePath, "utf8"); // Async readFile
    const { data, content } = matter(fileContents);
  
    return {
      slug: filename.replace(".md", ""),
      title: data.title || "Untitled Blog",
      date: data.date || null,
      author: data.author || "Unknown",
      category: data.category || "General",
      thumbnail: data.thumbnail || null,
      excerpt: data.excerpt || "No excerpt available", // Default to "No excerpt available" if missing
      content,
    };
  });

  return await Promise.all(blogPromises);
}

// Fetch paths for static generation
export async function generateStaticParams() {
  const blogs = await fetchAllBlogs(); // Await the async function
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

// Fetch metadata for SEO
export async function generateMetadata({ params }) {
  const blogs = await fetchAllBlogs(); // Fetch all blogs
  const blog = blogs.find((post) => post.slug === params.slug);

  if (!blog) {
    throw new Error(`Blog with slug "${params.slug}" not found.`);
  }

  // Return metadata using `excerpt`
  return {
    title: `${blog.title} | HQWS`,
    description: blog.excerpt || "Walling & Rendering Expertise | Trends, Tips & Insights - HQWS",
    openGraph: {
      title: blog.title,
      description: blog.excerpt || "Stay updated with the latest trends, expert insights, and industry news on walling, rendering, and coatings in Adelaide. Read more!",
      url: `https://hqws.com.au/blog/${params.slug}`,
      images: [
        {
          url: blog.thumbnail || "https://res.cloudinary.com/dmrdlnzkm/image/upload/v1737897009/HQWS-Logo-web_mhb0ic.svg",
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
  };
}

// Fetch blog data and related articles
export async function getBlogData(slug) {
  const blogs = await fetchAllBlogs(); // Await the async function

  // Find the requested blog
  const blogPost = blogs.find((blog) => blog.slug === slug);

  if (!blogPost) {
    throw new Error(`Blog with slug "${slug}" not found.`);
  }

  // Get related blogs (same category, exclude the current one)
  const relatedBlogs = blogs
    .filter((blog) => blog.category === blogPost.category && blog.slug !== slug)
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date, newest first
    .slice(0, 2); // Limit to 4 related blogs

  return { blog: blogPost, relatedBlogs };
}