"use client";

import "./globals.css"; // Assuming globals.css is in src/app/

export default function Home() {
  return (
      <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold leading-tight mb-6">
            Empowering <span className="text-[#3B82F6]">Modern Brands</span><br />
            with Smart Design
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            From pixel-perfect websites to impactful digital strategies, we bring your vision to life through clean, modern, and conversion-focused design.
          </p>
          <button className="bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3 px-6 rounded-full font-medium transition">
            Let’s Build Together
          </button>
        </section>

        {/* Services Section */}
        <section className="bg-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-16">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold mb-2">Brand Identity</h3>
                <p className="text-slate-600">
                  Crafting unique logos, color systems, and visual languages for brands that want to stand out.
                </p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold mb-2">Web Design</h3>
                <p className="text-slate-600">
                  Responsive, intuitive, and beautiful design systems built for real users.
                </p>
              </div>
              <div className="bg-[#F1F5F9] p-6 rounded-lg shadow-sm text-center">
                <h3 className="text-xl font-bold mb-2">Development</h3>
                <p className="text-slate-600">
                  Clean, fast, and scalable sites built using modern frameworks like Next.js & Tailwind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 bg-[#F8FAFC]">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-16">Recent Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-[#DBEAFE] h-64 rounded-xl shadow-md"></div>
              <div className="bg-[#DBEAFE] h-64 rounded-xl shadow-md"></div>
              <div className="bg-[#DBEAFE] h-64 rounded-xl shadow-md"></div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-[#0F172A] text-white py-20">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-4">Let’s Connect</h2>
            <p className="text-slate-300 mb-6">
              Have a project in mind or want to collaborate? Reach out and let’s create something amazing together.
            </p>
            <button className="bg-white text-[#0F172A] px-6 py-3 rounded-full font-semibold hover:bg-slate-100 transition">
              Contact Us
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white py-8 border-t border-slate-200">
          <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4 md:gap-0">
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