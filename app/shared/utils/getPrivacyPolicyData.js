// utils/getPrivacyPolicyData.js
import { getAllMarkdownContent } from "../lib/getAllMarkdownContent";

export async function getPrivacyPolicyData() {
  const allMarkdownContent = await getAllMarkdownContent();

  // Get privacy policy content from its directory
  const privacyPolicyFiles =
    allMarkdownContent["markdown/privacy-policy"] || [];

  // Return an object with filenames as keys
  return privacyPolicyFiles.reduce((acc, file) => {
    acc[file.filename] = file.content;
    return acc;
  }, {});
}
