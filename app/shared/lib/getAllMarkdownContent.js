import { fetchMarkdownFiles } from './fetchMarkdownFiles';
import { getLatestBlogPosts } from './getLatestBlogPosts';

// Define initial directories for non-blog content
const directories = ["markdown/about", "markdown/services", "markdown/projects", "markdown/privacy-policy" ];

// Cache to store the content for efficiency
let cachedContent = null;

/**
 * Fetches all markdown content asynchronously and caches it for efficiency
 */
export const getAllMarkdownContent = async () => {
  if (cachedContent) return cachedContent; // Return cached content if available

  // Fetch content for non-blog directories in parallel
  const allContentArray = await Promise.all(
    directories.map((directory) => fetchMarkdownFiles(directory))
  );

  // Fetch the latest blog posts (3 posts) separately
  const latestBlogPosts = await getLatestBlogPosts();

  // Combine the content into one object
  const allContent = directories.reduce((acc, directory, index) => {
    acc[directory] = allContentArray[index]; // Store content for non-blog directories
    return acc;
  }, {});

  // Add the latest blog posts to the result
  allContent["markdown/blog"] = latestBlogPosts;

  cachedContent = allContent; // Cache the content

  return allContent;
};