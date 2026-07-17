import { Award, GraduationCap } from "lucide-react";

const doctors = [
  {
    name: "Олена Петренко",
    role: "Головний лікар-стоматолог",
    experience: "15 років досвіду",
    certificates: "Certified Invisalign Provider",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80",
  },
  {
    name: "Андрій Коваленко",
    role: "Хірург-імплантолог",
    experience: "12 років досвіду",
    certificates: "ITI Member, Straumann",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
  },
  {
    name: "Марія Шевченко",
    role: "Ортодонт",
    experience: "10 років досвіду",
    certificates: "Асоціація ортодонтів України",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964ac31?w=600&q=80",
  },
  {
    name: "Іван Бондаренко",
    role: "Терапевт-ендодонт",
    experience: "8 років досвіду",
    certificates: "Mikroskop-асистована терапія",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 px-6 bg-ice-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Наші лікарі
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Кваліфіковані фахівці з багаторічним досвідом та міжнародними сертифікатами
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-[24px] overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary-text mb-1">
                  {doctor.name}
                </h3>
                <p className="text-teal font-medium text-sm mb-3">
                  {doctor.role}
                </p>
                <div className="flex items-center gap-2 text-sm text-muted-text mb-2">
                  <GraduationCap size={14} />
                  {doctor.experience}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-text">
                  <Award size={14} />
                  {doctor.certificates}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
