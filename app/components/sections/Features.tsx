'use client'

import * as React from "react";
import { Button } from "../atoms/Button";
import { Badge } from "../atoms/Badge";
import { Settings, Target, BarChart3, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function FeaturesSection() {
    return (
        <motion.section
            id="features"
            className="py-20 md:py-24 bg-slate-50"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge
                        variant="secondary"
                        className="mb-6 text-slate-600 bg-slate-100 hover:bg-slate-100"
                    >
                        Platform Features
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.2]">
                        More Than Software — Your{" "}
                        <span className=" text-slate-900 underline decoration-orange-600 wavy-underline underline-offset-4">
                            Growth Partner
                        </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        We handle the complexity of lead generation so you
                        can focus on what you do best.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Featured Card - Spans full width on mobile, left column on desktop */}
                    <motion.div
                        className="lg:row-span-2 bg-white rounded-2xl md:rounded-3xl p-8 md:p-10 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <motion.div
                            className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform"
                            whileHover={{ rotate: 5 }}
                        >
                            <Settings className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl md:text-2xl text-slate-900 mb-4 leading-[1.3]">
                            Fully Managed Campaigns
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed mb-8">
                            We handle everything from setup to optimization,
                            so you can focus on your business. No technical
                            knowledge required.
                        </p>
                        <motion.div
                            className="space-y-4"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            {[
                                "Complete campaign setup & management",
                                "Ongoing optimization & testing",
                                "Dedicated account manager"
                            ].map((text, i) => (
                                <motion.div
                                    key={text}
                                    className="flex items-center text-slate-600"
                                    initial={{ x: -20, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <CheckCircle className="w-5 h-5 text-slate-600 mr-3" />
                                    <span>{text}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Top Right Card */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <motion.div
                            className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                            whileHover={{ rotate: 5 }}
                        >
                            <Target className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg md:text-xl text-slate-900 mb-3 leading-[1.3]">
                            Exclusive, High-Intent Leads
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">
                            AI-verified prospects ready to buy, not shared
                            with competitors. Each lead is yours alone to
                            convert.
                        </p>
                    </motion.div>

                    {/* Bottom Right Card */}
                    <motion.div
                        className="bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group"
                        initial={{ y: 60, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                    >
                        <motion.div
                            className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
                            whileHover={{ rotate: 5 }}
                        >
                            <BarChart3 className="w-6 h-6 text-white" />
                        </motion.div>
                        <h3 className="text-lg md:text-xl text-slate-900 mb-3 leading-[1.3]">
                            Real-Time ROI Tracking
                        </h3>
                        <p className="text-base text-slate-600 leading-relaxed">
                            Know exactly what&apos working with detailed
                            performance analytics. Track every dollar spent
                            and earned.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Full-Width Card */}
                <motion.div
                    className="mt-6 md:mt-8 bg-orange-600 rounded-2xl md:rounded-3xl p-8 md:p-10 text-white group hover:scale-[1.02] transition-all duration-300"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        <motion.div
                            className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform"
                            whileHover={{ rotate: 10 }}
                        >
                            <Zap className="w-8 h-8 text-white" />
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl text-white mb-3 leading-[1.3]">
                                Scalable & Flexible
                            </h3>
                            <p className="text-base text-white leading-relaxed">
                                Grow at your own pace with campaigns that
                                scale with your business. Start small, scale
                                big. Our platform adapts to your growth
                                trajectory.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Button className="bg-white text-slate-900 hover:bg-slate-100 px-6 h-12 rounded-lg cursor-pointer">
                                    Start Growing
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Button>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}