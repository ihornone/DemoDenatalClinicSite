import { Star } from "lucide-react";

const reviews = [
  {
    name: "Катерина М.",
    rating: 5,
    text: "Найкраща клініка, в якій я була! Лікарі дуже уважні, атмосфера спокійна та комфортна. Результат перевершив очікування — вініри виглядають абсолютно природно.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
  },
  {
    name: "Олексій Т.",
    rating: 5,
    text: "Довго шукав клініку для імплантації. Тут мені все пояснили, показали план лікування. Тепер маю новий зуб, який нічим не відрізняється від натуральних.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
  },
  {
    name: "Наталія В.",
    rating: 5,
    text: "Привела доньку на перший візит до стоматолога. Лікар знайшов підхід до дитини, все зробив швидко та безболісно. Тепер донька сама хоче йти на наступний візит!",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
  },
  {
    name: "Дмитро К.",
    rating: 5,
    text: "Відбілювання — це щось! Результат на 10 тонів краще. Лікар все розповів про догляд після процедури. Рекомендую всім, хто хоче голлівудську посмішку.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 bg-ice-surface">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-[32px] sm:text-[40px] font-semibold tracking-[-0.01em] text-primary-text mb-4">
            Відгуки пацієнтів
          </h2>
          <p className="text-lg text-muted-text max-w-[520px] mx-auto">
            Що кажуть наші пацієнти про свой досвід
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-[24px] p-8 md:p-10"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-primary-text">
                    {review.name}
                  </h4>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} size={14} className="fill-teal text-teal" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-muted-text leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
