"use client";

import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
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

        <div className="grid md:grid-cols-2 gap-6">
          <AnimatedSection>
            <div className="bg-white rounded-[24px] p-8 md:p-10">
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

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal/10 flex items-center justify-center shrink-0">
                    <MapPin size={20} className="text-teal" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-text">Адреса</p>
                    <p className="font-medium text-primary-text">вул. Хрещатик 22, Київ</p>
                  </div>
                </div>
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

          <AnimatedSection delay={0.15}>
            <div className="bg-white rounded-[24px] overflow-hidden min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.5!2d30.52!3d50.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTDCsDI3JzAwLjAiTiAzMMKwMzEnMTIuMCJF!5e0!3m2!1suk!2sua!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
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
