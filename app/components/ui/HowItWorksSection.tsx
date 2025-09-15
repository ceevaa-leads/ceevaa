'use client'

import * as React from "react";
import { Badge } from "./Badge";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

interface HowItWorksSectionProps {
    activeProcessTab: number;
    tabProgress: number;
    handleTabClick: (tabIndex: number) => void;
}

export function HowItWorksSection({ activeProcessTab, tabProgress, handleTabClick }: HowItWorksSectionProps) {
    const processSteps = [
        {
            title: "Custom Strategy & Setup",
            description: "We dive deep into your market, analyzing competitors, identifying your ideal customers, and crafting a custom lead generation strategy designed specifically for your business goals and budget.",
            features: [
                "Market & competitor analysis",
                "Target audience identification",
                "Custom campaign blueprint"
            ],
            image: "https://images.unsplash.com/photo-1712903276040-c99b32a057eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwcGxhbm5pbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1NzQ5Nzg0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Business strategy planning meeting"
        },
        {
            title: "Multi-Channel Activation",
            description: "We launch synchronized campaigns across search engines, social media platforms, and local directories to capture leads wherever your customers are actively searching.",
            features: [
                "Google Ads & SEO optimization",
                "Social media lead generation",
                "Local directory optimization"
            ],
            image: "https://images.unsplash.com/photo-1696041756040-c910a971f222?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwbXVsdGlwbGUlMjBjaGFubmVsc3xlbnwxfHx8fDE3NTc1MzUyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Digital marketing multiple channels"
        },
        {
            title: "Human + AI Qualification",
            description: "Our AI technology screens every lead for intent and quality, then our experienced team conducts human verification to ensure you only receive prospects ready to buy.",
            features: [
                "AI-powered intent scoring",
                "Human verification calls",
                "Quality guarantee filtering"
            ],
            image: "https://images.unsplash.com/photo-1684394944551-6c55a647337b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMHRlY2hub2xvZ3klMjBodW1hbiUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzU3NTM1Mjk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "AI technology human collaboration"
        },
        {
            title: "Lead Delivery & ROI Insights",
            description: "Receive high-quality leads instantly with comprehensive performance reporting that shows exactly what&apos driving your growth and maximizing your return on investment.",
            features: [
                "Real-time lead notifications",
                "Detailed ROI analytics",
                "Growth optimization insights"
            ],
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMFJPSSUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTc1MzUyOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Business analytics ROI dashboard"
        }
    ];

    return (
        <motion.section
            id="how-it-works"
            className="py-32 md:py-40 bg-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
                {/* Header */}
                <motion.div
                    className="text-center mb-24 md:mb-32"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge
                        variant="secondary"
                        className="mb-6 text-slate-600 bg-slate-100 hover:bg-slate-100"
                    >
                        Our Process
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.2]">
                        How It{" "}
                        <em className=" text-slate-900">Works</em>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        From initial strategy to measurable results —
                        watch your business transform through our proven
                        4-step system
                    </p>
                </motion.div>

                {/* Vertical Process Flow */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Vertical Tabs Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 transition-all duration-500 ease-in-out">
                        {/* Left Side: Vertical Tab Navigation - 4 columns on desktop, full width on mobile */}
                        <div className="lg:col-span-4 space-y-1 flex flex-col justify-center">
                            {processSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="relative border-l-4 pl-6 py-4 transition-all duration-300 ease-in-out cursor-pointer border-l-slate-200 hover:border-l-slate-300"
                                    initial={{ x: -50, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    {/* Progress indicator for active tab */}
                                    {activeProcessTab === index && (
                                        <motion.div
                                            className="absolute left-[-4px] top-0 w-1 bg-orange-600 transition-all duration-75 ease-linear z-50"
                                            style={{
                                                height: `${tabProgress}%`,
                                            }}
                                            initial={{ height: 0 }}
                                            animate={{ height: `${tabProgress}%` }}
                                        />
                                    )}

                                    <button
                                        onClick={() => handleTabClick(index)}
                                        className="w-full text-left cursor-pointer"
                                    >
                                        {activeProcessTab === index ? (
                                            // Selected tab - full content
                                            <motion.div
                                                className="space-y-5"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4 }}
                                            >
                                                <h3 className="text-2xl text-orange-600 font-medium leading-[1.3]">
                                                    {step.title}
                                                </h3>
                                                <p className="text-base text-slate-700 leading-relaxed">
                                                    {step.description}
                                                </p>
                                                <div className="space-y-3">
                                                    {step.features.map((feature, i) => (
                                                        <motion.div
                                                            key={feature}
                                                            className="flex items-center text-slate-600 text-base"
                                                            initial={{ x: -20, opacity: 0 }}
                                                            animate={{ x: 0, opacity: 1 }}
                                                            transition={{ duration: 0.3, delay: i * 0.1 }}
                                                        >
                                                            <CheckCircle className="w-5 h-5 text-orange-600 mr-3" />
                                                            <span>{feature}</span>
                                                        </motion.div>
                                                    ))}
                                                </div>

                                                {/* Mobile Image - Only visible on mobile */}
                                                <div className="lg:hidden mt-6 border border-slate-200 rounded-lg p-4 bg-slate-50 h-64">
                                                    <div className="overflow-hidden rounded-lg w-full h-full">
                                                        <img
                                                            src={step.image}
                                                            alt={step.alt}
                                                            className="w-full h-full object-cover animate-in fade-in zoom-in-95 duration-500"
                                                        />
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ) : (
                                            // Unselected tab - just title
                                            <h3 className="text-lg text-slate-400 leading-[1.3]">
                                                {step.title}
                                            </h3>
                                        )}
                                    </button>
                                </motion.div>
                            ))}
                        </div>

                        {/* Right Side: Image for Selected Tab - 8 columns, hidden on mobile */}
                        <motion.div
                            className="hidden lg:block lg:col-span-8 border border-slate-200 rounded-lg p-4 bg-slate-50 h-120 lg:h-144"
                            initial={{ x: 50, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            <div className="overflow-hidden rounded-lg w-full h-full transition-all duration-500 ease-in-out">
                                <motion.img
                                    key={activeProcessTab}
                                    src={processSteps[activeProcessTab].image}
                                    alt={processSteps[activeProcessTab].alt}
                                    className="w-full h-full object-cover"
                                    initial={{ scale: 1.1, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.6 }}
                                />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}