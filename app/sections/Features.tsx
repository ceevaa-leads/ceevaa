'use client'

import { Button, Badge } from "@/app/components";
import {
    Settings, Target, BarChart3, Zap, ArrowRight, CheckCircle
} from "lucide-react";
import { motion } from "motion/react";
import { featuresContent } from "@/app/content";
import { BookDemoForm } from "@/app/sections/BookDemoForm";

// Icon mapping helper - Add more icons as needed
const iconMap = {
    Settings,
    Target,
    BarChart3,
    Zap
};

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
                        {featuresContent.badge}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.2]">
                        {featuresContent.headline}
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {featuresContent.subtitle}
                    </p>
                </motion.div>

                {/* Dynamic Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {featuresContent.features.slice(0, 3).map((feature, index) => {
                        const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
                        return (
                            <motion.div
                                key={feature.title}
                                className={`bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 group ${feature.featured ? 'md:row-span-2' : ''
                                    }`}
                                initial={{ y: 60, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -5 }}
                            >
                                <motion.div
                                    className={`bg-sky-700 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${feature.featured ? 'w-16 h-16 rounded-2xl mb-8' : 'w-12 h-12'
                                        }`}
                                    whileHover={{ rotate: 5 }}
                                >
                                    <IconComponent className={feature.featured ? 'w-8 h-8 text-white' : 'w-6 h-6 text-white'} />
                                </motion.div>
                                <h3 className={`text-slate-900 leading-[1.3] ${feature.featured ? 'text-xl md:text-2xl mb-4' : 'text-lg md:text-xl mb-3'
                                    }`}>
                                    {feature.title}
                                </h3>
                                <p className={`text-slate-600 leading-relaxed ${feature.featured ? 'text-base mb-8' : 'text-base'
                                    }`}>
                                    {feature.description}
                                </p>
                                {/* Featured points - only show for featured items */}
                                {feature.featured && feature.points && (
                                    <motion.div
                                        className="space-y-4"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ duration: 0.6, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        {feature.points.map((text, i) => (
                                            <motion.div
                                                key={text}
                                                className="flex items-center text-slate-600"
                                                initial={{ x: -20, opacity: 0 }}
                                                whileInView={{ x: 0, opacity: 1 }}
                                                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                                                viewport={{ once: true }}
                                            >
                                                <CheckCircle className="w-5 h-5 text-sky-700 mr-3" />
                                                <span>{text}</span>
                                            </motion.div>
                                        ))}
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Full-Width Card */}
                <motion.div
                    className="mt-6 md:mt-8 bg-sky-700 rounded-2xl md:rounded-3xl p-8 md:p-10 text-white group hover:scale-[1.02] transition-all duration-300"
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
                            {(() => {
                                const IconComponent = iconMap[featuresContent.bottomCard.icon as keyof typeof iconMap];
                                return <IconComponent className="w-8 h-8 text-white" />;
                            })()}
                        </motion.div>
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl text-white mb-3 leading-[1.3]">
                                {featuresContent.bottomCard.title}
                            </h3>
                            <p className="text-base text-white leading-relaxed">
                                {featuresContent.bottomCard.description}
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3 mt-6 md:mt-0">
                            <BookDemoForm key={featuresContent.bottomCard.cta}>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                                    <Button className="bg-white text-slate-900 hover:bg-slate-100 px-6 h-12 rounded-lg cursor-pointer">
                                        {featuresContent.bottomCard.cta}
                                        <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </motion.div>
                            </BookDemoForm>
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}