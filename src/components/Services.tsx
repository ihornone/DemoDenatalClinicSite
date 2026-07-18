"use client";

import {
  Sparkles,
  Heart,
  Shield,
  Zap,
  ScanFace,
  Smile,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const services = [
  {
    icon: Sparkles,
    title: "Відбілювання",
    description: "Професійне відбілювання зубів на 8-12 тонів за одне відвідування. Безпечні європейські системи.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
    price: "від 4 500 ₴",
  },
  {
    icon: Heart,
    title: "Імплантація",
    description: "Встановлення зубних імплантів преміум-класу з гарантією довічного результату.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    price: "від 18 000 ₴",
  },
  {
    icon: Shield,
    title: "Протезування",
    description: "Керамічні коронки, мости та знімні протези з натуральною естетикою.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
    price: "від 8 000 ₴",
  },
  {
    icon: Zap,
    title: "Лікування каналів",
    description: "Мікрохірургічне лікування під мікроскопом з 100% точністю.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
    price: "від 3 500 ₴",
  },
  {
    icon: ScanFace,
    title: "Вініри",
    description: "Тонкі керамічні накладки для ідеальної форми та кольору зубів.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
    price: "від 12 000 ₴",
  },
  {
    icon: Smile,
    title: "Дитяча стоматологія",
    description: "Дбайливе лікування маленьких пацієнтів в комфортній атмосфері.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
    price: "від 1 500 ₴",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-fog-surface">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Повний спектр стоматологічних послуг від профілактики до складних хірургічних втручань
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <AnimatedSection key={service.title} delay={i * 0.08}>
              <div className="group relative bg-white rounded-[28px] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-black/12 transition-all duration-500 hover:-translate-y-2 h-full">
                {/* Image container */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  {/* Icon badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-teal group-hover:shadow-teal/30">
                    <service.icon size={22} className="text-teal group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Price badge */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="text-sm font-semibold text-primary-text">{service.price}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h3 className="text-xl font-semibold text-primary-text mb-2 group-hover:text-teal transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-text leading-relaxed mb-5 text-sm">
                    {service.description}
                  </p>
                  
                  {/* CTA link */}
                  <div className="flex items-center justify-between">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-teal font-medium text-sm group-hover:gap-3 transition-all duration-300"
                    >
                      Детальніше
                      <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                    
                    {/* Hover arrow indicator */}
                    <div className="w-10 h-10 rounded-full bg-teal/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:bg-teal">
                      <ArrowRight size={16} className="text-teal group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>

                {/* Bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-teal to-teal-dark transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
