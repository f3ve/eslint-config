import { type FlatESLintConfig } from 'eslint-define-config';
import {
  vueConfig,
  jsConfig,
  tsConfig,
  prettierConfig,
  unocssConfig,
} from './configs';
import { GLOB_IGNORE } from './globs';
import type { f3veConfigOptions } from './types';

export default function f3veEslintConfig(opts: f3veConfigOptions) {
  const ignores = opts.ignores
    ? [...opts.ignores, ...GLOB_IGNORE]
    : GLOB_IGNORE;

  const configs: FlatESLintConfig[] = [
    {
      ignores,
    },

    ...jsConfig({
      browser: opts.browser,
      node: opts.node,
      jsx: opts.jsx,
      globals: opts.globals,
      vue: opts.vue,
    }),
  ];

  if (opts.typescript) configs.push(...tsConfig(opts.vue, opts.jsx));
  if (opts.vue) configs.push(...vueConfig(opts.typescript, opts.jsx));
  if (opts.prettier) configs.push(...prettierConfig());
  if (opts.unocss) configs.push(...unocssConfig());

  return configs;
}
