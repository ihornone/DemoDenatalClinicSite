"use client";

import { Calendar, ClipboardList, Stethoscope, CheckCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    icon: Calendar,
    number: "01",
    title: "Консультація",
    description: "Безкоштовний огляд та консультація з лікарем. Вивчаємо вашу ситуацію та бажання.",
    duration: "30 хвилин",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "План лікування",
    description: "Розробляємо індивідуальний план з детальним описом кожного етапу та вартості.",
    duration: "1-2 дні",
  },
  {
    icon: Stethoscope,
    number: "03",
    title: "Лікування",
    description: "Виконуємо лікування на сучасному обладнанні з максимальним комфортом.",
    duration: "Залежно від випадку",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "Контроль",
    description: "Спостереження та гарантійне обслуговування після завершення лікування.",
    duration: "Постійно",
  },
];

export default function TreatmentProcess() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-ice-surface">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection className="text-center mb-20">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Як проходить лікування
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Прозорий та зрозумілий процес від першого візиту до результату
          </p>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Desktop timeline line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-border via-teal/30 to-slate-border" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="relative group">
                  {/* Desktop connector dot */}
                  <div className="hidden lg:flex absolute -top-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-slate-border group-hover:border-teal group-hover:scale-125 transition-all duration-500 z-10">
                    <div className="w-2 h-2 rounded-full bg-slate-border group-hover:bg-teal transition-colors duration-500 m-auto" />
                  </div>

                  {/* Card */}
                  <div className="relative bg-white rounded-[28px] p-8 lg:pt-12 text-center shadow-sm hover:shadow-2xl hover:shadow-teal/10 transition-all duration-500 group-hover:-translate-y-2 border border-slate-border/50 group-hover:border-teal/30">
                    {/* Step number badge */}
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-teal to-teal-dark text-white font-bold text-sm flex items-center justify-center shadow-lg shadow-teal/30 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-teal/40 transition-all duration-500">
                      {step.number}
                    </div>
                    
                    {/* Icon */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-3xl bg-teal/10 flex items-center justify-center group-hover:bg-teal group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <step.icon size={32} className="text-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-primary-text mb-3 group-hover:text-teal transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-text leading-relaxed text-sm mb-4">
                      {step.description}
                    </p>
                    
                    {/* Duration badge */}
                    <div className="inline-flex items-center gap-2 bg-ice-surface rounded-full px-4 py-2 text-xs font-medium text-muted-text group-hover:bg-teal/10 group-hover:text-teal transition-colors duration-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {step.duration}
                    </div>
                  </div>

                  {/* Mobile connector arrow */}
                  {i < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center py-4">
                      <div className="w-0.5 h-8 bg-gradient-to-b from-teal/50 to-slate-border" />
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <AnimatedSection delay={0.6}>
          <div className="mt-16 text-center">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold text-base rounded-full px-8 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-teal/30 hover:-translate-y-1"
            >
              Розпочати з консультації
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
