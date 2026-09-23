// Decorative background: market charts, a neural net, the pipeline, clusters.
// Generated once at build time with a seeded PRNG, so the output is stable.
// Colors come from CSS variables through classes (see Background.astro).

function prng(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = prng(7);
const gauss = (mu: number, sigma: number) => {
  const u = 1 - rand();
  const v = rand();
  return mu + sigma * Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
};
const f = (n: number) => n.toFixed(1);

function candles(x0: number, y0: number, w: number, n: number, amp: number, op: number) {
  const out: string[] = [];
  const cw = w / n;
  let price = 0;
  for (let i = 0; i < n; i++) {
    const o = price;
    const c = o + gauss(0.12, 1);
    const hi = Math.max(o, c) + Math.abs(gauss(0, 0.6));
    const lo = Math.min(o, c) - Math.abs(gauss(0, 0.6));
    price = c;
    const y = (v: number) => y0 - v * amp;
    const x = x0 + i * cw + cw / 2;
    const cls = c >= o ? 'up' : 'down';
    out.push(`<line class="s-${cls}" x1="${f(x)}" y1="${f(y(hi))}" x2="${f(x)}" y2="${f(y(lo))}" stroke-opacity="${op}"/>`);
    const top = y(Math.max(o, c));
    const h = Math.max(2, Math.abs(y(o) - y(c)));
    out.push(`<rect class="f-${cls}" x="${f(x - cw * 0.3)}" y="${f(top)}" width="${f(cw * 0.6)}" height="${f(h)}" fill-opacity="${op * 0.8}"/>`);
  }
  return out.join('');
}

function volume(x0: number, y0: number, n: number, w: number, op: number) {
  const out: string[] = [];
  const bw = w / n;
  for (let i = 0; i < n; i++) {
    const h = Math.abs(gauss(18, 12)) + 4;
    const cls = rand() > 0.45 ? 'up' : 'down';
    out.push(`<rect class="f-${cls}" x="${f(x0 + i * bw)}" y="${f(y0 - h)}" width="${f(bw * 0.7)}" height="${f(h)}" fill-opacity="${op}"/>`);
  }
  return out.join('');
}

function lineChart(x0: number, y0: number, w: number, n: number, amp: number, op: number) {
  const pts: [number, number][] = [];
  let v = 0;
  for (let i = 0; i < n; i++) {
    v += gauss(0.18, 1);
    pts.push([x0 + (i * w) / (n - 1), y0 - v * amp]);
  }
  const line = pts.map(([a, b]) => `${f(a)},${f(b)}`).join(' ');
  const area = `${f(pts[0][0])},${y0 + 40} ${line} ${f(pts[pts.length - 1][0])},${y0 + 40}`;
  const k = 6;
  const ma: string[] = [];
  for (let i = k; i < n; i++) {
    const avg = pts.slice(i - k, i).reduce((s, [, b]) => s + b, 0) / k;
    ma.push(`${f(pts[i][0])},${f(avg)}`);
  }
  return (
    `<polyline class="s-up" points="${line}" fill="none" stroke-opacity="${op}" stroke-width="1.4"/>` +
    `<polygon class="f-up" points="${area}" fill-opacity="${op * 0.25}"/>` +
    `<polyline class="s" points="${ma.join(' ')}" fill="none" stroke-opacity="${op}" stroke-dasharray="4 3"/>`
  );
}

function neural(x0: number, y0: number, layers: number[], dx: number, dy: number, op: number) {
  const pos = layers.map((cnt, li) =>
    Array.from({ length: cnt }, (_, j) => [x0 + li * dx, y0 + (j - (cnt - 1) / 2) * dy] as const),
  );
  const out: string[] = [];
  for (let l = 0; l < pos.length - 1; l++) {
    for (const [x1, y1] of pos[l]) {
      for (const [x2, y2] of pos[l + 1]) {
        out.push(`<line class="s" x1="${x1}" y1="${f(y1)}" x2="${x2}" y2="${f(y2)}" stroke-opacity="${op * 0.45}" stroke-width="0.8"/>`);
      }
    }
  }
  for (const layer of pos) {
    for (const [x, y] of layer) {
      out.push(`<circle class="s f-bg" cx="${x}" cy="${f(y)}" r="5" stroke-opacity="${op * 1.4}" stroke-width="1.2"/>`);
    }
  }
  return out.join('');
}

function pipeline(x0: number, y0: number, labels: string[], op: number) {
  const bw = 112;
  const bh = 30;
  const gap = 26;
  return labels
    .map((label, i) => {
      const y = y0 + i * (bh + gap);
      let s = `<rect class="s f-bg" x="${x0}" y="${y}" width="${bw}" height="${bh}" rx="6" stroke-opacity="${op}"/>`;
      s += `<text class="f" x="${x0 + 12}" y="${y + 19}" fill-opacity="${op * 1.3}" font-size="11" font-family="var(--font-mono)">${label}</text>`;
      if (i < labels.length - 1) {
        s += `<path class="s" d="M${x0 + bw / 2} ${y + bh} v${gap - 6} m-4 -5 l4 5 l4 -5" fill="none" stroke-opacity="${op}"/>`;
      }
      return s;
    })
    .join('');
}

function clusters(centers: [number, number, string][], op: number) {
  const out: string[] = [];
  for (const [cx, cy, cls] of centers) {
    for (let i = 0; i < 24; i++) {
      out.push(`<circle class="f-${cls}" cx="${f(cx + gauss(0, 18))}" cy="${f(cy + gauss(0, 18))}" r="2" fill-opacity="${op}"/>`);
    }
    out.push(`<path class="s-${cls}" d="M${cx - 5} ${cy} h10 M${cx} ${cy - 5} v10" stroke-opacity="${op * 1.6}" stroke-width="1.4"/>`);
  }
  return out.join('');
}

function heatmap(x0: number, y0: number, n: number, cell: number, op: number) {
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const v = i === j ? 1 : Math.max(0, 1 - Math.abs(i - j) / n + (rand() * 0.35 - 0.25));
      out.push(`<rect class="f-up" x="${x0 + j * cell}" y="${y0 + i * cell}" width="${cell - 2}" height="${cell - 2}" fill-opacity="${(op * v).toFixed(3)}"/>`);
    }
  }
  return out.join('');
}

function lossCurve(x0: number, y0: number, w: number, h: number, op: number) {
  const pts: string[] = [];
  for (let i = 0; i < 40; i++) {
    const t = i / 39;
    const v = Math.exp(-4 * t) * 0.9 + 0.08 + (rand() * 0.06 - 0.03);
    pts.push(`${f(x0 + t * w)},${f(y0 + h - h * (1 - v))}`);
  }
  return (
    `<polyline class="s-down" points="${pts.join(' ')}" fill="none" stroke-opacity="${op}" stroke-width="1.4"/>` +
    `<path class="s" d="M${x0} ${y0} V${y0 + h} H${x0 + w}" fill="none" stroke-opacity="${op}"/>`
  );
}

// Left column: 300 x 1000
export const left =
  lineChart(24, 150, 250, 40, 5, 0.32) +
  neural(60, 380, [3, 5, 5, 2], 64, 34, 0.22) +
  clusters([[70, 610, 'up'], [160, 680, 'decor'], [80, 760, 'down']], 0.3) +
  heatmap(40, 860, 8, 18, 0.16);

// Right column: 290 x 900
export const right =
  pipeline(50, 70, ['load()', 'renko()', 'window(64)', 'model.predict', 'threshold()'], 0.42) +
  lossCurve(20, 420, 240, 110, 0.3) +
  candles(10, 720, 260, 26, 9, 0.28) +
  volume(10, 820, 26, 260, 0.2);

// Bottom band: 1280 x 160
export const bottom = candles(0, 60, 1280, 72, 6, 0.22) + volume(0, 150, 72, 1280, 0.14);
