import type { ReactNode } from "react";

type CardProps = { children: ReactNode; className?: string };

export default function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`mx-auto mt-6 w-full max-w-2xl rounded-2xl bg-white px-6 py-4 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}
