'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function CalculatorPage() {
    const [pages, setPages] = useState(1);
    const [customDesign, setCustomDesign] = useState(false);
    const [cms, setCMS] = useState(false);
    const [ecommerce, setEcommerce] = useState(false);
    const [newsletter, setNewsletter] = useState(false);
    const [booking, setBooking] = useState(false);
    const [multiLanguage, setMultiLanguage] = useState(false);
    const [hosting, setHosting] = useState(false);
    const [optimization, setOptimization] = useState(false);

    const calculateTotal = () => {
        let total = 0;
        total += 250; // base landing page
        total += (pages - 1) * 75;
        if (customDesign) total += 150;
        if (cms) total += 200;
        if (ecommerce) total += 400;
        if (newsletter) total += 75;
        if (booking) total += 150;
        if (multiLanguage) total += 150;
        if (hosting) total += 75;
        if (optimization) total += 120;
        return total;
    };

    return (
        <main className="min-h-screen py-12 px-6 max-w-2xl mx-auto text-gray-900">
            <h1 className="text-4xl font-bold text-center mb-8">Website Price Calculator</h1>

            <div className="space-y-6">
                <div>
                    <label className="block font-medium mb-1">Number of pages:</label>
                    <input
                        type="number"
                        min="1"
                        value={pages}
                        onChange={(e) => setPages(Number(e.target.value))}
                        className="w-full px-4 py-2 border rounded"
                    />
                </div>

                <div className="space-y-2">
                    <Checkbox label="Custom Design" checked={customDesign} onChange={setCustomDesign} />
                    <Checkbox label="CMS Integration (WordPress)" checked={cms} onChange={setCMS} />
                    <Checkbox label="E-commerce Setup" checked={ecommerce} onChange={setEcommerce} />
                    <Checkbox label="Newsletter Setup" checked={newsletter} onChange={setNewsletter} />
                    <Checkbox label="Booking Plugin" checked={booking} onChange={setBooking} />
                    <Checkbox label="Multi-language Support" checked={multiLanguage} onChange={setMultiLanguage} />
                    <Checkbox label="Hosting Setup" checked={hosting} onChange={setHosting} />
                    <Checkbox label="Speed Optimization" checked={optimization} onChange={setOptimization} />
                </div>

                <div className="text-xl font-semibold mt-4">
                    💰 Estimated Total: <span className="text-blue-600">€{calculateTotal()}</span>
                </div>
            </div>

            {/* Back to Home Link (Fixed!) */}
            <div className="text-center mt-10">
                <Link href="/">
          <span className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition">
            ← Back to Home
          </span>
                </Link>
            </div>
        </main>
    );
}

function Checkbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
    return (
        <label className="flex items-center space-x-3">
            <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} />
            <span>{label}</span>
        </label>
    );
}