'use client'


import { Badge, ImageWithFallback } from "@/app/components";
import { CheckCircle, Wrench, Sparkles, Leaf } from "lucide-react";
import { motion } from "motion/react";
import { whoWeServeContent } from "@/app/content";

const iconMap = {
    Wrench,
    Sparkles,
    Leaf,
};

interface WhoWeServeSectionProps {
    activeServiceTab: number;
    setActiveServiceTab: (index: number) => void;
}

export function WhoWeServeSection({
    activeServiceTab,
    setActiveServiceTab,
}: WhoWeServeSectionProps) {
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
                        {whoWeServeContent.badge}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl text-slate-900 mb-6 leading-[1.2]">
                        {whoWeServeContent.headline}

                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        {whoWeServeContent.subtitle}
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
                        {whoWeServeContent.services.map(
                            (service, index) => {
                                const IconComponent =
                                    iconMap[service.icon as keyof typeof iconMap];
                                return (
                                    <motion.button
                                        key={service.label}
                                        onClick={() => setActiveServiceTab(index)}
                                        className={`flex-1 pb-4 border-b-2 text-center transition-colors cursor-pointer ${activeServiceTab === index ? "border-sky-700" : "border-transparent"}`}
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <div
                                            className={`flex items-center justify-center gap-2 ${activeServiceTab === index
                                                ? "text-sky-700"
                                                : "text-slate-400 hover:text-slate-600"
                                                }`}
                                        >
                                            <IconComponent className="w-5 h-5" />
                                            <span className="font-medium">
                                                {service.label}
                                            </span>
                                        </div>
                                    </motion.button>
                                );
                            },
                        )}
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
                                className="w-16 h-16 bg-sky-700 rounded-2xl flex items-center justify-center mb-8"
                                whileHover={{ rotate: 5, scale: 1.05 }}
                            >
                                {(() => {
                                    const IconComponent =
                                        iconMap[
                                        whoWeServeContent.services[
                                            activeServiceTab
                                        ].icon as keyof typeof iconMap
                                        ];
                                    return (
                                        <IconComponent className="w-8 h-8 text-white" />
                                    );
                                })()}
                            </motion.div>

                            <h3 className="text-2xl md:text-3xl text-slate-900 mb-6 leading-[1.2]">
                                {
                                    whoWeServeContent.services[activeServiceTab]
                                        .title
                                }
                            </h3>

                            <p className="text-lg text-slate-700 leading-relaxed mb-8">
                                {
                                    whoWeServeContent.services[activeServiceTab]
                                        .description
                                }
                            </p>

                            <div className="space-y-5">
                                {whoWeServeContent.services[
                                    activeServiceTab
                                ].features.map((feature, i) => (
                                    <motion.div
                                        key={feature}
                                        className="flex items-center text-slate-600"
                                        initial={{ x: -20, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: 0.4 + i * 0.1,
                                        }}
                                    >
                                        <CheckCircle className="w-6 h-6 text-sky-700 mr-4" />
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
                                src={
                                    whoWeServeContent.services[activeServiceTab]
                                        .image
                                }
                                alt={
                                    whoWeServeContent.services[activeServiceTab]
                                        .alt
                                }
                                className="w-full h-full object-cover bg-white border border-slate-200 p-3 rounded-lg shadow-lg shadow-sky-200/50"
                            />
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}