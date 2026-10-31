import { useEffect, useState } from "react";
import type { Day } from "../components/Projects/ContributionCard";

export default function useGitHubContributions(username: string) {
  const [data, setData] = useState<{ days: Day[]; total: number } | null>(null);

  useEffect(() => {
    let cancelled = false;
    // API publik yang sama dipakai react-github-calendar, jadi tidak perlu token
    fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=last`)
      .then((res) => {
        if (!res.ok) throw new Error(String(res.status));
        return res.json();
      })
      .then((json) => {
        if (cancelled) return;
        const days = json.contributions as Day[];
        setData({ days, total: days.reduce((sum, d) => sum + d.count, 0) });
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [username]);

  return data;
}