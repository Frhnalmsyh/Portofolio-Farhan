// projectcard.tsx (Versi Futuristik & Dioptimalkan)
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
    name: string;
    desc: string;
    tech: string;
    link?: string;
    image?: string;
    index: number;
}

// Komponen Pembantu: Tech Badge
function TechBadge({ tech }: { tech: string }) {
    return (
        <motion.span
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-3 py-1.5 text-xs font-semibold rounded-full 
                       bg-gradient-to-r from-sky-500/20 to-blue-600/20 
                       border border-sky-400/30 text-sky-300
                       backdrop-blur-sm shadow-[0_0_10px_rgba(56,189,248,0.2)]
                       hover:shadow-[0_0_15px_rgba(56,189,248,0.4)]
                       transition-all duration-300"
        >
            {tech}
        </motion.span>
    );
}

export default function ProjectCard({ name, desc, tech, link, image }: ProjectCardProps) {
    const { t } = useTranslation();
    const techArray = tech.split(", ").filter(t => t.trim() !== "");

    return (
        <motion.div
            className="flex-shrink-0 w-[90vw] p-2 md:w-[600px] h-[500px]"
        >
            <motion.div
                whileHover={{ y: -12, rotateY: 2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative h-full overflow-hidden rounded-3xl 
                           border border-white/10 backdrop-blur-xl
                           bg-gradient-to-br from-slate-900/90 via-slate-800/90 to-slate-900/90
                           ,inset_0_0_60px_rgba(56,189,248,0.05)]
                           hover:shadow-[0_0_60px_rgba(56,189,248,0.3),inset_0_0_80px_rgba(56,189,248,0.08)]
                           transition-all duration-500"
            >
                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-sky-400/20 via-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 blur-xl transition-opacity duration-100 -z-10"></div>

                {/* Image Section */}
                {image && (
                    <div className="relative h-56 overflow-hidden group">
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-400/10 to-blue-600/10 mix-blend-overlay z-10"></div>
                        <img
                            // *** OPTIMASI: Pertimbangkan menggunakan Next/Image atau tag <picture> untuk image load yang lebih baik ***
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover transition-all duration-300 
                                       group-hover:scale-110 group-hover:brightness-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent z-10"></div>

                        {/* Floating tech preview badge */}
                        {/* <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full
                                       bg-slate-900/80 backdrop-blur-md border border-sky-400/40
                                       text-sky-300 text-xs font-bold shadow-lg"
                        >
                            {t("projects.featured_badge", { defaultValue: "⚡ Featured" })}
                        </motion.div> */}
                    </div>
                )}

                {/* Content */}
                <div className="p-6 flex flex-col justify-between h-[calc(100%-14rem)]">
                    <div>
                        <h3 className="text-2xl font-extrabold bg-gradient-to-r from-sky-300 via-blue-300 to-sky-400 
                                       bg-clip-text text-transparent mb-3 leading-tight">
                            {name}
                        </h3>
                        <p className="text-slate-300 text-sm leading-relaxed mb-5">
                            {desc}
                        </p>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mb-4">
                            {techArray.map((t, i) => (
                                <TechBadge key={i} tech={t} />
                            ))}
                        </div>
                    </div>

                    {/* CTA Button */}
                    {link && (
                        <motion.a
                            whileHover={{ scale: 1.01, x: 5 }}
                            whileTap={{ scale: 0.98 }}
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 
                                       px-5 py-3 rounded-xl mt-auto group 
                                       bg-gradient-to-r from-sky-500 to-blue-600 
                                       hover:from-sky-400 hover:to-blue-500
                                       text-white text-sm font-bold
                                       shadow-[0_0_20px_rgba(56,189,248,0.1)]
                                       hover:shadow-[0_0_30px_rgba(56,189,248,0.1)]
                                       border border-sky-400/30
                                       transition-all duration-100"
                        >
                            {t("projects.view_project", { defaultValue: "View Project" })}
                            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                    )}
                </div>
            </motion.div>
        </motion.div>
    );
}