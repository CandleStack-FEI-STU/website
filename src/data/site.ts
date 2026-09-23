// Everything on the site that is not a meeting lives here. Edit and commit.

export const project = {
  name: 'Candlestack',
  title: 'Configurable pipeline for pattern analysis in financial time series',
  tagline: 'Data → model → decision. Compare every combination on the same metrics.',
  meta: 'STU FEI · 2026/27 · Supervisor Filip Hodoň',
  github: 'https://github.com/CandleStack-FEI-STU/candlestack',
};

export type PhaseState = 'done' | 'active' | 'planned';

export const status = {
  updated: '23.09.2026',
  phases: [
    { name: 'Setup', description: 'Repository, process, website', state: 'done' },
    { name: 'Skeleton', description: 'Frontend → API → stub layers, config format', state: 'active' },
    { name: 'First version', description: 'One preprocessing, one model, one threshold, one metric', state: 'planned' },
    { name: 'Extension', description: 'More transforms, architectures, post-processing', state: 'planned' },
    { name: 'Evaluation', description: 'Architecture comparison, report, defense', state: 'planned' },
  ] satisfies { name: string; description: string; state: PhaseState }[],
  done: ['GitHub organization, monorepo, protected main', 'Pull request workflow with review', 'Project website'],
  inProgress: ['Assigning team roles', 'Interfaces between layers', 'Experiment configuration format'],
  planned: ['End-to-end skeleton', 'First working version', 'CI: lint and tests on every pull request', 'Deployment server'],
};

export const supervisor = { name: 'Filip Hodoň', affiliation: 'FEI STU' };

export const team: { name: string; role: string; area: string; github?: string }[] = [
  { name: 'Arsen Labovich', role: 'Tech Lead, Backend', area: 'API, experiment storage, pipeline orchestration, code review', github: 'ArsenLabovich' },
  { name: '[Name]', role: 'Frontend', area: 'Experiment builder, results dashboard, comparison view' },
  { name: '[Name]', role: 'ML Engineer', area: '.keras loading and validation, inference, architecture comparison' },
  { name: '[Name]', role: 'Data Engineer', area: 'Data sources, Renko, Kagi, windows, normalization' },
  { name: '[Name]', role: 'Quant Developer', area: 'Signals, backtest, risk limits, trading metrics' },
];
