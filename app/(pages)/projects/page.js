import dynamic from "next/dynamic";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";
import { getHomePageData } from "@/app/shared/utils/getHomePageData";
import Loading from "@/app/shared/loading/loading";
import PageHeader from "@/app/shared/breadcrumbs/PageHeader";

export const metadata = generatePageMetadata({
  title: "Our Recent Projects - Innovate Bathroom Renovations",
  description:
    "Explore our recent successful projects at Innovate Bathroom Renovations, specializing in bathroom and home renovations, including tiling, waterproofing, and more across Melbourne and its suburbs.",
  openGraph: {
    title: "Our Recent Projects - Innovate Bathroom Renovations",
    description:
      "Discover the latest projects completed by Innovate Bathroom Renovations, including bathroom renovations, kitchen makeovers, and balcony restorations across Melbourne.",
    images: [
      {
        url: "https://res.cloudinary.com/den67ouct/image/upload/v1740960597/IBR_ii2xqi.png",
        width: 1200,
        height: 630,
        alt: "Innovate Bathroom Renovations Projects",
      },
    ],
    url: "https://www.innovatebathroomrenovations.com.au/projects",
  },
});

// Dynamically import Portfolio with a loading state (optional)
const Portfolio = dynamic(() => import("../../components/project/Portfolio"), {
  loading: () => <Loading />,
});

const PortfolioPage = async () => {
  const { getPortfolio } = await getHomePageData();

  return (
    <>
      <PageHeader
        title="Our Successful Projects"
        description="Take a look at some of our recent successful bathroom and home renovation projects. We specialize in bathroom and kitchen renovations, balcony restorations, tiling, waterproofing, caulking, and re-grouting across Melbourne and its suburbs."
        breadcrumb="Projects Page"
      />
      <Portfolio portfolio={getPortfolio} />;
    </>
  );
};

export default PortfolioPage;
