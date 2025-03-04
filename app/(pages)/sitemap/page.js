import Sitemap from "./components/sitemap/Sitemap";
import menuItems from "../../content/sitemap/menu-items";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Sitemap | Innovate Bathroom Renovations - Melbourne",
  description:
    "Explore the sitemap of Innovate Bathroom Renovations. Find all services including bathroom and kitchen renovations, tiling, waterproofing, and more in Melbourne.",
  openGraph: {
    title: "Sitemap | Innovate Bathroom Renovations - Melbourne",
    description:
      "Navigate Innovate Bathroom Renovations' sitemap to find our services, blog, and contact pages. Offering expert renovations in Melbourne.",
  },
});

const SitemapPage = () => {
  return (
    <div>
      <Sitemap menuItems={menuItems} />
    </div>
  );
};

export default SitemapPage;