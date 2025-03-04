
"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import styles from "./BlogDetail.module.css";
import { CldImage } from "next-cloudinary";

export default function BlogDetail({ blog, relatedBlogs }) {
  return (
    <section className={styles.blogPage}>
      <div className={styles.wrapper}>
        <div className={styles.heroBackground}></div>

        <header className={styles.heroHeader}>
          <nav>
            <Link href="/blog" aria-label="Back to blog list">
              <button className={styles.backButton}>← Back to Blogs</button>
            </Link>
          </nav>

          <figure className={styles.thumbnailWrapper}>
            <CldImage
              src={blog.thumbnail}
              alt={blog.title} 
              className={styles.thumbnail}
              loading="lazy" 
              width="800" 
              height="300"
            />
          </figure>

          <div className={styles.blogInfo}>
            <h1>{blog.title}</h1>
            <time
              dateTime={new Date(blog.date).toISOString()}
              className={styles.blogDate}
            >
              {new Date(blog.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </time>
            <span className={styles.readTime}> 3 Min Read</span>
          </div>
        </header>
      </div>

      <article className={styles.blogContent}>
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>

      <section className={styles.relatedSection}>
        <h2>Related Articles</h2>
        <ul className={styles.relatedList}>
          {relatedBlogs.map((related) => (
            <li key={related.slug}>
              <Link href={`/blog/${related.slug}`} aria-label={`Read article titled ${related.title}`}>
                <article className={styles.relatedCard}>
                  <figure className={styles.relatedThumbnailWrapper}>
                    <CldImage
                      src={related.thumbnail}
                      alt={related.title}
                      className={styles.relatedThumbnail}
                      loading="lazy" 
                      width="500" 
                      height="500"
                    />
                  </figure>
                  <div>
                    <h3>{related.title}</h3>
                    <time
                      dateTime={new Date(related.date).toISOString()}
                      className={styles.relatedDate}
                    >
                      {new Date(related.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}