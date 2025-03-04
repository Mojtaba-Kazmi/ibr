import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";

export async function getPostsByCategory(category = "All") {
  const postsDirectory = path.join(process.cwd(), "markdown/blog");
  const filenames = await fs.readdir(postsDirectory);

  const allPosts = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        filename: filename.replace(".md", ""),
        ...data,
      };
    })
  );

  // Filter posts by category if not "all"
  const filteredPosts = category === "All"
    ? allPosts
    : allPosts.filter((post) => post.category.toLowerCase() === category.toLowerCase());

  // Sort posts by date in descending order (latest first)
  return filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
}