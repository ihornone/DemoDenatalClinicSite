"use client";

import { ArrowRight, Stethoscope, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      {/* Background with zoom effect */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 via-transparent to-transparent" />
      </motion.div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[700px] w-full px-6 py-24 lg:py-0 text-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="inline-flex items-center gap-2 bg-teal/10 text-teal font-medium text-sm rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm border border-teal/20"
        >
          <Stethoscope size={16} />
          Преміальна стоматологія
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[40px] sm:text-[48px] lg:text-[58px] font-semibold leading-[1.08] tracking-[-0.03em] text-primary-text mb-6"
        >
          Ваша ідеальна
          <span className="text-teal"> посмішка</span>
          <br />починається тут
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-lg text-muted-text leading-relaxed mb-10 max-w-[520px] mx-auto"
        >
          Сучасна клініка з досвідченими лікарями, європейським обладнанням та індивідуальним підходом до кожного пацієнта.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-teal hover:bg-teal-dark text-white font-semibold text-base rounded-full px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-1 active:translate-y-0"
          >
            Записатися на консультацію
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#results"
            className="group inline-flex items-center gap-2 text-muted-text font-medium text-base rounded-full px-6 py-4 hover:text-teal transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center group-hover:bg-teal/20 transition-colors duration-300">
              <Play size={18} className="text-teal ml-0.5" />
            </div>
            Подивитися роботи
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-primary-text/30 flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-teal"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
