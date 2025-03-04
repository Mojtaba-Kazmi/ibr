import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/**
 * Fetches markdown files from a given directory
 * @param {string} directory - The directory to fetch markdown files from
 * @returns {Promise<Object[]>} - Array of parsed markdown content
 */
export const fetchMarkdownFiles = async (directory) => {

  const dirPath = path.join(process.cwd(), directory);
  
  if (!fs.existsSync(dirPath)) {
    console.warn(`Directory does not exist: ${dirPath}`);
    return [];
  }

  const files = await fs.promises.readdir(dirPath);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));
  
  // Read and parse markdown files asynchronously
  return Promise.all(
    markdownFiles.map(async (fileName) => {
      const filePath = path.join(dirPath, fileName);
      const fileContent = await fs.promises.readFile(filePath, "utf8");
      const { content, data } = matter(fileContent); // Parse content and frontmatter
      return {
        filename: fileName.replace(".md", ""),
        content,
        ...data, // Include frontmatter data
      };
    })
   
  );
};