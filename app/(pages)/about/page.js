import About from "./components/about/About";
import FAQ from "./components/faq/FAQ";
import PageHeader from "../../shared/breadcrumbs/PageHeader";
import { welcomeData } from "../../content/about/welcome-data";
import { whyChooseData } from "../../content/about/why-choose";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "About Innovate Bathroom Renovations | Melbourne Experts",
  description:
    "Innovate Bathroom Renovations specializes in high-quality bathroom and home renovations in Melbourne. Tiling, waterproofing, caulking & more.",
  openGraph: {
    title: "About Innovate Bathroom Renovations | Melbourne Experts",
    description:
      "Experienced renovators delivering premium bathroom and home renovations across Melbourne. Quality craftsmanship, waterproofing, tiling, and more.",
  },
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Innovate Bathroom Renovations"
        description="Specialists in high-quality bathroom and home renovations across Melbourne and its suburbs. We deliver expert craftsmanship in bathroom and kitchen renovations, tiling, waterproofing, and more."
        breadcrumb="About Page"
      />
      <About welcomeData={welcomeData} whyChooseData={whyChooseData} />
      <FAQ />
    </>
  );
}
