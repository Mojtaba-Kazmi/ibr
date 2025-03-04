import { getPostsByCategory} from "../../shared/utils/posts";
import { getUniqueCategories } from "../../shared/utils/getUniqueCategories";
import AllBlogPosts from "./components/blog/AllBlogPosts";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Bathroom Renovation Blog | Tips & Trends - Innovate",
  description:
    "Stay updated with expert tips, trends, and insights on bathroom renovations, tiling, waterproofing, and more in Melbourne. Read now!",
  openGraph: {
    title: "Bathroom Renovation Blog | Expert Advice & Trends - Innovate",
    description:
      "Explore expert insights on bathroom and home renovations, tiling, waterproofing, and more. Get inspiration for your next project in Melbourne.",
    url: "https://innovatebathroomrenovations.com.au/blog",
  },
});

export default async function BlogPage({ searchParams }) {
  // Await the searchParams object before using its properties
  const awaitedSearchParams = await searchParams;
  const category = awaitedSearchParams.category || "All"; // Default category is "All"
  const page = parseInt(awaitedSearchParams.page) || 1; // Default page is 1
  const POSTS_PER_PAGE = 6;

  // Fetch all posts for category filtering
  const allPosts = await getPostsByCategory(); // Get all posts first
  const categories = getUniqueCategories(allPosts); // Extract unique categories
  const posts = await getPostsByCategory(category); // Get filtered posts for the selected category

  // Pagination logic
  const totalPosts = posts.length;
  const pageCount = Math.ceil(totalPosts / POSTS_PER_PAGE);
  const paginatedPosts = posts.slice(
    (page - 1) * POSTS_PER_PAGE,
    page * POSTS_PER_PAGE
  );

  return (
    <section>
      {/* Pass data to AllBlogPosts */}
      <AllBlogPosts
        paginatedPosts={paginatedPosts}
        page={page}
        pageCount={pageCount}
        allPosts={posts} // Filtered posts
        categories={categories} // Unique categories
        category={category}
      />
    </section>
  );
}