import type { ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string; id?: string };

export default function Card({ children, className = "", id }: CardProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-6 rounded-lg border border-line bg-surface p-6 ${className}`}
    >
      {children}
    </section>
  );
}

type CardHeadingProps = { title: string };

export function CardHeading({ title }: CardHeadingProps) {
  return <h2 className="text-lg font-medium text-fg">{title}</h2>;
}
