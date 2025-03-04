"use client";

import Link from "next/link";
import styles from "./BlogPosts.module.css";
import SectionHeader from "../../../../components/heading/SectionHeader";
import { CldImage } from 'next-cloudinary';

export default function BlogPosts({ latestPosts }) {
  // Define the options for date formatting
  const dateOptions = { year: "numeric", month: "2-digit", day: "2-digit" };

  return (
    <section className={styles.blogPostContainer}>
      <div className={styles.wrapper}>
        {/* Gradient Overlay */}
        <div className={styles.gradientOverlay}></div>

        <div className={styles.header} aria-live="polite">
          <header className={styles.heading}>
            <SectionHeader
              title="Latest Insights"
              description="Stay updated with the latest trends, tips, and expert advice on bathroom renovations, tiling, waterproofing, and property improvements across Melbourne."
            />
          </header>
        </div>

        <div className={styles.postsGrid}>
          {latestPosts.map((post) => (
            <article
              key={post.filename}
              itemScope
              itemType="https://schema.org/BlogPosting"
              className={styles.postCard}
            >
              <header>
                <div className={styles.postIcon}>
                  <CldImage
                    src={post.thumbnail}
                    alt={`Thumbnail for ${post.title}`}
                    width={500}
                    height={500}
                    className={styles.icon}
                    itemProp="image"
                    loading="lazy"
                  />
                </div>

                <h2 itemProp="headline">{post.title}</h2>
                <span>
                  Published on{" "}
                  <time itemProp="datePublished" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString(
                      "en-GB",
                      dateOptions
                    )}
                  </time>{" "}
                  by <span itemProp="author">{post.author}</span>
                </span>
              </header>
              <p itemProp="description">{post.excerpt}</p>
              <Link href={`/blog/${post.filename.replace(".md", "")}`} passHref>
                <p className={styles.readMore}>Continue Reading</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
