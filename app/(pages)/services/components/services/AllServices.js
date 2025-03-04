"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./AllServices.module.css";
import PageHeader from "../../../../shared/breadcrumbs/PageHeader";
import { CldImage } from "next-cloudinary";

export default function AllServices({
  paginatedServices = [],
  page,
  pageCount,
}) {
  const [currentPage, setCurrentPage] = useState(page);
  const router = useRouter();

  const handleChange = (newPage) => {
    setCurrentPage(newPage);
    router.push(`/services?page=${newPage}`);
  };

  return (
    <>
      <PageHeader
        title="Our Services"
        description="Explore expert bathroom and home renovation services in Melbourne, including bathroom and kitchen renovations, tiling, waterproofing, and more."
        breadcrumb="Services Page"
      />

      <section aria-labelledby="services-list">
        <div className={styles.servicesGrid}>
          {paginatedServices.length > 0 ? (
            <div className={styles.wrapper}>
              {paginatedServices.map((service) => (
                <article
                  key={service.filename}
                  itemScope
                  itemType="https://schema.org/Service"
                  className={styles.article}
                >
                  <header>
                    <Link href={`/services/${service.filename}`}>
                      <CldImage
                        src={service.thumbnail}
                        alt={`Thumbnail for ${service.title}`}
                        width={800}
                        height={500}
                        itemProp="image"
                      />
                    </Link>
                    <h2 itemProp="name">
                      <Link
                        href={`/services/${service.filename}`}
                        className={styles.serviceTitle}
                      >
                        {service.title}
                      </Link>
                    </h2>
                  </header>
                  <p itemProp="description">{service.excerpt}</p>
                  <Link
                    href={`/services/${service.filename}`}
                    aria-label={`Read more about ${service.title}`}
                    className={styles.continueReading}
                  >
                    Continue Reading
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <p>No services available at the moment.</p>
          )}
        </div>

        <nav aria-label="Pagination" className={styles.pagination}>
          {[...Array(pageCount)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleChange(index + 1)}
              disabled={currentPage === index + 1}
              aria-current={currentPage === index + 1 ? "page" : undefined}
            >
              {index + 1}
            </button>
          ))}
        </nav>
      </section>
    </>
  );
}
