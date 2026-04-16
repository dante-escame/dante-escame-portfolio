import { StylePanel } from "./style-kit";

type TopicsInSquaresProps = {
  title: string;
  note?: string;
  topics: string[];
  className?: string;
};

export function TopicsInSquares({
  title,
  note,
  topics,
  className
}: TopicsInSquaresProps) {
  return (
    <StylePanel className={className} tone="cyan">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold uppercase tracking-[0.18em] text-(--color-heading)">
          {title}
        </h2>
        {note ? (
          <span className="text-xs uppercase tracking-[0.3em] text-(--color-cyan)">
            {note}
          </span>
        ) : null}
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {topics.map((topic) => (
          <div
            key={topic}
            className="rounded-sm border border-(--color-accent)/35 bg-[rgba(128,0,128,0.08)] px-4 py-3 text-sm text-(--color-text) shadow-[0_0_18px_rgba(128,0,128,0.14)]"
          >
            {topic}
          </div>
        ))}
      </div>
    </StylePanel>
  );
}
