"use client";

import { Award, GraduationCap, Star, TrendingUp } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const doctors = [
  {
    name: "Олена Петренко",
    role: "Головний лікар-стоматолог",
    experience: "15 років досвіду",
    certificates: "Certified Invisalign Provider",
    rating: 4.9,
    procedures: 2500,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    name: "Андрій Коваленко",
    role: "Хірург-імплантолог",
    experience: "12 років досвіду",
    certificates: "ITI Member, Straumann",
    rating: 4.8,
    procedures: 1800,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Марія Шевченко",
    role: "Ортодонт",
    experience: "10 років досвіду",
    certificates: "Асоціація ортодонтів України",
    rating: 4.9,
    procedures: 1500,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=600&q=80",
  },
  {
    name: "Іван Бондаренко",
    role: "Терапевт-ендодонт",
    experience: "8 років досвіду",
    certificates: "Mikroskop-асистована терапія",
    rating: 4.7,
    procedures: 1200,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 px-6 bg-white">
      <div className="mx-auto max-w-[1200px]">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Наші лікарі
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Кваліфіковані фахівці з багаторічним досвідом та міжнародними сертифікатами
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, i) => (
            <AnimatedSection key={doctor.name} delay={i * 0.08}>
              <div className="bg-ice-surface rounded-[24px] overflow-hidden group hover:shadow-xl hover:shadow-black/8 transition-all duration-300 hover:-translate-y-1.5 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-lg">
                    <Star size={14} className="fill-amber-400 text-amber-400" />
                    <span className="text-sm font-semibold text-primary-text">{doctor.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-primary-text mb-1 group-hover:text-teal transition-colors duration-300">
                    {doctor.name}
                  </h3>
                  <p className="text-teal font-medium text-sm mb-3">
                    {doctor.role}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-muted-text mb-2">
                    <GraduationCap size={14} />
                    {doctor.experience}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-text mb-3">
                    <Award size={14} />
                    {doctor.certificates}
                  </div>
                  <div className="flex items-center gap-2 text-sm font-medium text-teal bg-teal/10 rounded-full px-3 py-1.5">
                    <TrendingUp size={14} />
                    {doctor.procedures.toLocaleString("uk-UA")} процедур
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
