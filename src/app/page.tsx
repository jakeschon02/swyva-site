'use client';

import Link from 'next/link';

export default function Home() {
  return (
      <main className="min-h-screen bg-white text-gray-900">
        {/* Hero Section */}
        <section className="text-center py-20 px-6">
          <h2 className="text-4xl font-extrabold mb-4">
            Build Your Digital Future with Swyva
          </h2>
          <p className="text-lg mb-6">
            We provide professional web design and development services to help businesses or individuals grow online.
          </p>
          <Link
              href="#services"
              className="inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-600 transition"
          >
            Explore Our Services
          </Link>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-gray-50 py-16 px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-blue-500">🎨</div>
              <h4 className="text-xl font-semibold mb-2">Web Design</h4>
              <p className="text-gray-600">Crafting visually appealing and user-friendly websites tailored to your brand.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-blue-500">🧱</div>
              <h4 className="text-xl font-semibold mb-2">Website Development</h4>
              <p className="text-gray-600">Building robust, scalable websites with modern technologies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-blue-500">🚀</div>
              <h4 className="text-xl font-semibold mb-2">Digital Strategy</h4>
              <p className="text-gray-600">Developing effective online strategies to grow your business.</p>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 px-6">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Work</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Link href="/portfolio/project-one">
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition group cursor-pointer">
                <img
                    src="/project1.png"
                    alt="Business Website"
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">Project One</h4>
                  <p className="text-sm text-gray-600">Landing page for a fintech startup.</p>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/project-two">
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition group cursor-pointer">
                <img
                    src="/project2.png"
                    alt="E-commerce Website"
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">Project Two</h4>
                  <p className="text-sm text-gray-600">E-commerce design with clean product UI.</p>
                </div>
              </div>
            </Link>
            <Link href="/portfolio/project-three">
              <div className="bg-white rounded-lg overflow-hidden shadow hover:shadow-xl transition group cursor-pointer">
                <img
                    src="/project3.png"
                    alt="Blog Website"
                    className="w-full h-48 object-cover object-top group-hover:scale-105 transition-transform duration-300"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-lg mb-1">Project Three</h4>
                  <p className="text-sm text-gray-600">Modern blog design with SEO focus.</p>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 px-6 bg-gray-100">
          <h3 className="text-4xl font-bold text-center mb-12">Our Pricing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
              <h4 className="text-2xl font-semibold mb-4">Basic Website Package</h4>
              <ul className="space-y-3 text-gray-700">
                <li>🖥️ Landing Page (1 page): <span className="font-medium">€250 – €400</span></li>
                <li>📄 Additional Page: <span className="font-medium">€50 – €100</span> per page</li>
                <li>🎨 Custom Design: <span className="font-medium">€100 – €200</span></li>
                <li>🔍 Basic SEO & 2 Revisions: <span className="font-medium">Included</span></li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
              <h4 className="text-2xl font-semibold mb-4">Add-Ons & Features</h4>
              <ul className="space-y-3 text-gray-700">
                <li>📝 CMS Integration (WordPress): <span className="font-medium">€150 – €300</span></li>
                <li>🛒 E-commerce Setup: <span className="font-medium">€300 – €600</span></li>
                <li>📧 Newsletter Setup: <span className="font-medium">€50 – €100</span></li>
                <li>📆 Booking Plugin: <span className="font-medium">€100 – €200</span></li>
                <li>🌍 Multi-language Support: <span className="font-medium">€100 – €200</span></li>
                <li>⚙️ Hosting Setup: <span className="font-medium">€50 – €100</span></li>
                <li>⚡ Speed Optimization: <span className="font-medium">€80 – €150</span></li>
              </ul>
            </div>

          </div>

          <div className="text-center mt-12">
            <Link
                href="/calculator"
                className="inline-block bg-blue-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Try Our Price Calculator
            </Link>
          </div>
        </section>
      </main>
  );
}