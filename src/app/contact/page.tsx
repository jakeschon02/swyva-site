export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#FAFAFA] text-[#1B1B1B] font-sans">
            <section className="max-w-3xl mx-auto px-6 py-24 text-center">
                <h1 className="text-3xl font-bold mb-6">Let&apos;s Talk</h1>
                <p className="text-gray-600 mb-10">Have a project in mind? Send us a message!</p>
                <form className="grid gap-6 text-left">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4746E5]"
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#4746E5]"
                    />
                    <textarea
                        placeholder="Your Message"
                        className="w-full px-4 py-3 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-[#4746E5]"
                    />
                    <button
                        type="submit"
                        className="w-full bg-[#4746E5] hover:bg-[#4358CA] text-white py-3 px-6 rounded transition"
                    >
                        Send Message
                    </button>
                </form>
            </section>
        </main>
    );
}