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

        {/* Reviews grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={review.name} delay={0.1 + i * 0.08}>
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
                  <span className="text-xs text-muted-text">{review.doctor}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
