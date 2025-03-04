import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import styles from "./page.module.css";
import ServiceImage from "../components/ServiceImage";
// Generate static parameters for dynamic routes
export async function generateStaticParams() {
  const servicesDirectory = path.join(
    process.cwd(),
    "markdown/services"
  );
  const filenames = fs.readdirSync(servicesDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));
}

// Fetch data for the current page dynamically
export async function generateMetadata(context) {
  const params = await context.params; // Await the params here
  const { slug } = params;

  const filePath = path.join(
    process.cwd(),
    "markdown/services",
    `${slug}.md`
  );

  if (fs.existsSync(filePath)) {
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
     
     return {
      title: `${data.title} | Inovate Bathroom Renovations`,
      description: data.excerpt || "Explore professional and high-quality bathroom and home renovation services in Melbourne, from bathroom renovations to waterproofing, tiling, and more with Innovate Bathroom Renovations.",
      openGraph: {
        title: `${data.title} | Inovate Bathroom Renovations`,
        description: data.excerpt || "Explore professional and high-quality bathroom and home renovation services in Melbourne, from bathroom renovations to tiling and more with Innovate Bathroom Renovations.",
        url: `https://www.innovatebathroomrenovations.com.au//services/${slug}`,
        images: [
          {
            url: data.thumbnail ? `${data.thumbnail}` : "https://res.cloudinary.com/den67ouct/image/upload/v1740956083/IBR_logo_yto9od.png",
            width: 1200,
            height: 630,
            alt: `Thumbnail for the service: ${data.title}`,
          },
        ],
      },
    };
  }

  return { title: "Service Not Found" };
}

export default async function ServiceDetailPage({ params }) {
  const awaitedParams = await params; // Ensure params is awaited
  const { slug } = awaitedParams;
 
  if (!slug) {
    return <p>Service not found.</p>;
  }

  const servicesDirectory = path.join(
    process.cwd(),
    "markdown/services"
  );
  const filenames = fs.readdirSync(servicesDirectory);

  const serviceList = filenames.map((filename) => {
    const filePath = path.join(servicesDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug: filename.replace(".md", ""),
      title: data.title,
    };
  });

  const filePath = path.join(servicesDirectory, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return <p>Service not found.</p>;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return (
    <section className={styles.servicesPage}>
      <div className={styles.wrapper}>
        {/* Sidebar */}
        <div className={styles.sidebar}>
          {/* Services List */}
          <nav className={styles.servicesList}>
            <ul>
              {serviceList.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} passHref>
                    <p className={slug === service.slug ? styles.active : ""}>
                      {service.title}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Section */}
          <div className={styles.contactSection}>
            <h3>Exclusive Consultation</h3>
            <p>info@innovatebathroomrenovations.com.au</p>
            <Link href="/contact">
              <button>Connect with us</button>
            </Link>
          </div>
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <article
            className={styles.serviceDetail}
            itemScope
            itemType="https://schema.org/Service"
          >
            <header className={styles.serviceHeader}>
              <h1 itemProp="name" className={styles.serviceTitle}>
                {data.title}
              </h1>
            </header>

            {data.thumbnail && (
              <div className={styles.imageContainer}>
                <ServiceImage
                  src={data.thumbnail}
                  alt={`Thumbnail for ${data.title}`}
                  itemProp="image"
                />
              </div>
            )}

            <div className={styles.serviceContent} itemProp="description">
              <ReactMarkdown>{content}</ReactMarkdown>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}