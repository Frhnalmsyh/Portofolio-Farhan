import { Link } from "react-scroll";
import { Menu, X, Languages } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { t, i18n } = useTranslation(); // 👉 Tambah ini

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const linkClass =
        "hover:text-sky-400 transition-colors text-white hover:scale-105 duration-300 text-sm md:text-[15px] font-medium cursor-pointer";

    // Gunakan teks dari file terjemahan
    const menuItems = [
        { name: t("navbar.home"), to: "home" },
        { name: t("navbar.about"), to: "about" },
        { name: t("navbar.projects"), to: "projects" },
        { name: t("navbar.skills"), to: "skills" },
        { name: t("navbar.contact"), to: "contact" },
    ];

    // 🌐 Fungsi ganti bahasa
    const toggleLanguage = () => {
        const newLang = i18n.language === "en" ? "id" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-all duration-300 ${scrolled ? "bg-slate-900/70 shadow-lg" : "bg-transparent"
                }`}
        >
            <div className="flex justify-between items-center px-6 md:px-16 py-4">
                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600 select-none">
                    Farhan<span className="text-slate-200">Alamsyah</span>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {menuItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            className={linkClass}
                        >
                            {item.name}
                        </Link>
                    ))}

                    {/* 🌍 Language Switch Button */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 border border-sky-500/40 px-3 py-1.5 rounded-full text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all duration-300"
                    >
                        <Languages size={18} />
                        {i18n.language === "en" ? "EN" : "ID"}
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-sky-400 hover:text-sky-300 transition"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-slate-900/90 backdrop-blur-md flex flex-col items-center gap-6 py-6 shadow-lg border-t border-slate-800"
                    >
                        {menuItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                onClick={() => setOpen(false)}
                                className={linkClass}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Switch Bahasa di Mobile */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center gap-2 border border-sky-500/40 px-4 py-2 rounded-full text-sky-400 hover:bg-sky-400 hover:text-slate-900 transition-all duration-300"
                        >
                            <Languages size={18} />
                            {i18n.language === "en" ? "EN" : "ID"}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
