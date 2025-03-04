// metadata/generateMetadata.js
import { defaultMetadata } from "./metadata";

export const generatePageMetadata = ({ title, description }) => ({
  ...defaultMetadata,
  title: title || defaultMetadata.title,
  description: description || defaultMetadata.description,
  openGraph: {
    ...defaultMetadata.openGraph,
    title: title || defaultMetadata.openGraph.title,
    description: description || defaultMetadata.openGraph.description,
  },
});