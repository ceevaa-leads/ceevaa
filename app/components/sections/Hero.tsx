'use client'


import { Button } from "@/app/components/atoms/Button";
import { Badge } from "@/app/components/atoms/Badge";
import { CheckCircle } from "lucide-react";
import { heroContent } from "@/app/data/content";
import { motion } from "motion/react";

export function HeroSection() {
    return (
        <motion.section
            className="relative pt-20 md:pt-32 pb-20 md:pb-24 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
        >
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                >
                    <Badge
                        variant="secondary"
                        className="mb-6 md:mb-8 text-orange-700 bg-orange-100 hover:bg-orange-100"
                    >
                        {heroContent.badge}
                    </Badge>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl tracking-tight text-slate-900 mb-6 md:mb-8 leading-[1.2]"
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                >
                    {heroContent.headline.main}
                    <br />
                    <motion.em
                        className="not-italic text-slate-900 tracking-wide"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.2 }}
                    >
                        {heroContent.headline.emphasized}
                    </motion.em>
                </motion.h1>

                <motion.p
                    className="text-lg md:text-xl text-slate-600 leading-relaxed mb-8 md:mb-12 max-w-2xl mx-auto"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                >
                    {heroContent.subtitle}
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.3 }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700 text-white px-8 h-12 rounded-lg transition-all hover:scale-105 cursor-pointer">
                            {heroContent.primaryCTA}
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto text-slate-600 hover:text-slate-900 h-12 px-8 transition-colors border-slate-300 rounded-lg cursor-pointer"
                        >
                            {heroContent.secondaryCTA}
                        </Button>
                    </motion.div>
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-slate-600"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 1.5 }}
                >
                    {heroContent.trustIndicators.map((text, i) => (
                        <motion.div
                            key={text}
                            className="flex items-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 1.5 + i * 0.1 }}
                        >
                            <CheckCircle className="w-4 h-4 text-orange-600 mr-2" />
                            {text}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}