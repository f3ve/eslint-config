export const GLOB_JS = '**/*.js';
export const GLOB_TS = '**/*.ts';
export const GLOB_VUE = '**/*.vue';

export const GLOB_DEFAULT_FILES = ['**/*.js', '**/*.ts', '**/*.vue'];

export const GLOB_IGNORE = [
  '**/node_modules',
  '**/dist',
  '**/package-lock.json',
  '**/yarn.lock',
  '**/pnpm-lock.yaml',

  '**/output',
  '**/coverage',
  '**/temp',
  '**/.vitepress/cache',
  '**/.nuxt',
  '**/.vercel',
  '**/.changeset',
  '**/.idea',
  '**/.output',
  '**/.vite-inspect',

  '**/CHANGELOG*.md',
  '**/*.min.*',
  '**/LICENSE*',
  '**/__snapshots__',
  '**/auto-import?(s).d.ts',
  '**/components.d.ts',
];
