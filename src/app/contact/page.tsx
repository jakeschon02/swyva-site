'use client';

import { useState } from 'react';

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <main className="min-h-screen bg-white px-6 py-20">
            <div className="max-w-xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">Contact Me</h1>
                <p className="text-center text-gray-600 mb-10">
                    Have a project or idea? Let’s talk. I usually respond within 24 hours.
                </p>

                {!submitted ? (
                    <form
                        action="https://formspree.io/f/xzzeykna"
                        method="POST"
                        onSubmit={() => setSubmitted(true)}
                        className="space-y-6"
                    >
                        <div>
                            <label className="block mb-1 font-medium">Your Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                className="w-full border rounded px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Your Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border rounded px-4 py-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 font-medium">Message</label>
                            <textarea
                                name="message"
                                rows={5}
                                required
                                className="w-full border rounded px-4 py-2"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                        >
                            Send Message
                        </button>
                    </form>
                ) : (
                    <div className="text-green-600 text-center font-semibold text-lg">
                        ✅ Thank you! Your message has been sent.
                    </div>
                )}
            </div>
        </main>
    );
}