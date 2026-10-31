import { useInView, useReducedMotion } from "motion/react";
import { useMemo, useRef, useState, type CSSProperties } from "react";
import styles from "./ContributionCard.module.css";

export type Day = { date: string; count: number; level: 0 | 1 | 2 | 3 | 4 };

const OPACITY = [0, 0.3, 0.55, 0.8, 1]; // makin sibuk, makin pekat
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const CELL = 14;

const dayLabel = (iso: string) => {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
};

type Props = {
  label: string;     // teks kecil di atas angka
  linkLabel: string; // teks link kanan atas
  href: string;
  days: Day[];       // urut dari yang terlama ke terbaru
  total: number;
  weeks?: number;
};

export default function ContributionCard({ label, linkLabel, href, days: allDays, total, weeks = 22 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const reduce = useReducedMotion();
  const [hover, setHover] = useState<Day | null>(null);

  const days = useMemo(() => allDays.slice(-weeks * 7), [allDays, weeks]);
  const dayIndex = useMemo(() => new Map(days.map((d, i) => [d.date, i])), [days]);

  // Satu kolom = satu minggu (Minggu → Sabtu), kolom pertama diisi kosong di depan
  const columns = useMemo(() => {
    if (!days.length) return [];
    const firstDow = new Date(days[0].date + "T00:00:00Z").getUTCDay();
    const padded: (Day | null)[] = [...Array(firstDow).fill(null), ...days];
    const cols: (Day | null)[][] = [];
    for (let i = 0; i < padded.length; i += 7) cols.push(padded.slice(i, i + 7));
    return cols;
  }, [days]);

  const months = useMemo(() => {
    const labels: { col: number; label: string }[] = [];
    let last = "";
    columns.forEach((col, i) => {
      const d = col.find(Boolean);
      if (!d) return;
      const m = MONTHS[Number(d.date.slice(5, 7)) - 1];
      if (m !== last) {
        // Kalau label sebelumnya terlalu dekat (< 3 kolom), buang yang lama
        if (labels.length && i - labels[labels.length - 1].col < 3) labels.pop();
        labels.push({ col: i, label: m });
      }
      last = m;
    });
    return labels;
  }, [columns]);

  if (!days.length) return null;

  const width = columns.length * CELL;
  const height = 7 * CELL;
  const n = columns.length;

  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.top}>
        <div>
          <p className={styles.label}>{label}</p>
          <p className={styles.total}>
            {total}
            <span className={styles.totalText}>contributions in the last year</span>
          </p>
        </div>
        <a href={href} target="_blank" rel="noreferrer" className={styles.link}>
          {linkLabel} ↗
        </a>
      </div>

      <div>
        <svg
          viewBox={`0 -16 ${width} ${height + 16}`}
          className={styles.graph}
          role="img"
          aria-label={`Contributions over the last ${weeks} weeks`}
          data-in={inView || reduce ? "true" : "false"}
          onPointerOver={(e) => {
            const i = (e.target as Element).getAttribute("data-i");
            if (i !== null) setHover(days[Number(i)]);
          }}
          onPointerLeave={() => setHover(null)}
        >
          {months.map((m) => (
            <text key={m.col} x={m.col * CELL} y={-6} className={styles.month}>
              {m.label}
            </text>
          ))}
          {columns.map((col, ci) =>
            col.map((d, ri) =>
              d ? (
                <rect
                  key={d.date}
                  data-i={dayIndex.get(d.date)}
                  x={ci * CELL + 1.5}
                  y={ri * CELL + 1.5}
                  width={CELL - 3}
                  height={CELL - 3}
                  rx={2.5}
                  className={`${styles.cell} ${d.level ? styles.cellOn : styles.cellOff}`}
                  style={
                    {
                      "--o": d.level ? OPACITY[d.level] : 0.07,
                      // animasi masuk dari minggu terbaru ke belakang
                      transitionDelay: reduce ? "0s" : `${((n - ci) * 0.012 + ri * 0.01).toFixed(3)}s`,
                    } as CSSProperties
                  }
                />
              ) : null,
            ),
          )}
        </svg>

        <p className={styles.hint} aria-live="polite">
          {hover
            ? `${hover.count === 0 ? "No" : hover.count} contribution${hover.count === 1 ? "" : "s"} · ${dayLabel(hover.date)}`
            : "Hover a day for details"}
        </p>
      </div>
    </div>
  );
}