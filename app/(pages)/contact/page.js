import ContactForm from "../../components/form/ContactForm";
import PageHeader from "../../shared/breadcrumbs/PageHeader";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title: "Contact Innovate Bathroom Renovations | Get a Quote for Bathroom & Home Renovations in Melbourne",
  description:
    "Reach out to Innovate Bathroom Renovations for expert bathroom and home renovations in Melbourne. Get a personalized quote or consultation today!",
});

const ContactPage = () => {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with Innovate Bathroom Renovations for expert bathroom and home renovations in Melbourne. We're here to answer your questions and provide tailored solutions."
        breadcrumb="Contact Us"
      />
      <ContactForm />
    </>
  );
};

export default ContactPage;
