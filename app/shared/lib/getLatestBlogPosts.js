import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Fetches the latest blog posts (3 posts by default)
 * @param {number} count - Number of posts to fetch (default is 3)
 * @returns {Promise<Object[]>} - Array of the latest blog posts
 */
export const getLatestBlogPosts = async (count = 3) => {
  const blogPostsDirectory = path.join(process.cwd(), "markdown/blog");

  if (!fs.existsSync(blogPostsDirectory)) {
    console.warn(`Directory does not exist: ${blogPostsDirectory}`);
    return [];
  }

  const filenames = await fs.promises.readdir(blogPostsDirectory);

  // Get and sort blog posts by date
  const posts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(blogPostsDirectory, filename);
      const fileContents = await fs.promises.readFile(filePath, "utf8");
      const { data } = matter(fileContents); // Extract frontmatter data
      return { filename, ...data }; // Return the post data
    })
  );

  // Sort by date and return the latest posts
  return posts.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, count);
};