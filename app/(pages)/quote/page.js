import ContactForm from "../../components/form/ContactForm";
import PageHeader from "../../shared/breadcrumbs/PageHeader";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Get a Quote | Expert Bathroom Renovation Services in Melbourne",
  description:
    "Request a free quote from Innovate Bathroom Renovations for professional bathroom and home renovation services in Melbourne and its suburbs. Get started today!",
  openGraph: {
    title: "Get a Quote | Expert Bathroom Renovation Services in Melbourne",
    description:
      "Looking for expert bathroom and home renovation services in Melbourne? Contact Innovate Bathroom Renovations for a free quote and professional consultation today!",
  },
});

const GetFreeQuotePage = () => {
  return (
    <>
      <PageHeader
        title="Request a Quote"
        description="Get a personalized, no-obligation quote for your bathroom or home renovation project. Innovate Bathroom Renovations offers expert services tailored to your needs across Melbourne and its suburbs."
        breadcrumb="Request a Quote"
      />
      <ContactForm />
    </>
  );
};

export default GetFreeQuotePage;
