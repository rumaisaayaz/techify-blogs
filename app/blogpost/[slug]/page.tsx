import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers';
import OnThisPage from "@/components/onthispage";
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeSlug from 'rehype-slug';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  try {
    const files = await fs.readdir(path.join(process.cwd(), 'content'));
    return files.map((filename) => ({
      slug: filename.replace('.md', ''),
    }));
  } catch (error) {
    console.error("Error reading content directory:", error);
    return [];
  }
}

export default async function Page({ params }: PageProps) {
  const filepath = path.join(process.cwd(), `content/${params.slug}.md`);

  try {
    const fileContent = await fs.readFile(filepath, "utf-8");
    const { content, data } = matter(fileContent);

    const processor = unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeDocument, { title: '👋🌍' })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings)
      .use(rehypePrettyCode, {
        theme: "github-dark",
        transformers: [
          transformerCopyButton({
            visibility: 'always',
            feedbackDuration: 3_000,
          }),
        ],
      });

    const htmlContent = (await processor.process(content)).toString();

    return (
      <div className="max-w-6xl mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.title}</h1>
        <p className="text-base md:text-lg mb-2 border-l-4 border-gray-500 pl-4 italic">
          &quot;{data.description}&quot;
        </p>
        <div className="flex flex-col md:flex-row gap-2">
          <p className="text-sm md:text-base text-gray-500 mb-4 italic">
            By {data.author}
          </p>
          <p className="text-sm md:text-base text-gray-500 mb-4">{data.date}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          className="prose dark:prose-invert"
        ></div>
        <OnThisPage htmlContent={htmlContent} />
      </div>
    );
  } catch (error) {
    console.error("Error reading markdown file:", error);
    notFound();
  }
}