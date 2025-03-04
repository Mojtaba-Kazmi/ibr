import { getPrivacyPolicyData } from "../../shared/utils/getPrivacyPolicyData";
import PrivacyPolicy from "./components/privacy-policy/PrivacyPolicy";
import { generatePageMetadata } from "../../../meta/generatePageMetadata";

export const metadata = generatePageMetadata({
  title:
    "Privacy Policy | Innovate Bathroom Renovations - Your Data, Our Commitment",
  description:
    "Read the Innovate Bathroom Renovations Privacy Policy to understand how we collect, use, and protect your personal information while providing bathroom and home renovation services in Melbourne.",
  openGraph: {
    title:
      "Privacy Policy | Innovate Bathroom Renovations - Your Data, Our Commitment",
    description:
      "Learn how Innovate Bathroom Renovations ensures data protection and privacy for clients seeking bathroom and home renovation services in Melbourne. Your privacy is our priority.",
  },
});

export default async function LegalPage() {
  const privacyPolicyData = await getPrivacyPolicyData();

  return <PrivacyPolicy privacyPolicyData={privacyPolicyData} />;
}
