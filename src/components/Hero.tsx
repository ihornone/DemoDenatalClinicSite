"use client";

import { ArrowRight, Stethoscope, Star, Clock, Users, Heart } from "lucide-react";
import { motion } from "framer-motion";

const badges = [
  { icon: Star, text: "4.9/5", label: "рейтинг", pos: "top-[18%] right-[8%]" },
  { icon: Clock, text: "15+ років", label: "досвіду", pos: "top-[42%] right-[22%]" },
  { icon: Users, text: "7000+", label: "пацієнтів", pos: "bottom-[30%] right-[6%]" },
  { icon: Heart, text: "30+", label: "лікарів", pos: "bottom-[12%] right-[25%]" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Dental clinic interior"
          className="w-full h-full object-cover"
          style={{ filter: "blur(0.3px) brightness(0.97)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-white/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 py-20 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="max-w-[600px] flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 bg-teal/10 text-teal font-medium text-sm rounded-full px-4 py-2 mb-8"
            >
              <Stethoscope size={16} />
              Преміальна стоматологія
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.02em] text-primary-text mb-6"
            >
              Ваша ідеальна посмішка починається тут
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-muted-text leading-relaxed mb-10 max-w-[480px]"
            >
              Сучасна клініка з досвідченими лікарями, європейським обладнанням та індивідуальним підходом до кожного пацієнта.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold text-base rounded-full px-8 py-4 transition-all hover:shadow-lg hover:shadow-teal/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Записатися на консультацію
                <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-[1.5px] border-primary-text text-primary-text font-medium text-base rounded-full px-8 py-4 hover:bg-primary-text hover:text-white transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                Наші послуги
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block absolute inset-0 pointer-events-none"
          >
            {badges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className={`absolute ${badge.pos} pointer-events-auto group`}
              >
                <div className="flex items-center gap-4 bg-white/60 backdrop-blur-2xl rounded-[20px] px-6 py-5 shadow-[0_8px_32px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_40px_rgba(0,180,216,0.15)] transition-all duration-300 hover:-translate-y-1 border border-white/50">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal to-teal-dark flex items-center justify-center shrink-0 shadow-lg shadow-teal/25">
                    <badge.icon size={22} className="text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-primary-text text-lg leading-tight tracking-[-0.01em]">
                      {badge.text}
                    </p>
                    <p className="text-[11px] text-muted-text mt-0.5 tracking-wide uppercase font-medium">{badge.label}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
