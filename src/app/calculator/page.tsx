'use client';

import { useState } from 'react';

export default function Calculator() {
    const [pages, setPages] = useState(1);
    const [customDesign, setCustomDesign] = useState(false);
    const [addons, setAddons] = useState<string[]>([]);

    const addonOptions = [
        { label: 'CMS Integration (WordPress)', value: 'cms', price: 225 },
        { label: 'E-commerce Setup', value: 'ecommerce', price: 450 },
        { label: 'Newsletter Setup', value: 'newsletter', price: 75 },
        { label: 'Booking Plugin', value: 'booking', price: 150 },
        { label: 'Multi-language Support', value: 'language', price: 150 },
        { label: 'Hosting Setup', value: 'hosting', price: 75 },
        { label: 'Speed Optimization', value: 'speed', price: 115 },
    ];

    const toggleAddon = (value: string) => {
        setAddons((prev) =>
            prev.includes(value) ? prev.filter((a) => a !== value) : [...prev, value]
        );
    };

    const calculateTotal = () => {
        let total = 300; // Base landing page avg (€250–400)
        total += (pages - 1) * 75; // Each extra page avg (€50–100)
        if (customDesign) total += 150; // Avg custom design (€100–200)
        addons.forEach((a) => {
            const addon = addonOptions.find((opt) => opt.value === a);
            if (addon) total += addon.price;
        });
        return total;
    };

    return (
        <main className="min-h-screen bg-white px-6 py-20">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold mb-10 text-center">Website Price Calculator</h1>

                <div className="space-y-8">
                    <div>
                        <label className="block font-medium mb-2">How many pages?</label>
                        <input
                            type="number"
                            min="1"
                            value={pages}
                            onChange={(e) => setPages(Number(e.target.value))}
                            className="w-full border rounded px-4 py-2"
                        />
                    </div>

                    <div className="flex items-center space-x-3">
                        <input
                            type="checkbox"
                            id="customDesign"
                            checked={customDesign}
                            onChange={() => setCustomDesign(!customDesign)}
                            className="w-5 h-5"
                        />
                        <label htmlFor="customDesign" className="font-medium">
                            Include Custom Design
                        </label>
                    </div>

                    <div>
                        <label className="block font-medium mb-2">Add-ons:</label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {addonOptions.map((addon) => (
                                <label key={addon.value} className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        checked={addons.includes(addon.value)}
                                        onChange={() => toggleAddon(addon.value)}
                                    />
                                    <span>{addon.label} (€{addon.price})</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-10">
                        <p className="text-xl font-semibold">
                            💰 Estimated Total: <span className="text-blue-600">€{calculateTotal()}</span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-center mt-8">
                <a
                    href="/"
                    className="inline-block bg-gray-200 text-gray-800 px-6 py-2 rounded hover:bg-gray-300 transition"
                >
                    ← Back to Home
                </a>
            </div>
        </main>
    );
}