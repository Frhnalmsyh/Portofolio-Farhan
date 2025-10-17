import { motion } from "framer-motion";
import { Code2, Palette, Server } from "lucide-react";
import { useTranslation } from "react-i18next";
import SkillCard from "../components/SkillCard";

export default function Skills() {
    const { t } = useTranslation();

    const skills = [
        {
            icon: <Code2 className="text-sky-400" size={26} />,
            title: t("skills.card1_title"),
            desc: t("skills.card1_desc"),
            level: 85,
            items: t("skills.card1_items", { returnObjects: true }) as string[],
        },
        {
            icon: <Palette className="text-sky-400" size={26} />,
            title: t("skills.card2_title"),
            desc: t("skills.card2_desc"),
            level: 85,
            items: t("skills.card2_items", { returnObjects: true }) as string[],
        },
        {
            icon: <Server className="text-sky-400" size={26} />,
            title: t("skills.card3_title"),
            desc: t("skills.card3_desc"),
            level: 60,
            items: t("skills.card3_items", { returnObjects: true }) as string[],
        },
    ];

    return (
        <section
            id="skills"
            className="relative min-h-screen flex flex-col items-center justify-center
                 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 
                 text-slate-100 px-6 py-24 overflow-hidden"
        >
            {/* Subtle background glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.08),transparent_70%)]" />

            {/* Section Title */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
                    {t("skills.title").split(" ")[0]}{" "}
                    <span className="text-sky-400">{t("skills.title").split(" ")[1]}</span>
                </h2>
                <div className="h-1 w-28 mx-auto bg-gradient-to-r from-sky-400 to-blue-600 rounded-full shadow-[0_0_25px_rgba(56,189,248,0.5)]"></div>
                <p className="text-slate-400 mt-5 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                    {t("skills.subtitle")}
                </p>
            </motion.div>

            {/* Skill Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    visible: {
                        transition: { staggerChildren: 0.15 },
                    },
                }}
            >
                {skills.map((skill, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <SkillCard {...skill} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
