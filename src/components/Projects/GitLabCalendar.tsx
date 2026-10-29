import { useMemo } from "react";
import { ActivityCalendar, type Activity } from "react-activity-calendar";
import raw from "../../data/gitlab-calendar.json";

// Mengubah jumlah kontribusi jadi level warna 0-4
function toLevel(count: number): 0 | 1 | 2 | 3 | 4 {
  if (count === 0) return 0;
  if (count <= 2) return 1;
  if (count <= 5) return 2;
  if (count <= 9) return 3;
  return 4;
}

// Mengisi 365 hari terakhir. Hari tanpa kontribusi diberi angka 0.
function buildYear(): Activity[] {
  const counts = raw as Record<string, number>;
  const result: Activity[] = [];
  const today = new Date();
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const date = d.toLocaleDateString("sv-SE"); // format YYYY-MM-DD
    const count = counts[date] ?? 0;
    result.push({ date, count, level: toLevel(count) });
  }
  return result;
}

export default function GitLabCalendar() {
  const data = useMemo(() => buildYear(), []);

  return (
    <ActivityCalendar
      data={data}
      labels={{ totalCount: "{{count}} contributions in the last year" }}
      colorScheme="dark"
      theme={{
        dark: ["#1d1d1f", "#c9b8f5", "#a78bfa", "#8b5cf6", "#6d28d9"],
      }}
      blockSize={12}
      blockMargin={4}
      fontSize={13}
    />
  );
}