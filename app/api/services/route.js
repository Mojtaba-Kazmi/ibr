import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  const servicesDirectory = path.join(process.cwd(), "markdown/services");

  try {
    // Read directory asynchronously
    const filenames = await fs.readdir(servicesDirectory);

    // Use Promise.all to handle asynchronous file reads
    const services = await Promise.all(
      filenames.map(async (filename) => {
        const filePath = path.join(servicesDirectory, filename);
        const fileContents = await fs.readFile(filePath, "utf8");
        const { data } = matter(fileContents);

        return {
          filename: filename.replace(".md", ""),
          ...data,
        };
      })
    );

    return NextResponse.json(services);
  } catch (error) {
    console.error("Error reading services:", error);
    return NextResponse.error();
  }
}