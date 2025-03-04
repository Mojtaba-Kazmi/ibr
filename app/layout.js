import { defaultMetadata } from "@/meta/metadata";
import "./globals.css";
import Footer from "./shared/footer/Footer";
import Header from "./shared/header/Header";
import CallToActionButton from "./shared/cta/CTAButton";
import ScrollToTop from "./shared/scrolltop/ScrollTo";
import PageLoader from "./components/loader/PageLoader";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <PageLoader>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <CallToActionButton />
          <ScrollToTop />
        </PageLoader>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
