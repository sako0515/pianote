import type { ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string; id?: string };

export default function Card({ children, className = "", id }: CardProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-6 rounded-3xl border border-black/5 bg-paper px-6 py-7 shadow-sm md:px-8 md:py-8 ${className}`}
    >
      {children}
    </section>
  );
}

type CardHeadingProps = { eyebrow: string; title: string };

export function CardHeading({ eyebrow, title }: CardHeadingProps) {
  return (
    <div>
      <p className="text-[10px] font-semibold tracking-[0.2em] text-moss">
        {eyebrow}
      </p>
      <h2 className="mt-2 text-2xl font-bold text-ink">{title}</h2>
    </div>
  );
}
