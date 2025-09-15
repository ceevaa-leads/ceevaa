'use client'


import * as React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
// import ceeVaaLogo from "figma:asset/b258097cb16673440fd50c9087b7fbbff4691321.png";


const ceeVaaLogo = "https://via.placeholder.com/32x32/ea580c/ffffff?text=C";


export function Footer() {
    const socialLinks = [
        { icon: Facebook, href: "#" },
        { icon: Instagram, href: "#" },
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" }
    ];

    return (
        <motion.footer
            className="bg-slate-50 py-20 md:py-28"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-4xl mx-auto px-6 lg:px-8">
                {/* Main Footer Content - Centered Layout */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Logo */}
                    <motion.button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="inline-flex items-center space-x-2 mb-8 hover:opacity-80 transition-opacity cursor-pointer group"
                        whileHover={{ scale: 1.05 }}
                    >
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                            <motion.img
                                src={ceeVaaLogo}
                                alt="CeeVaa Logo"
                                className="w-12 h-12"
                                whileHover={{ rotate: 360 }}
                                transition={{ duration: 0.6 }}
                            />
                        </div>
                        <span className="text-2xl text-slate-900 font-semibold">
                            CeeVaa
                        </span>
                    </motion.button>

                    {/* Description */}
                    <p className="text-lg text-slate-600 leading-relaxed mb-12 max-w-2xl mx-auto">
                        A powerful, customizable lead generation platform
                        designed to help service teams capture, track, and
                        convert leads with ease. From smart automation to
                        real-time insights.
                    </p>

                    {/* Social Icons */}
                    <motion.div
                        className="flex items-center justify-center space-x-6 mb-16"
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        {socialLinks.map(({ icon: Icon, href }, i) => (
                            <motion.a
                                key={i}
                                href={href}
                                className="group w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-slate-500 hover:bg-orange-600 hover:text-white hover:border-orange-600 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                                whileHover={{ y: -2 }}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                                viewport={{ once: true }}
                            >
                                <Icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* Decorative divider */}
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full mx-auto mb-8"
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "6rem", opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                    />
                </motion.div>

                {/* Bottom Copyright */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p className="text-slate-500 text-sm">
                        © 2025 CeeVaa. All Rights Reserved.
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    );
}