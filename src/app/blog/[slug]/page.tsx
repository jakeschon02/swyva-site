import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface PageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const files = fs.readdirSync('blog-posts');
    return files.map((file) => ({
        slug: file.replace(/\.md$/, ''),
    }));
}

// Optional SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const filePath = path.join('blog-posts', `${params.slug}.md`);
    if (!fs.existsSync(filePath)) return {};

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);

    return {
        title: data.title || 'Blog Post',
        description: data.description || '',
    };
}

export default async function BlogPost({ params }: PageProps) {
    const filePath = path.join('blog-posts', `${params.slug}.md`);

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await remark().use(html).process(content);
    const contentHtml = processedContent.toString();

    return (
        <main className="max-w-3xl mx-auto px-6 py-20 bg-white">
            <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
            <p className="text-sm text-gray-500 mb-6">{data.date}</p>
            <div
                className="prose prose-lg"
                dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
        </main>
    );
}