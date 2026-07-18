"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: number;
  suffix?: string;
  prefix?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString("uk-UA")}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 7000,
    suffix: "+",
    label: "пацієнтів",
  },
  {
    value: 15,
    suffix: "+",
    label: "років досвіду",
  },
  {
    value: 98,
    suffix: "%",
    label: "рекомендують",
  },
  {
    value: 30,
    suffix: "+",
    label: "лікарів",
  },
];

export default function TrustBlock() {
  return (
    <section className="py-16 px-6 bg-white relative z-10">
      <div className="mx-auto max-w-[1000px]">
        <div className="bg-ice-surface rounded-[24px] p-8 md:p-12">
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="#00b4d8"
                stroke="none"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-[32px] md:text-[40px] font-bold text-primary-text leading-tight">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-sm text-muted-text mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
