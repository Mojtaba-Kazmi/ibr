import { getAllMarkdownContent } from "../lib/getAllMarkdownContent";
import { homeAboutFetched } from "../../content/about/homeAboutFetched";

/**
 * Parses Markdown content into sections based on headings (e.g., ### Title).
 * Extracts content before the first "###" as the "primaryContent" body content.
 */
const parseMarkdownSections = (markdownContent) => {
  if (!markdownContent) return { primaryContent: "", sections: {} };

  const [primaryContent, ...sections] = markdownContent.split("###");
  const parsedSections = sections.reduce((acc, section) => {
    const [title, ...content] = section.split("\n"); // First line is the title, rest is content
    if (title.trim()) {
      acc[title.trim()] = content.join("\n").trim(); // Store title as key and joined content as value
    }
    return acc;
  }, {});

  return {
    primaryContent: primaryContent.trim(), // Content before the first "###"
    sections: parsedSections, // Sections keyed by their title
  };
};

/**
 * Extracts images from a specific "Images" section in Markdown content.
 */
const extractImages = (imageSection) => {
  if (!imageSection) return [];
  return imageSection
    .split("\n")
    .map((line) => {
      const match = line.match(/!\[([^\]]+)\]\(([^)]+)\)/); // Match the image pattern
      return match ? { alt: match[1], src: match[2] } : null; // Return {alt, src} or null
    })
    .filter(Boolean); // Remove null values
};

export async function getHomePageData() {
  const allMarkdownContent = await getAllMarkdownContent();

  // Get "home-about" file content
  const homeAboutFile =
    allMarkdownContent["markdown/about"]?.find(
      (file) => file.filename === "home-about"
    );
  const homeAboutDescription = homeAboutFile?.content || "";

  // Get latest services, blog posts, and privacy policy content
  const latestServices = allMarkdownContent["markdown/services"] || [];
  const latestBlogPosts =
    allMarkdownContent["markdown/blog"] || [];
  const privacyPolicyFiles =
    allMarkdownContent["markdown/privacy-policy"] || [];
  const privacyPolicyData = Object.fromEntries(
    privacyPolicyFiles.map((file) => [file.filename, file.content])
  );

  // Parse portfolio content and extract images and descriptions
  const getPortfolio =
    allMarkdownContent["markdown/projects"]?.map((file) => {
      const { primaryContent, sections } = parseMarkdownSections(file.content);
      return {
        ...file,
        primaryContent, // Extract the content before sections
        description: sections["Description"] || "", // Extract "Description" section
        images: extractImages(sections["Images"]), // Extract "Images" section
      };
    }) || [];

  // Construct and return data
  return {
    homeAboutData: {
      ...homeAboutFetched,
      description: homeAboutDescription, // Override description dynamically
    },
    latestServices,
    latestBlogPosts,
    privacyPolicyData,
    getPortfolio,
  };
}