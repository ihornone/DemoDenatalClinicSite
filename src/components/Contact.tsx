"use client";

import { Phone, Mail, MapPin, ArrowRight, Clock, Car, Train, MessageCircle } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-teal text-white">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-white mb-4">
            Контакти
          </h2>
          <p className="text-lg text-white/70 max-w-[520px] mx-auto">
            Запишіться на безкоштовну консультацію або зв&apos;яжіться з нами
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-6">
          <AnimatedSection>
            <div className="bg-white rounded-[24px] p-8 md:p-10 h-full">
              <h3 className="text-xl font-semibold text-primary-text mb-6">
                Зв&apos;яжіться з нами
              </h3>

              <div className="space-y-5 mb-8">
                <a
                  href="tel:+380441234567"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                    <Phone size={20} className="text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Телефон</p>
                    <p className="font-medium text-primary-text">+380 44 123 45 67</p>
                  </div>
                </a>

                <a
                  href="mailto:info@smiledesign.ua"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                    <Mail size={20} className="text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Email</p>
                    <p className="font-medium text-primary-text">info@smiledesign.ua</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/smiledesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal group-hover:text-white transition-colors">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Instagram</p>
                    <p className="font-medium text-primary-text">@smiledesign</p>
                  </div>
                </a>

                <a
                  href="https://t.me/smiledesign"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0 group-hover:bg-teal transition-colors">
                    <MessageCircle size={20} className="text-teal group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Telegram</p>
                    <p className="font-medium text-primary-text">@smiledesign</p>
                  </div>
                </a>
              </div>

              <a
                href="tel:+380441234567"
                className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold text-base rounded-full px-8 py-4 transition-all hover:shadow-lg hover:shadow-teal/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                Записатися зараз
                <ArrowRight size={18} />
              </a>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white rounded-[24px] p-8 md:p-10 h-full">
              <h3 className="text-xl font-semibold text-primary-text mb-6">
                Як нас знайти
              </h3>

              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Адреса</p>
                    <p className="font-medium text-primary-text">вул. Хрещатик 22, Київ</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <Train size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Метро</p>
                    <p className="font-medium text-primary-text">Хрещатик (5 хв пішки)</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <Car size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Парковка</p>
                    <p className="font-medium text-primary-text">Підземний паркінг</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Час роботи</p>
                    <p className="font-medium text-primary-text">Пн-Пт: 9:00-20:00</p>
                    <p className="font-medium text-primary-text">Сб: 10:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-white rounded-[24px] overflow-hidden h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.52!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjAiTiAzMMKwMzEnMTIuMCJF!5e0!3m2!1suk!2sua!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SmileDesign location"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
