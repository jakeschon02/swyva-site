"use client";

import "./globals.css";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] text-[#1B1B1B] font-sans">
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-24 text-center">
                <h1 className="text-5xl font-bold leading-tight mb-6">
                    Empowering <span className="text-[#4F46E5]">Modern Brands</span><br />
                    with Smart Design
                </h1>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                    From pixel-perfect websites to impactful digital strategies, we bring your vision to life through clean, modern, and conversion-focused design.
                </p>
                <button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white py-3 px-6 rounded-full font-medium transition">
                    Let’s Build Together
                </button>
            </section>

            {/* Services Section */}
            <section className="bg-white py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center mb-16">Our Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-10">
                        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm text-center">
                            <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                            <p className="text-gray-600">Crafting unique logos, color systems, and visual languages for brands that want to stand out.</p>
                        </div>
                        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm text-center">
                            <h3 className="text-xl font-bold mb-2">Web Design</h3>
                            <p className="text-gray-600">Responsive, intuitive, and beautiful design systems built for real users.</p>
                        </div>
                        <div className="bg-[#F9FAFB] p-6 rounded-lg shadow-sm text-center">
                            <h3 className="text-xl font-bold mb-2">Development</h3>
                            <p className="text-gray-600">Clean, fast, and scalable sites built using modern frameworks like Next.js & Tailwind.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-semibold text-center mb-16">Recent Projects</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[#E0E7FF] h-64 rounded-xl"></div>
                        <div className="bg-[#E0E7FF] h-64 rounded-xl"></div>
                        <div className="bg-[#E0E7FF] h-64 rounded-xl"></div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#1B1B1B] text-white py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
                    <p className="text-gray-300 mb-6">Have a project in mind or want to collaborate? Reach out and let’s create something amazing together.</p>
                    <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
                        Contact Us
                    </button>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#FAFAFA] py-8 border-t">
                <div className="max-w-6xl mx-auto px-6 flex justify-between text-sm text-gray-500">
                    <span>&copy; 2025 Swyva. All rights reserved.</span>
                    <div className="space-x-4">
                        <a href="#">Twitter</a>
                        <a href="#">Dribbble</a>
                        <a href="#">LinkedIn</a>
                    </div>
                </div>
            </footer>
        </main>
    );
}
