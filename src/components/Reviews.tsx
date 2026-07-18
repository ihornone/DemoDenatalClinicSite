"use client";

import { Star, BadgeCheck } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const reviews = [
  {
    name: "Катерина М.",
    rating: 5,
    text: "Найкраща клініка, в якій я була! Лікарі дуже уважні, атмосфера спокійна та комфортна. Результат перевершив очікування — вініри виглядають абсолютно природно.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    smileImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    treatment: "Вініри",
    date: "Березень 2024",
    doctor: "Д-р Олена Петренко",
  },
  {
    name: "Олексій Т.",
    rating: 5,
    text: "Довго шукав клініку для імплантації. Тут мені все пояснили, показали план лікування. Тепер маю новий зуб, який нічим не відрізняється від натуральних.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    smileImage: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=400&q=80",
    treatment: "Імплантація",
    date: "Лютий 2024",
    doctor: "Д-р Андрій Коваленко",
  },
  {
    name: "Наталія В.",
    rating: 5,
    text: "Привела доньку на перший візит до стоматолога. Лікар знайшов підхід до дитини, все зробив швидко та безболісно. Тепер донька сама хоче йти на наступний візит!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    smileImage: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=400&q=80",
    treatment: "Дитяча стоматологія",
    date: "Січень 2024",
    doctor: "Д-р Марія Шевченко",
  },
  {
    name: "Дмитро К.",
    rating: 5,
    text: "Відбілювання — це щось! Результат на 10 тонів краще. Лікар все розповів про догляд після процедури. Рекомендую всім, хто хоче голлівудську посмішку.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    smileImage: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=400&q=80",
    treatment: "Відбілювання",
    date: "Грудень 2023",
    doctor: "Д-р Олена Петренко",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-fog-surface">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Відгуки пацієнтів
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Що кажуть наші пацієнти про свій досвід
          </p>
        </AnimatedSection>

        {/* Featured review (first) */}
        <AnimatedSection delay={0.1}>
          <div className="bg-white rounded-[32px] p-8 md:p-10 lg:p-12 shadow-sm hover:shadow-xl transition-all duration-500 mb-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Patient info */}
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={reviews[0].image}
                    alt={reviews[0].name}
                    className="w-20 h-20 rounded-2xl object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-semibold text-primary-text">
                        {reviews[0].name}
                      </h4>
                      <BadgeCheck size={20} className="text-teal" />
                    </div>
                    <div className="flex gap-0.5 mt-1">
                      {Array.from({ length: reviews[0].rating }).map((_, j) => (
                        <Star key={j} size={16} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Smile result */}
                <div className="relative rounded-2xl overflow-hidden mb-4">
                  <img
                    src={reviews[0].smileImage}
                    alt="Результат лікування"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute bottom-3 left-3 bg-teal text-white text-xs font-semibold rounded-full px-3 py-1.5">
                    Результат
                  </div>
                </div>

                {/* Treatment info */}
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal/10 text-teal text-xs font-medium rounded-full px-3 py-1.5">
                    {reviews[0].treatment}
                  </span>
                  <span className="bg-ice-surface text-muted-text text-xs font-medium rounded-full px-3 py-1.5">
                    {reviews[0].date}
                  </span>
                </div>
              </div>

              {/* Review content */}
              <div className="lg:w-2/3">
                <p className="text-lg text-primary-text leading-relaxed mb-6">
                  &ldquo;{reviews[0].text}&rdquo;
                </p>
                
                <div className="flex items-center gap-6 pt-6 border-t border-slate-border">
                  <div className="flex items-center gap-2 text-sm text-muted-text">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                    {reviews[0].doctor}
                  </div>
                  <div className="flex items-center gap-2 text-teal font-medium text-sm">
                    <BadgeCheck size={16} />
                    Верифікований відгук
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Other reviews */}
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(1).map((review, i) => (
            <AnimatedSection key={review.name} delay={0.2 + i * 0.1}>
              <div className="bg-white rounded-[24px] p-6 hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
                {/* Patient info */}
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-xl object-cover"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-semibold text-primary-text text-sm">
                        {review.name}
                      </h4>
                      <BadgeCheck size={14} className="text-teal" />
                    </div>
                    <div className="flex gap-0.5 mt-0.5">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} size={12} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Smile result small */}
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <img
                    src={review.smileImage}
                    alt="Результат"
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-teal text-white text-[10px] font-semibold rounded-full px-2 py-1">
                    Результат
                  </div>
                </div>

                {/* Review text */}
                <p className="text-sm text-muted-text leading-relaxed flex-1 mb-4">
                  &ldquo;{review.text}&rdquo;
                </p>

                {/* Treatment info */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-border">
                  <span className="bg-teal/10 text-teal text-xs font-medium rounded-full px-3 py-1">
                    {review.treatment}
                  </span>
                  <span className="text-xs text-muted-text">{review.date}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
