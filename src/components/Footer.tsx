import { Heart, Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Послуги", href: "#services" },
  { label: "Лікарі", href: "#doctors" },
  { label: "Результати", href: "#results" },
  { label: "Відгуки", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="bg-primary-text text-white">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-full bg-teal flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8 2 5 5 5 9c0 3 1 5 2 7l5 6 5-6c1-2 2-4 2-7 0-4-3-7-7-7z" />
                  <circle cx="12" cy="9" r="2" />
                </svg>
              </div>
              <span className="text-lg font-semibold tracking-tight">
                SmileDesign
              </span>
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">
              Преміальна стоматологічна клініка у серці Києва. Створюємо посмішки, якими пишаються.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Навігація
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/70 hover:text-teal transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Контакти
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+380441234567" className="flex items-center gap-3 text-sm text-white/70 hover:text-teal transition-colors">
                  <Phone size={16} className="text-teal shrink-0" />
                  +380 44 123 45 67
                </a>
              </li>
              <li>
                <a href="mailto:info@smiledesign.ua" className="flex items-center gap-3 text-sm text-white/70 hover:text-teal transition-colors">
                  <Mail size={16} className="text-teal shrink-0" />
                  info@smiledesign.ua
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/70">
                  <MapPin size={16} className="text-teal shrink-0 mt-0.5" />
                  <span>вул. Хрещатик 22, Київ</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social + CTA */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-white/40 mb-5">
              Соцмережі
            </h4>
            <div className="flex gap-3 mb-6">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Telegram */}
              <a href="#" aria-label="Telegram" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m22 2-7 20-4-9-9-4z" />
                  <path d="M22 2 11 13" />
                </svg>
              </a>
            </div>
            <a
              href="tel:+380441234567"
              className="inline-flex items-center gap-2 bg-teal hover:bg-teal-dark text-white font-semibold text-sm rounded-full px-6 py-3 transition-all hover:shadow-lg hover:shadow-teal/25"
            >
              Записатися зараз
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-white/40 flex items-center gap-1">
            &copy; {new Date().getFullYear()} SmileDesign. Зроблено з
            <Heart size={14} className="text-teal fill-teal" />
            для вашої посмішки
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="#" className="hover:text-teal transition-colors">Політика конфіденційності</a>
            <a href="#" className="hover:text-teal transition-colors">Умови</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
