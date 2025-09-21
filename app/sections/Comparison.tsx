'use client'

import { Badge } from "@/app/components";
import { Check, X as XIcon } from "lucide-react";
import { motion } from "motion/react";
import { comparisonContent } from "@/app/content";

export function ComparisonSection() {
    return (
        <motion.section
            id="comparison"
            className="py-20 md:py-24 bg-white"
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
                        {comparisonContent.badge}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.2]">
                        {comparisonContent.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        {comparisonContent.subtitle}
                    </p>
                </motion.div>

                {/* Mobile Comparison - Stack vertically on small screens */}
                <div className="lg:hidden space-y-8">
                    {comparisonContent.comparisons.map((comparison, i) => (
                        <motion.div
                            key={comparison.title}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
                            initial={{ y: 60, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-6 bg-slate-50 border-b border-slate-100">
                                <h4 className="text-lg text-slate-900 leading-[1.3]">
                                    {comparison.title}
                                </h4>
                            </div>

                            <div className="p-6 bg-slate-50/50 border-b border-slate-100">
                                <h5 className="text-sm font-semibold text-slate-600 mb-4 uppercase tracking-wider">
                                    Others
                                </h5>
                                <div className="space-y-3">
                                    {comparison.others.map((text, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-base text-slate-700">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-6 bg-sky-50">
                                <h5 className="text-sm font-semibold text-sky-700 mb-4 uppercase tracking-wider">
                                    CeeVaa
                                </h5>
                                <div className="space-y-3">
                                    {comparison.ceevaa.map((text, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-900 font-medium">
                                                {text}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop Comparison Table - Hidden on mobile */}
                <motion.div
                    className="hidden md:block bg-white rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm overflow-hidden"
                    initial={{ y: 60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    {/* Table Header */}
                    <div className="grid grid-cols-3 bg-slate-50 border-b border-slate-100">
                        <div className="p-6 md:p-8"></div>
                        <div className="p-6 md:p-8 text-center bg-slate-50">
                            <h3 className="text-lg md:text-xl text-slate-600 leading-[1.3]">
                                Others
                            </h3>
                        </div>
                        <div className="p-6 md:p-8 text-center bg-sky-700 text-white">
                            <h3 className="text-lg md:text-xl leading-[1.3]">
                                CeeVaa
                            </h3>
                        </div>
                    </div>

                    {/* Comparison Rows */}
                    {comparisonContent.comparisons.map((comparison, index) => (
                        <motion.div
                            key={comparison.title}
                            className={`grid grid-cols-3 ${index < comparisonContent.comparisons.length - 1 ? 'border-b border-slate-100' : ''}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="p-6 md:p-8 bg-slate-50">
                                <h4 className="text-lg text-slate-900 leading-[1.3]">
                                    {comparison.title}
                                </h4>
                            </div>
                            <div className="p-6 md:p-8 bg-slate-50/50">
                                {comparison.others.map((text, i) => (
                                    <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'mt-3' : ''}`}>
                                        <XIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-6 md:p-8 bg-sky-50">
                                {comparison.ceevaa.map((text, i) => (
                                    <div key={i} className={`flex items-start gap-3 ${i > 0 ? 'mt-3' : ''}`}>
                                        <Check className="w-5 h-5 text-sky-700 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-900 font-medium">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}
