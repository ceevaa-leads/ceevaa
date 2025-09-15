'use client'

import * as React from "react";
import { Button } from "./Button";
import { ArrowRight, Menu, X } from "lucide-react";
import { motion } from "motion/react";
// import ceeVaaLogo from "figma:asset/b258097cb16673440fd50c9087b7fbbff4691321.png";

const ceeVaaLogo = "https://via.placeholder.com/32x32/ea580c/ffffff?text=C";

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
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                <div className="flex justify-center items-center">
                    {/* Main Navigation Container - Pill with Logo, Links, and CTAs */}
                    <motion.div
                        className="hidden lg:flex items-center justify-between bg-slate-50/80 backdrop-blur-sm rounded-2xl border border-slate-200/50 w-full max-w-4xl px-[8px] py-[6px] pt-[8px] pr-[4px] pb-[8px] pl-[12px]"
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
                            className="flex items-center space-x-2 px-3 hover:opacity-80 transition-opacity cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                                <motion.img
                                    src={ceeVaaLogo}
                                    alt="CeeVaa Logo"
                                    className="w-8 h-8"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                            <span className="text-xl text-slate-900 font-semibold">
                                CeeVaa
                            </span>
                        </motion.button>

                        {/* Center Navigation Links */}
                        <div className="flex items-center space-x-1">
                            <motion.a
                                href="#features"
                                className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white hover:shadow-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                Features
                            </motion.a>
                            <motion.a
                                href="#how-it-works"
                                className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white hover:shadow-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                How it works
                            </motion.a>
                            <motion.a
                                href="#services"
                                className="text-slate-600 hover:text-slate-900 px-4 py-2 rounded-full text-sm font-medium transition-all hover:bg-white hover:shadow-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                Who we serve
                            </motion.a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center space-x-1.5 px-1 p-[0px]">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 h-10 rounded-lg shadow-sm transition-all hover:shadow-md cursor-pointer">
                                    Get Started
                                </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                                <Button
                                    variant="outline"
                                    className="text-slate-600 hover:text-slate-900 px-6 h-10 border-slate-300 rounded-lg cursor-pointer"
                                >
                                    Book a demo
                                </Button>
                            </motion.div>
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
                                    src={ceeVaaLogo}
                                    alt="CeeVaa Logo"
                                    className="w-8 h-8"
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                            <span className="text-xl text-slate-900 font-semibold">
                                CeeVaa
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
                        <a
                            href="#features"
                            className="block text-slate-700 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                        >
                            Features
                        </a>
                        <a
                            href="#how-it-works"
                            className="block text-slate-700 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                        >
                            How it works
                        </a>
                        <a
                            href="#services"
                            className="block text-slate-700 hover:text-slate-900 py-3 px-2 rounded-lg hover:bg-slate-50 transition-colors font-medium"
                        >
                            Who we serve
                        </a>

                        <div className="pt-4 border-t border-slate-100 mt-4 space-y-2">
                            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white h-12 rounded-lg flex items-center justify-center shadow-sm px-6 cursor-pointer">
                                Get Started
                            </Button>
                            <Button
                                variant="outline"
                                className="w-full justify-center px-6 h-12 text-slate-600 hover:text-slate-900 border-slate-300 rounded-lg cursor-pointer"
                            >
                                Book a demo
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </motion.nav>
    );
}