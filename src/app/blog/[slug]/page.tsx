import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import { Metadata } from 'next';

// ✅ generateStaticParams to enable static generation
export async function generateStaticParams() {
    const files = fs.readdirSync('blog-posts');
    return files.map((filename) => ({
        slug: filename.replace(/\.md$/, ''),
    }));
}

// ✅ Type-safe props for blog post route
interface BlogPostProps {
    params: {
        slug: string;
    };
}

// ✅ Optional SEO metadata
export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
    const filePath = path.join('blog-posts', `${params.slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return {
        title: data.title || 'Blog Post',
        description: data.description || '',
    };
}

// ✅ Main component
export default async function BlogPostPage({ params }: BlogPostProps) {
    const filePath = path.join('blog-posts', `${params.slug}.md`);
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