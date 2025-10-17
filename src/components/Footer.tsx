import { motion } from "framer-motion";

export default function Footer() {
    // const socials = [
    //     { icon: <Github size={18} />, link: "https://github.com/Frhnalmsyh" },
    //     { icon: <Linkedin size={18} />, link: "https://www.linkedin.com/in/frhnalmsyh/" },
    //     { icon: <Instagram size={18} />, link: "https://www.instagram.com/frhnalmsyh/" },
    // ];

    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-10 border-t border-sky-500/10 text-center">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-sky-500/10 blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-blue-600/10 blur-[100px]"></div>
            </div>

            {/* Animated Gradient Line */}
            <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "66%" }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="h-[1px] mx-auto mb-8 bg-gradient-to-r from-transparent via-sky-400 to-transparent opacity-70"
            ></motion.div>

            {/* Footer Text */}
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-slate-400 text-sm md:text-base mb-5"
            >
                © {new Date().getFullYear()}{" "}
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
                    Farhan Alamsyah
                </span>
                {/* {" "}
                — Built with Passion & Precision ⚡ */}
            </motion.p>



            {/* Subtle Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-sky-500/20 via-blue-600/30 to-sky-500/20 blur-[2px]"></div>
        </footer>
    );
}
