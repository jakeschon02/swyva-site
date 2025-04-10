import Image from 'next/image';

// 1. Define a reusable Project type
type Project = {
    title: string;
    description: string;
    tools: string[];
    image: string;
};

// 2. Explicitly declare your valid slugs and map them
const projects: Record<'project-one' | 'project-two' | 'project-three', Project> = {
    'project-one': {
        title: 'Business Website',
        description: 'Landing page for a fintech startup, focused on clarity, conversion, and mobile responsiveness.',
        tools: ['Next.js', 'Tailwind CSS', 'Figma'],
        image: '/project1.png',
    },
    'project-two': {
        title: 'E-commerce Website',
        description: 'Product grid, cart system, clean UI, optimized for conversion and UX.',
        tools: ['React', 'Stripe', 'Framer Motion'],
        image: '/project2.png',
    },
    'project-three': {
        title: 'Blog Website',
        description: 'Modern content hub for publishing articles, with SEO and category filtering.',
        tools: ['Next.js', 'Markdown', 'Tailwind CSS'],
        image: '/project3.png',
    },
};

export default function ProjectPage({ params }: { params: { slug: string } }) {
    const slug = params.slug as keyof typeof projects;
    const project = projects[slug];

    if (!project) {
        return (
            <main className="text-center py-20">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <p className="text-gray-600 mt-2">Please check the URL or go back to the homepage.</p>
            </main>
        );
    }

    return (
        <main className="max-w-4xl mx-auto px-6 py-20">
            <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-gray-700 mb-6">{project.description}</p>

            <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={600}
                className="rounded-lg shadow mb-10"
            />

            <h3 className="text-xl font-semibold mb-2">Tools Used:</h3>
            <ul className="list-disc list-inside text-gray-600">
                {project.tools.map((tool: string) => (
                    <li key={tool}>{tool}</li>
                ))}
            </ul>
        </main>
    );
}