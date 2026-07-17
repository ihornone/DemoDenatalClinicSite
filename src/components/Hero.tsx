import { ArrowRight, Stethoscope } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-[72px]">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Dental clinic interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1200px] w-full px-6 py-20 lg:py-0">
        <div className="max-w-[600px]">
          <div className="inline-flex items-center gap-2 bg-teal/10 text-teal font-medium text-sm rounded-full px-4 py-2 mb-8">
            <Stethoscope size={16} />
            Преміальна стоматологія
          </div>

          <h1 className="text-[40px] sm:text-[48px] lg:text-[56px] font-semibold leading-[1.1] tracking-[-0.02em] text-primary-text mb-6">
            Ваша ідеальна посмішка починається тут
          </h1>

          <p className="text-lg text-muted-text leading-relaxed mb-10 max-w-[480px]">
            Сучасна клініка з досвідченими лікарями, європейським обладнанням та індивідуальним підходом до кожного пацієнта.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold text-base rounded-full px-8 py-4 transition-colors"
            >
              Записатися на консультацію
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border-[1.5px] border-primary-text text-primary-text font-medium text-base rounded-full px-8 py-4 hover:bg-primary-text hover:text-white transition-all"
            >
              Наші послуги
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
