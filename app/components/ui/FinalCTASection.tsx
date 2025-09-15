'use client'


import * as React from "react";
import { Button } from "./Button";
import { Badge } from "./Badge";
import { CheckCircle } from "lucide-react";
import { motion } from "motion/react";

export function FinalCTASection() {
    return (
        <motion.section
            className="py-24 md:py-32 bg-orange-600 text-white relative overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
        >
            <div className="absolute inset-0 bg-orange-600"></div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <Badge
                        variant="secondary"
                        className="mb-6 md:mb-8 text-orange-600 bg-white hover:bg-white"
                    >
                        Ready to Get Started?
                    </Badge>
                </motion.div>

                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl mb-6 md:mb-8 leading-[1.2]"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    Your next customer is already{" "}
                    <em className=" text-white">searching</em>.
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-white mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    Let&apos make sure they find you — not your competitor.
                    <br />
                    Join hundreds of successful service pros.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button className="w-full sm:w-auto bg-white text-slate-900 hover:bg-slate-100 px-8 h-12 rounded-lg transition-all hover:scale-105 cursor-pointer">
                            Get Started Free
                        </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button
                            variant="outline"
                            className="w-full sm:w-auto text-white hover:bg-white/10 hover:text-white border border-white bg-transparent h-12 px-8 rounded-lg transition-colors cursor-pointer"
                        >
                            Talk to Our Experts
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                >
                    {[
                        "Free setup & consultation",
                        "No long-term contracts",
                        "Money-back guarantee"
                    ].map((text, i) => (
                        <motion.div
                            key={text}
                            className="flex items-center"
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <CheckCircle className="w-4 h-4 text-white mr-2" />
                            {text}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </motion.section>
    );
}