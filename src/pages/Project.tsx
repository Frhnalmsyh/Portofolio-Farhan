// projects.tsx (Versi Slider Futuristik & Dioptimalkan)
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { useTranslation } from "react-i18next";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import cookyummy from "../assets/pictures/cookyummy.png";
import drivertulus from "../assets/pictures/drivertulus.png";
import tulus from "../assets/pictures/tulus.png";
import mentorify from "../assets/pictures/mentorify.png";
import mit from "../assets/pictures/mit.png";

export default function Projects() {
    const { t } = useTranslation();
    const ref = useRef(null);
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Gunakan useScroll untuk efek Parallax pada background
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const yGlow = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    // Fungsi bantu untuk memisahkan judul
    const getStyledTitle = (key: string) => {
        const titleText = t(key);
        const words = titleText.split(' ');
        if (words.length > 1) {
            const lastWord = words.pop();
            const restOfTitle = words.join(' ');
            return (
                <>
                    <span className="bg-gradient-to-r from-slate-100 via-sky-200 to-slate-100 bg-clip-text text-transparent">
                        {restOfTitle}
                    </span>{" "}
                    <span className="bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 bg-clip-text text-transparent">
                        {lastWord}
                    </span>
                </>
            );
        }
        return <span className="text-sky-400">{titleText}</span>;
    };

    // Data Project (i18n-ready)
    const projects = [
        {
            name: t("projects.card1_name"),
            desc: t("projects.card1_desc"),
            tech: t("projects.card1_tech"),
            link: "#",
            image: tulus,
        },
        {
            name: t("projects.card2_name"),
            desc: t("projects.card2_desc"),
            tech: t("projects.card2_tech"),
            link: "#",
            image: drivertulus,
        },
        {
            name: t("projects.card3_name"),
            desc: t("projects.card3_desc"),
            tech: t("projects.card3_tech"),
            link: "#",
            image: mit,
        },
        {
            name: t("projects.card4_name"),
            desc: t("projects.card4_desc"),
            tech: t("projects.card4_tech"),
            link: "#",
            image: mentorify, // tambahkan variabel import-nya
        },
        {
            name: t("projects.card5_name"),
            desc: t("projects.card5_desc"),
            tech: t("projects.card5_tech"),
            link: "#",
            image: cookyummy, // misalnya pakai gambar resep
        },
    ];


    // Logic Scroll Slider
    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const cardWidth = container.querySelector('.flex-shrink-0')?.clientWidth || 600;
        const gap = 32; // Tailwind gap-8
        const scrollAmount = direction === 'left' ? -(cardWidth + gap) : (cardWidth + gap);
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    };

    // Update currentIndex saat scroll manual (opsional, untuk indikator)
    useEffect(() => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const cardElement = container.querySelector('.flex-shrink-0') as HTMLElement | null;
            if (!cardElement) return;

            const cardWidth = cardElement.offsetWidth;
            const gap = 32; // Tailwind gap-8
            const totalItemWidth = cardWidth + gap;

            // Hitung index saat ini
            const newIndex = Math.round(container.scrollLeft / totalItemWidth);
            setCurrentIndex(newIndex);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, [projects.length]);

    return (
        <section
            ref={ref}
            id="projects"
            className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 
                       text-slate-100 px-0 py-24 overflow-hidden"
        >
            {/* Animated Background Effects */}
            <motion.div
                style={{ y: yGlow, rotate }}
                className="absolute inset-0 -z-10"
            >
                <div className="absolute top-20 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-40 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            </motion.div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 -z-10 opacity-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(56,189,248,0.1) 1px, transparent 1px),
                                     linear-gradient(90deg, rgba(56,189,248,0.1) 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}>
            </div>

            {/* Title Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-16 max-w-3xl mx-auto px-6 md:px-20"
            >
                <motion.h2
                    className="text-5xl md:text-6xl font-black mb-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    {getStyledTitle("projects.title")}
                </motion.h2>

                <div className="relative h-1 w-32 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent rounded-full blur-sm"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-sky-400 to-transparent rounded-full"></div>
                </div>

                <p className="text-slate-400 text-base md:text-lg">
                    {t("projects.subtitle", { defaultValue: "Innovative solutions built with cutting-edge technology." })}
                </p>
            </motion.div>

            {/* Slider Navigation */}
            <div className="flex justify-center gap-4 mb-8">
                <motion.button
                    whileHover={{ scale: 1.1, x: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll('left')}
                    disabled={currentIndex === 0}
                    className="p-3 rounded-full bg-slate-800/50 backdrop-blur-md 
                               border border-sky-400/30 text-sky-400
                               hover:bg-slate-700/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]
                               disabled:opacity-30 disabled:cursor-not-allowed
                               transition-all duration-300"
                >
                    <ChevronLeft size={24} />
                </motion.button>

                <motion.button
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scroll('right')}
                    disabled={currentIndex === projects.length - 1}
                    className="p-3 rounded-full bg-slate-800/50 backdrop-blur-md 
                               border border-sky-400/30 text-sky-400
                               hover:bg-slate-700/50 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]
                               disabled:opacity-30 disabled:cursor-not-allowed
                               transition-all duration-300"
                >
                    <ChevronRight size={24} />
                </motion.button>
            </div>

            {/* Project Slider Container */}
            <div className="relative max-w-full mx-auto">
                <div
                    ref={scrollContainerRef}
                    className="flex gap-8 overflow-x-auto scrollbar-hide snap-x snap-mandatory 
                               pb-8 px-6 md:px-20"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {projects.map((p, i) => (
                        <motion.div
                            key={i}
                            // *** OPTIMASI: Tambahkan kembali animasi masuk di wrapper ini ***
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            viewport={{ once: true, amount: 0.5 }}
                            className="snap-start md:snap-center"
                        >
                            <ProjectCard {...p} index={i} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center gap-2 mt-8">
                {projects.map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0.8, opacity: 0.5 }}
                        animate={{
                            scale: currentIndex === i ? 1.2 : 0.8,
                            opacity: currentIndex === i ? 1 : 0.5
                        }}
                        transition={{ duration: 0.1 }}
                        className={`h-2 rounded-full 
                                   ${currentIndex === i
                                ? 'w-8 bg-gradient-to-r from-sky-400 to-blue-500 shadow-[0_0_10px_rgba(56,189,248,0.5)]'
                                : 'w-2 bg-slate-600'}`}
                    ></motion.div>
                ))}
            </div>
        </section>
    );
}