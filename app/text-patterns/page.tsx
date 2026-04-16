import { TextPatternsShowcase } from "../../src/components/text-patterns-showcase";
import Link from "next/link";

export default function TextPatternsPage() {
  return (
    <main className="min-h-screen text-(--color-text)">
      <section className="mx-auto w-full max-w-4xl px-6 py-20 md:px-10">
        <div className="mb-12 space-y-4">
          <Link
            href="/"
            className="text-xs uppercase tracking-[0.3em] text-(--color-cyan) hover:text-(--color-heading) transition-colors"
          >
            ← Back to Terminal
          </Link>
          <h1 className="text-5xl font-black uppercase tracking-[0.1em] text-(--color-heading) md:text-6xl">
            Text Patterns
          </h1>
          <p className="max-w-2xl text-base leading-7 text-(--color-text)/80">
            Dedicated typography lab for testing headings, paragraphs, and
            readability in a focused, full-page environment.
          </p>
        </div>

        <TextPatternsShowcase />
      </section>
    </main>
  );
}
