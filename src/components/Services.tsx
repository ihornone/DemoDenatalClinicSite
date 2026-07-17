import {
  Sparkles,
  Heart,
  Shield,
  Zap,
  ScanFace,
  Smile,
} from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Відбілювання",
    description: "Професійне відбілювання зубів на 8-12 тонів за одне відвідування. Безпечні європейські системи.",
    image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&q=80",
  },
  {
    icon: Heart,
    title: "Імплантація",
    description: "Встановлення зубних імплантів преміум-класу з гарантією довічного результату.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  },
  {
    icon: Shield,
    title: "Протезування",
    description: "Керамічні коронки, мости та знімні протези з натуральною естетикою.",
    image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?w=600&q=80",
  },
  {
    icon: Zap,
    title: "Лікування каналів",
    description: "Мікрохірургічне лікування під мікроскопом з 100% точністю.",
    image: "https://images.unsplash.com/photo-1629909615184-74f495363b67?w=600&q=80",
  },
  {
    icon: ScanFace,
    title: "Вініри",
    description: "Тонкі керамічні накладки для ідеальної форми та кольору зубів.",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=600&q=80",
  },
  {
    icon: Smile,
    title: "Дитяча стоматологія",
    description: "Дбайливе лікування маленьких пацієнтів в комфортній атмосфері.",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&q=80",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Наші послуги
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Повний спектр стоматологічних послуг від профілактики до складних хірургічних втручань
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-ice-surface rounded-[24px] overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4 w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <service.icon size={20} className="text-teal" />
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-xl font-semibold text-primary-text mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-text leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-teal font-medium text-sm hover:gap-3 transition-all"
                >
                  Дізнатися більше
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
