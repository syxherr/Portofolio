import { useMemo } from "react";
import ContributionCard, { type Day } from "./ContributionCard";
import raw from "../../data/gitlab-calendar.json";

function toLevel(count: number): Day["level"] {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

function buildYear(): Day[] {
  const counts = raw as Record<string, number>;
  const result: Day[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const date = d.toLocaleDateString("sv-SE");
    const count = counts[date] ?? 0;
    result.push({ date, count, level: toLevel(count) });
  }
  return result;
}

export default function GitLabCalendar() {
  const days = useMemo(() => buildYear(), []);
  const total = useMemo(() => days.reduce((sum, d) => sum + d.count, 0), [days]);

  return (
    <ContributionCard
      label="GitLab activity"
      linkLabel="GitLab"
      href="https://gitlab.com/syxherr" // ganti dengan profil GitLab-mu
      days={days}
      total={total}
    />
  );
}