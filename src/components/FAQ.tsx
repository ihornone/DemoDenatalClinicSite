"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const faqItems = [
  {
    question: "Як часто потрібно відвідувати стоматолога?",
    answer: "Рекомендуємо відвідувати стоматолога кожні 6 місяців для профілактичного огляду та професійної чистки. Це допомагає виявити проблеми на ранніх стадіях та підтримувати здоров'я зубів.",
  },
  {
    question: "Чи болить імплантація зубів?",
    answer: "Імплантація проходить під місцевою анестезією та є абсолютно безболісною. Після процедури можливий невеликий дискомфорт, який легко знеболюється звичайними препаратами.",
  },
  {
    question: "Скільки часу займає відбілювання?",
    answer: "Процедура відбілювання займає приблизно 1-1.5 години. Результат помітний одразу після процедури — зуби стають на 8-12 тонів світлішими.",
  },
  {
    question: "Яка гарантія на імпланти?",
    answer: "Ми використовуємо імпланти Straumann з довічною гарантією виробника. Наша клініка також надає гарантію на роботи з встановлення та протезування.",
  },
  {
    question: "Чи можна записатися на вихідних?",
    answer: "Так, наша клініка працює щодня з 9:00 до 20:00, включаючи вихідні дні. Записатися можна онлайн або за телефоном.",
  },
  {
    question: "Скільки коштує первинна консультація?",
    answer: "Первинна консультація з оглядом та складанням плану лікування безкоштовна. Ми також надаємо рентген-знімки безкоштовно при першому візиті.",
  },
  {
    question: "Які способи оплати ви приймаєте?",
    answer: "Ми приймаємо готівку, банківські картки, а також пропонуємо розстрочку від наших банків-партнерів. Можлива оплата частинами без переплат.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-[800px]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Часті питання
          </h2>
          <p className="text-lg text-muted-text">
            Відповіді на найпопулярніші запитання наших пацієнтів
          </p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqItems.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <div className="bg-ice-surface rounded-[16px] overflow-hidden hover:shadow-md transition-shadow duration-300">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-primary-text pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`text-muted-text shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-48 pb-6" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-muted-text leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
