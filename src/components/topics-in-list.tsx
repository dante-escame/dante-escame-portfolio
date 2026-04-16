import { StylePanel } from "./style-kit";

type TopicsInListProps = {
  title: string;
  topics: string[];
  className?: string;
};

export function TopicsInList({
  title,
  topics,
  className
}: TopicsInListProps) {
  return (
    <StylePanel className={className} tone="cyan">
      <h2 className="text-xl font-semibold uppercase tracking-[0.18em] text-(--color-heading)">
        {title}
      </h2>
      <div className="space-y-3">
        {topics.map((topic) => (
          <div
            key={topic}
            className="flex items-center gap-3 border-l-2 border-(--color-accent) pl-4 text-sm text-(--color-text)"
          >
            <span className="h-2 w-2 rounded-full bg-(--color-cyan) shadow-[0_0_16px_rgba(13,205,205,0.45)]" />
            {topic}
          </div>
        ))}
      </div>
    </StylePanel>
  );
}
