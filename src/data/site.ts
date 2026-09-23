// Everything on the site that is not a meeting lives here. Edit and commit.

export const project = {
  name: 'CandleStack',
  title: 'Configurable pipeline for pattern analysis in financial time series',
  tagline: 'Data → model → decision. Compare every combination on the same metrics.',
  meta: 'STU FEI · 2026/2027 · Supervisor Filip Hodoň',
  github: 'https://github.com/CandleStack-FEI-STU',
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

export const supervisor = { name: 'Filip Hodoň', affiliation: 'Faculty of Electrical Engineering and Information Technology, Slovak University of Technology in Bratislava' };

export const team: { name: string; role: string; area?: string; github?: string }[] = [
  { name: 'Arsen Labovich', role: 'To be assigned', github: 'ArsenLabovich' },
  { name: 'Mykhailo Adamenko', role: 'To be assigned' },
  { name: 'Vladyslav Shudiehov', role: 'To be assigned' },
  { name: 'Bohdan Lynnyk', role: 'To be assigned' },
  { name: 'Tymur Tkach', role: 'To be assigned' },
];
