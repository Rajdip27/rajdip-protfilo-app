"use client"
import { FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const page = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-center items-center gap-8 w-full max-w-7xl mx-auto relative z-10">
                {/* Contact Info */}
                <div className="relative group">
                    {/* Glow effect */}
                    <div className="absolute -inset-0.5 rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition duration-300"></div>
                    <div className="relative p-8 rounded-2xl w-full max-w-2xl mx-auto">
                        <div className="text-left mb-8">
                            <h2 className="text-4xl font-bold mb-2">Get in Touch</h2>
                            <p className="text-white/80 text-lg">Have a question or want to work together? Drop me a message!</p>
                        </div>
                        <div className="space-y-6">
                            {/* Email */}
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                                <FaEnvelope className="w-6 h-6 text-white" />
                                <div>
                                    <h6 className="text-lg font-semibold text-white">Email</h6>
                                    <p className="text-white/70 break-words">portfolio@gmail.com</p>
                                </div>
                            </div>
                            {/* Location */}
                            <div className="flex items-center gap-4 p-4 rounded-lg border border-white/5 hover:border-white/20 transition-all">
                                <FaMapMarkerAlt className="w-6 h-6" />
                                <div>
                                    <h6 className="text-lg font-semibold text-white">Location</h6>
                                    <p className="text-white/70">Mirpur, Dhaka 1216</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="relative group">
                    <div className="relative border border-white/10 p-8 rounded-2xl w-full mx-auto">
                        <h2 className="text-3xl font-bold mb-6 text-center">Send a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-white/80 mb-1">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1">Email</label>
                                <input
                                    type="email"
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-white/80 mb-1">Message</label>
                                <textarea
                                    className="w-full p-3 rounded-lg bg-black/50 text-white border border-white/10 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all"
                                    rows="4"
                                    placeholder="Your Message"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 text-lg font-semibold text-white bg-violet-500 rounded-lg shadow-md transition-transform duration-300 hover:scale-105">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
