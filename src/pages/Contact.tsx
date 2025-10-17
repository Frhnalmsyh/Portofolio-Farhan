import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram, Code2, Cpu, TerminalSquare } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();

    const socials = [
        { name: "GitHub", icon: <Github size={22} />, link: "https://github.com/Frhnalmsyh" },
        { name: "LinkedIn", icon: <Linkedin size={22} />, link: "https://www.linkedin.com/in/frhnalmsyh/" },
        { name: "Instagram", icon: <Instagram size={22} />, link: "https://www.instagram.com/frhnalmsyh/" },
    ];

    return (
        <section
            id="contact"
            className="relative min-h-screen flex flex-col items-center justify-center 
                       bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 
                       text-slate-100 px-6 py-24 overflow-hidden"
        >
            {/* === Subtle Tech Grid === */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_40%_20%,rgba(56,189,248,0.06),transparent_70%)]"></div>
            <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('/grid.svg')] bg-[size:40px_40px]"></div>

            {/* === Floating Tech Orbs === */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                className="absolute top-[15%] left-[12%] text-sky-500/50"
            >
                <Code2 size={36} />
            </motion.div>

            <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                className="absolute bottom-[15%] right-[12%] text-blue-400/40"
            >
                <Cpu size={42} />
            </motion.div>

            <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
                className="absolute bottom-[25%] left-[20%] text-sky-400/40"
            >
                <TerminalSquare size={38} />
            </motion.div>

            {/* === Glowing Ring Behind Title === */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[480px] h-[480px] rounded-full bg-gradient-to-r from-sky-500/10 to-blue-600/10 blur-3xl border border-sky-400/10"></div>

            {/* === Title === */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-8 relative z-10"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    {t("contact.title").split(" ")[0]}{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                        {t("contact.title").split(" ")[1]}
                    </span>
                </h2>
                <div className="h-[2px] w-28 mx-auto mt-3 bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.5)]"></div>
            </motion.div>

            {/* === Subtitle === */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-slate-400 text-center max-w-xl mb-10 leading-relaxed text-sm md:text-base z-10"
            >
                {t("contact.subtitle")}
            </motion.p>

            {/* === Email Button (Glowing CTA) === */}
            <motion.a
                href="mailto:farhanalamsyah47@gmail.com"
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-8 py-3 rounded-full border border-sky-400/50 
                           text-sky-300 font-medium backdrop-blur-md
                           bg-slate-900/40 shadow-[0_0_20px_rgba(56,189,248,0.2)]
                           hover:bg-sky-400 hover:text-slate-900 transition-all duration-300 z-10"
            >
                <Mail size={20} className="group-hover:animate-pulse" /> {t("contact.button")}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-400/20 to-blue-600/20 blur-xl -z-10"></div>
            </motion.a>

            {/* === Social Links === */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className="flex gap-6 mt-12 z-10"
            >
                {socials.map((s, i) => (
                    <motion.a
                        key={i}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ y: -4, scale: 1.1 }}
                        whileTap={{ scale: 0.96 }}
                        className="p-3 rounded-full border border-transparent text-slate-400 
                                   hover:text-sky-400 hover:border-sky-400/50 hover:bg-slate-800/40 
                                   transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.25)]"
                    >
                        {s.icon}
                    </motion.a>
                ))}
            </motion.div>

            {/* === Footer Note === */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 1 }}
                viewport={{ once: true }}
                className="text-slate-500 text-xs mt-14 tracking-wide z-10"
            >
                © {new Date().getFullYear()} {t("contact.footer")}
            </motion.p>
        </section>
    );
}
