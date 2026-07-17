import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-slate-border">
      <div className="mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-teal flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C8 2 5 5 5 9c0 3 1 5 2 7l5 6 5-6c1-2 2-4 2-7 0-4-3-7-7-7z" />
                <circle cx="12" cy="9" r="2" />
              </svg>
            </div>
            <span className="font-semibold text-primary-text">SmileDesign</span>
          </div>

          <p className="text-sm text-muted-text flex items-center gap-1">
            &copy; {new Date().getFullYear()} SmileDesign. Зроблено з
            <Heart size={14} className="text-teal fill-teal" />
            для вашої посмішки
          </p>

          <div className="flex gap-6 text-sm text-muted-text">
            <a href="#" className="hover:text-teal transition-colors">Політика конфіденційності</a>
            <a href="#" className="hover:text-teal transition-colors">Умови</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
