'use client'

import { Button } from "@/app/components";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
import ceeVaaLogo from "@/app/icon.png";
import { navigationContent } from "@/app/content";
import { BookDemoForm } from "@/app/sections/BookDemoForm";

interface NavigationProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (open: boolean) => void;
}

export function Navigation({ mobileMenuOpen, setMobileMenuOpen }: NavigationProps) {
    return (
        <motion.nav
            className="sticky top-0 z-50"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-center items-center">
                    {/* Main Navigation Container - Pill with Logo, Links, and CTAs */}
                    <motion.div
                        className="hidden lg:flex items-center justify-between backdrop-blur-sm rounded-2xl border border-slate-200/50 w-full max-w-4xl px-2 py-[6px] pt-2 pr-1 pb-2 pl-3"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Logo */}
                        <motion.button
                            onClick={() =>
                                window.scrollTo({
                                    top: 0,
                                    behavior: "smooth",
                                })
                            }
                            className="flex items-center space-x-2 px-3 transition-opacity cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                                <motion.img
                                    src={ceeVaaLogo.src}
                                    alt="CeeVaa Logo"
                                    className="w-10 h-10"
                                />
                            </div>
                            <span className="text-xl text-sky-900 font-bold">
                                {navigationContent.logo}
                            </span>
                        </motion.button>

                        {/* Center Navigation Links */}
                        <div className="flex items-center space-x-1">
                            {navigationContent.links.map((link) => (
                                <motion.a
                                    key={link.href}
                                    href={link.href}
                                    className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white hover:shadow-sm"
                                    whileHover={{ scale: 1.05 }}
                                >
                                    {link.label}
                                </motion.a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-1.5 px-1 p-[0px]">
                            {navigationContent.cta.map((cta) => (
                                <BookDemoForm key={cta.label}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            className={
                                                cta.type === "primary"
                                                    ? "bg-sky-700 hover:bg-sky-800 text-white px-6 h-10 rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer"
                                                    : cta.type === "secondary"
                                                        ? "text-slate-600 hover:text-slate-900 px-6 h-10 border-slate-300 rounded-lg cursor-pointer"
                                                        : "text-slate-600 hover:text-sky-700 px-6 h-10 rounded-lg cursor-pointer" // tertiary style
                                            }
                                            variant={cta.type === "primary" ? "default" : cta.type === "secondary" ? "outline" : "ghost"}
                                        >
                                            {cta.label}
                                        </Button>
                                    </motion.div>
                                </BookDemoForm>
                            ))}
                        </div>
                    </motion.div>

                    {/* Mobile Layout */}
                    <motion.div
                        className="lg:hidden flex justify-between items-center w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        {/* Logo */}
                        <div className="flex items-center space-x-2">
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                                <motion.img
                                    src={ceeVaaLogo.src}
                                    alt="CeeVaa Logo"
                                    className="w-8 h-8"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                            <span className="text-xl text-sky-900 font-bold">
                                {navigationContent.logo}
                            </span>
                        </div>

                        {/* Mobile Menu Button */}
                        <motion.button
                            className="p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
                            onClick={() =>
                                setMobileMenuOpen(!mobileMenuOpen)
                            }
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <motion.div
                    className="lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-100/50"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="px-6 py-6 space-y-1"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                    >
                        {navigationContent.links.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block text-slate-700 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                            >
                                {link.label}
                            </a>
                        ))}

                        <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                            {navigationContent.cta.map((cta) => (
                                <BookDemoForm key={cta.label}>
                                    <Button
                                        className={
                                            cta.type === "primary"
                                                ? "w-full bg-sky-700 hover:bg-sky-800 text-white h-12 rounded-lg flex items-center justify-center shadow-sm px-6 cursor-pointer"
                                                : cta.type === "secondary"
                                                    ? "w-full justify-center px-6 h-12 text-slate-600 hover:text-slate-900 border-slate-300 rounded-lg cursor-pointer"
                                                    : "w-full justify-center px-6 h-12 text-slate-600 hover:text-sky-700 rounded-lg cursor-pointer" // tertiary style
                                        }
                                        variant={cta.type === "primary" ? "default" : cta.type === "secondary" ? "outline" : "ghost"}
                                    >
                                        {cta.label}
                                        {cta.type === "secondary" && <ArrowRight className="w-4 h-4 ml-2" />}
                                    </Button>
                                </BookDemoForm>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
}