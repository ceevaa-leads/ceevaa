'use client'


import * as React from "react";
import { Badge } from "../atoms/Badge";
import { CheckCircle, Wrench, Sparkles, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { ImageWithFallback } from "../atoms/ImageWithFallback";

interface WhoWeServeSectionProps {
    activeServiceTab: number;
    setActiveServiceTab: (index: number) => void;
}

export function WhoWeServeSection({ activeServiceTab, setActiveServiceTab }: WhoWeServeSectionProps) {
    const services = [
        {
            icon: Wrench,
            label: "HVAC Contractors",
            title: "HVAC Contractors",
            description: "Generate qualified leads for urgent repairs, system installations, and maintenance contracts. We target customers when their heating and cooling systems need immediate attention.",
            features: [
                "Emergency repair calls",
                "System installations",
                "Maintenance contracts"
            ],
            image: "https://images.unsplash.com/photo-1708745427274-d5de5122fd57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxIVkFDJTIwcmVwYWlyJTIwdGVjaG5pY2lhbiUyMHdvcmtpbmd8ZW58MXx8fHwxNzU3NjE3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "HVAC technician working on air conditioning system"
        },
        {
            icon: Sparkles,
            label: "Cleaning Services",
            title: "Cleaning Services",
            description: "Connect with homeowners and businesses actively searching for reliable cleaning solutions. From weekly house cleaning to specialized commercial services, we deliver ready-to-book clients.",
            features: [
                "Residential cleaning",
                "Commercial offices",
                "Specialty deep cleaning"
            ],
            image: "https://images.unsplash.com/photo-1581578949510-fa7315c4c350?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjbGVhbmluZyUyMHNlcnZpY2UlMjBob21lfGVufDF8fHx8MTc1NzU3NTUwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Professional cleaning service team working in home"
        },
        {
            icon: Leaf,
            label: "Landscaping Pros",
            title: "Landscaping Pros",
            description: "Capture leads from property owners looking to transform their outdoor spaces. Whether it&apos routine maintenance or complete landscape makeovers, we bring you customers ready to invest.",
            features: [
                "Lawn care & maintenance",
                "Landscape design",
                "Seasonal services"
            ],
            image: "https://images.unsplash.com/photo-1734079692160-fcbe4be6ab96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMGdhcmRlbmluZyUyMHByb2Zlc3Npb25hbCUyMHNlcnZpY2V8ZW58MXx8fHwxNzU3NjE3OTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
            alt: "Professional landscaping and gardening services"
        }
    ];

    return (
        <motion.section
            id="services"
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
                        Service Industries
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.2]">
                        Who We{" "}
                        <span className=" text-slate-900">Serve</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Perfect for small business owners who want
                        customers without the marketing headaches
                    </p>
                </motion.div>

                {/* Tab Navigation */}
                <motion.div
                    className="flex justify-center mb-16 md:mb-20"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="flex border-b border-slate-200 max-w-4xl w-full">
                        {services.map((service, index) => (
                            <motion.button
                                key={service.label}
                                onClick={() => setActiveServiceTab(index)}
                                className="flex-1 pb-4 border-b-2 text-center transition-colors cursor-pointer"
                                style={{
                                    borderBottomColor:
                                        activeServiceTab === index
                                            ? "#ea580c"
                                            : "transparent",
                                }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div
                                    className={`flex items-center justify-center gap-2 ${activeServiceTab === index
                                        ? "text-orange-600"
                                        : "text-slate-400 hover:text-slate-600"
                                        }`}
                                >
                                    <service.icon className="w-5 h-5" />
                                    <span className="font-medium">
                                        {service.label}
                                    </span>
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Tab Content */}
                <motion.div
                    key={activeServiceTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
                        {/* Content - Takes 2 columns */}
                        <motion.div
                            className="lg:col-span-2 flex flex-col justify-center max-w-lg"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <motion.div
                                className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-8"
                                whileHover={{ rotate: 5, scale: 1.05 }}
                            >
                                {(() => {
                                    const IconComponent = services[activeServiceTab].icon;
                                    return <IconComponent className="w-8 h-8 text-white" />;
                                })()}
                            </motion.div>

                            <h3 className="text-2xl md:text-3xl text-slate-900 mb-6 leading-[1.2]">
                                {services[activeServiceTab].title}
                            </h3>

                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                {services[activeServiceTab].description}
                            </p>

                            <div className="space-y-5">
                                {services[activeServiceTab].features.map((feature, i) => (
                                    <motion.div
                                        key={feature}
                                        className="flex items-center text-slate-600"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-orange-600 mr-4" />
                                        <span className="text-base font-medium">
                                            {feature}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Service Image - Takes 3 columns */}
                        <motion.div
                            className="lg:col-span-3 overflow-hidden rounded-lg h-80 lg:h-96"
                            initial={{ x: 50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            whileHover={{ scale: 1.02 }}
                        >
                            <ImageWithFallback
                                src={services[activeServiceTab].image}
                                alt={services[activeServiceTab].alt}
                                className="w-full h-full object-cover bg-white border border-slate-200 p-3 rounded-lg shadow-lg shadow-orange-200/50"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}