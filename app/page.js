import HeroBanner from "./components/navigator/HeroBanner";
import { getHomePageData } from "./shared/utils/getHomePageData";
import About from "./(pages)/about/components/about/About";
import Services from "./(pages)/services/components/services/Services";
import BlogPosts from "./(pages)/blog/components/blog/BlogPosts";
import ContactForm from "./components/form/ContactForm";
import Hero from "./components/hero/Hero";

export default async function Home() {

  const { homeAboutData, latestServices, latestBlogPosts } = await getHomePageData();

  return (
    <>
      <Hero />
      <HeroBanner />
      <About homeAboutInfo={homeAboutData} />
      <Services latestServices={latestServices} />
      <BlogPosts latestPosts={latestBlogPosts} />
      <ContactForm />
    </>
  );
}
