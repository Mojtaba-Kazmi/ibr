import HeroBanner from "./components/hero/HeroBanner";
import { getHomePageData } from "./shared/utils/getHomePageData";
import About from "./(pages)/about/components/about/About";
import Services from "./(pages)/services/components/services/Services";
import BlogPosts from "./(pages)/blog/components/blog/BlogPosts";
import ContactForm from "./components/form/ContactForm";

export default async function Home() {

  const { homeAboutData, latestServices, latestBlogPosts } = await getHomePageData();

  return (
    <>
      <HeroBanner />
      <About homeAboutInfo={homeAboutData} />
      <Services latestServices={latestServices} />
      <BlogPosts latestPosts={latestBlogPosts} />
      <ContactForm />
    </>
  );
}
