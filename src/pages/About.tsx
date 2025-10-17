// about.tsx
import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next"; // <-- BARU: Import hook i18n

export default function About() {
    const { t, i18n } = useTranslation(); // <-- BARU: Panggil hook

    // Fungsi bantu untuk membagi judul jika ada tag HTML
    const getStyledTitle = (key: string) => {
        const titleText = t(key);
        // Misal: titleText = "About Me" atau "Tentang Saya"
        // Kita hanya akan memisahkan kata terakhir untuk styling.
        const words = titleText.split(' ');
        if (words.length > 1) {
            const lastWord = words.pop();
            const restOfTitle = words.join(' ');
            return (
                <>
                    {restOfTitle} <span className="text-sky-400">{lastWord}</span>
                </>
            );
        }
        return <span className="text-sky-400">{titleText}</span>;
    };

    // Data untuk Card (menggunakan key translation)
    const highlightCards = [
        {
            icon: Code2,
            titleKey: "about.card1_title",
            descKey: "about.card1_desc",
        },
        {
            icon: Palette,
            titleKey: "about.card2_title",
            descKey: "about.card2_desc",
        },
        {
            icon: Rocket,
            titleKey: "about.card3_title",
            descKey: "about.card3_desc",
        },
    ];


    return (
        <section
            id="about"
            className="relative min-h-screen flex flex-col justify-center items-center 
                        bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 
                        text-slate-100 px-6 md:px-20 py-24 overflow-hidden"
        >
            {/* Background Accent Glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_60%_20%,rgba(56,189,248,0.15),transparent_60%)]"></div>

            {/* Judul */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
                    {getStyledTitle("about.title")} {/* Menggunakan fungsi bantu */}
                </h2>
                <div className="h-1 w-24 mx-auto bg-gradient-to-r from-sky-400 to-blue-600 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.4)]"></div>
            </motion.div>

            {/* Konten */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                {/* Teks Deskripsi */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-slate-300 text-base leading-relaxed space-y-5"
                >
                    <p>
                        {t("about.desc1")} {/* Teks Deskripsi 1 dari i18n */}
                    </p>

                    <p>
                        {t("about.desc2")} {/* Teks Deskripsi 2 dari i18n */}
                    </p>

                    {/* Tambahkan kembali penekanan (bold) yang hilang, karena teks dari i18n adalah plain text */}
                    {i18n.language === 'id' ? (
                        <p className="text-sm italic text-slate-400 border-l-4 border-sky-400 pl-4 pt-2">
                            Fokus: <b className="text-sky-400">Frontend Development</b>, <b className="text-sky-400">UI/UX Design</b>, dan <b className="text-sky-400">Teknologi Modern</b>.
                        </p>
                    ) : (
                        <p className="text-sm italic text-slate-400 border-l-4 border-sky-400 pl-4 pt-2">
                            Focus: <b className="text-sky-400">Frontend Development</b>, <b className="text-sky-400">UI/UX Design</b>, and <b className="text-sky-400">Modern Technology</b>.
                        </p>
                    )}
                </motion.div>

                {/* Highlight Cards */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                    {highlightCards.map((card, index) => {
                        const Icon = card.icon; // Komponen Icon
                        return (
                            <motion.div
                                key={index}
                                whileHover={{ y: -6, scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 
                                            shadow-[0_0_20px_rgba(56,189,248,0.1)] hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] 
                                            transition-all duration-300 ${index === 2 ? 'sm:col-span-2' : ''}`}
                            >
                                <Icon className="text-sky-400 mb-3" size={30} />
                                <h3 className="font-semibold text-lg mb-1 text-white">{t(card.titleKey)}</h3>
                                <p className="text-slate-400 text-sm">
                                    {t(card.descKey)}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}