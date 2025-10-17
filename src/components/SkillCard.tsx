import { motion } from "framer-motion";

interface SkillCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    level: number;
    items: string[];
}

export default function SkillCard({ icon, title, desc, level, items }: SkillCardProps) {
    return (
        <motion.div
            whileHover={{ scale: 1.04, y: -5 }}
            transition={{ type: "spring", stiffness: 220, damping: 15 }}
            className="relative bg-gradient-to-br from-white/10 to-white/5 border border-white/10 
                 rounded-2xl p-6 backdrop-blur-xl shadow-[0_0_25px_rgba(56,189,248,0.1)]
                 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all duration-500"
        >
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-sky-500/10 rounded-xl">{icon}</div>
                <h3 className="text-lg font-semibold tracking-wide text-sky-400">{title}</h3>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-sm leading-relaxed mb-4">{desc}</p>

            {/* Level Bar */}
            <div className="relative w-full bg-slate-800/60 h-2 rounded-full mb-4 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-sky-400 to-blue-600 rounded-full 
                     shadow-[0_0_12px_rgba(56,189,248,0.6)]"
                />
                <span className="absolute right-0 -top-5 text-xs text-slate-500 font-semibold">
                    {level}%
                </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
                {items.map((item, i) => (
                    <motion.span
                        key={i}
                        whileHover={{ scale: 1.08 }}
                        className="px-3 py-1 text-xs bg-slate-900/60 text-slate-100 rounded-full border 
                       border-slate-700 hover:border-sky-400 transition-all"
                    >
                        {item}
                    </motion.span>
                ))}
            </div>
        </motion.div>
    );
}
