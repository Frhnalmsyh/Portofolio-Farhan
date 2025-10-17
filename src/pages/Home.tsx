import { motion, AnimatePresence } from "framer-motion";
import { ArrowDownCircle } from "lucide-react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import aan1 from "../assets/pictures/aan1.png";

export default function Home() {
    const { t, i18n } = useTranslation();

    return (
        <section
            id="home"
            className="relative min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between
        bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100
        px-6 md:px-20 py-24 overflow-hidden"
        >
            {/* === BACKGROUND === */}
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.08),transparent_70%)]"></div>
            <div className="absolute top-10 right-20 w-96 h-96 bg-sky-500/20 rounded-full blur-[150px] -z-10 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[160px] -z-10"></div>

            {/* === PHOTO SECTION === */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="order-1 md:order-2 mb-10 md:mb-0 relative flex justify-center w-full md:w-auto"
            >
                <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="relative w-64 md:w-[400px] rounded-[30%_70%_70%_30%_/_30%_30%_70%_70%]
          overflow-hidden border-[3px] border-sky-400/40 shadow-[0_0_60px_rgba(56,189,248,0.4)]"
                >
                    <img
                        src={aan1}
                        alt="Farhan Alamsyah"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 to-transparent"></div>
                </motion.div>
            </motion.div>

            {/* === TEXT SECTION === */}
            <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="order-2 md:order-1 flex flex-col justify-center max-w-xxl text-center md:text-left
          space-y-6 backdrop-blur-sm p-6 md:p-8 rounded-2xl "
            >
                {/* AnimatePresence agar teks berubah halus saat switch bahasa */}
                <AnimatePresence mode="wait">
                    <motion.h1
                        key={i18n.language + "-title"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-4xl md:text-4xl font-extrabold leading-tight"
                    >
                        {t("home.title", { name: "Farhan Alamsyah" })}
                    </motion.h1>
                </AnimatePresence>

                <AnimatePresence mode="wait">
                    <motion.p
                        key={i18n.language + "-desc"}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0"
                    >
                        {t("home.description")}
                    </motion.p>
                </AnimatePresence>

                <motion.div
                    whileHover={{ scale: 1.07 }}
                    whileTap={{ scale: 0.96 }}
                    className="flex justify-center md:justify-start"
                >
                    <Link
                        to="projects"
                        smooth={true}
                        duration={500}
                        offset={-70}
                        className="flex items-center gap-2 bg-sky-400/10 border border-sky-400/40 px-8 py-3 rounded-full 
              text-sky-400 font-medium hover:bg-sky-400 hover:text-slate-900 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
              transition-all duration-300 cursor-pointer backdrop-blur-sm"
                    >
                        {t("home.button")} <ArrowDownCircle size={20} />
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
