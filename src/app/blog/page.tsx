import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

const postsDirectory = path.join(process.cwd(), 'blog-posts');

export default function BlogPage() {
    const fileNames = fs.readdirSync(postsDirectory);
    const posts = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);
        return { slug, ...data } as { slug: string; title: string; date: string; description: string };
    });

    return (
        <main className="min-h-screen px-6 py-20 bg-white">
            <h1 className="text-4xl font-bold text-center mb-12">Blog</h1>
            <div className="max-w-3xl mx-auto space-y-10">
                {posts.map((post) => (
                    <Link key={post.slug} href={`/blog/${post.slug}`}>
                        <div className="p-6 border rounded hover:shadow transition cursor-pointer">
                            <h2 className="text-2xl font-semibold">{post.title}</h2>
                            <p className="text-gray-500 text-sm mb-2">{post.date}</p>
                            <p>{post.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </main>
    );
}