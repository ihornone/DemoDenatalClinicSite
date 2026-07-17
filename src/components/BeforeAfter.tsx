"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const cases = [
  {
    before: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    after: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=800&q=80",
    title: "Відбілювання + Вініри",
    description: "Пацієнтка бажала освітлити та вирівняти зуби. Після комплексного лікування отримала голлівудську посмішку.",
    doctor: "Д-р Олена Петренко",
  },
  {
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=800&q=80",
    title: "Імплантація зубів",
    description: "Відновлення відсутнього зуба за допомогою імпланту Straumann. Повне відновлення жувальної функції.",
    doctor: "Д-р Андрій Коваленко",
  },
  {
    before: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    after: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
    title: "Ортодонтія",
    description: "Вирівнювання зубів за допомогою елайнерів Invisalign за 12 місяців. Без металевих брекетів.",
    doctor: "Д-р Марія Шевченко",
  },
];

export default function BeforeAfter() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % cases.length);
  const prev = () => setActive((prev) => (prev - 1 + cases.length) % cases.length);

  const current = cases[active];

  return (
    <section id="results" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            До та після
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Реальні результати наших пацієнтів
          </p>
        </div>

        <div className="bg-ice-surface rounded-[24px] overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="relative h-80 md:h-[480px]">
              <img
                src={current.before}
                alt="До лікування"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm text-primary-text font-semibold text-sm rounded-full px-4 py-2">
                До
              </div>
            </div>
            <div className="relative h-80 md:h-[480px]">
              <img
                src={current.after}
                alt="Після лікування"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-6 left-6 bg-teal text-white font-semibold text-sm rounded-full px-4 py-2">
                Після
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <h3 className="text-2xl font-semibold text-primary-text mb-3">
              {current.title}
            </h3>
            <p className="text-muted-text leading-relaxed mb-4 max-w-[560px]">
              {current.description}
            </p>
            <p className="text-sm text-teal font-medium">
              {current.doctor}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-12 h-12 rounded-full border-[1.5px] border-primary-text flex items-center justify-center hover:bg-primary-text hover:text-white transition-all"
            aria-label="Previous case"
          >
            <ChevronLeft size={20} />
          </button>
          <div className="flex gap-2">
            {cases.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === active ? "bg-teal scale-125" : "bg-slate-border"
                }`}
                aria-label={`Go to case ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-12 h-12 rounded-full border-[1.5px] border-primary-text flex items-center justify-center hover:bg-primary-text hover:text-white transition-all"
            aria-label="Next case"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
}
