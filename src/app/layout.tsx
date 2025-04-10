'use client';

import Link from 'next/link';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'Portfolio', href: '/#portfolio' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Calculator', href: '/calculator' },
        { name: 'Blog', href: '/blog' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <html lang="en">
        <body>
        {/* Sticky Navigation */}
        <header className="sticky top-0 bg-white shadow z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-900">
                    SWYVA
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-gray-700 hover:text-blue-500 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        className="w-6 h-6 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
                    </svg>
                </button>
            </div>

            {/* Mobile Nav Items */}
            {menuOpen && (
                <nav className="md:hidden px-6 pb-4 space-y-2 bg-white">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="block text-gray-700 hover:text-blue-500"
                            onClick={() => setMenuOpen(false)} // close menu on click
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>
            )}
        </header>

        {/* Main Content */}
        {children}
        </body>
        </html>
    );
}