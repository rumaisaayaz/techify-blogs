import React from 'react';  
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import fs from "fs";
import matter from 'gray-matter';
import CommentComponent from '@/components/Comment';
import Image from 'next/image';

interface BlogData {
  title: string;
  description: string;
  author: string;
  date: string;
  image: string;
  slug: string;
}

const dirContent = fs.readdirSync("content", "utf-8");

const blogs: BlogData[] = dirContent.map(file => {
  const fileContent = fs.readFileSync(`content/${file}`, "utf-8");
  const { data } = matter(fileContent);
  return data as BlogData;
});

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="rounded-lg shadow-md overflow-hidden dark:border-2"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={500}
              height={500}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
              <p className="mb-4">{blog.description}</p>
              <div className="text-sm mb-4">
                <span>By {blog.author}</span> |{" "}
                <span>
                  {new Date(blog.date).toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
              <Link
                href={`/blogpost/${blog.slug}`}
                className={buttonVariants({ variant: "outline" })}
              >
                Click here
              </Link>
              <CommentComponent slug={blog.slug} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
