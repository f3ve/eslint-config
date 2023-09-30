import { FlatESLintConfigItem } from 'eslint-define-config';
import {
  vueConfig,
  jsConfig,
  tsConfig,
  prettierConfig,
  unocssConfig,
} from './configs';
import { GLOB_IGNORE } from './globs';

type f3veConfigOptions = {
  /** Add custom files */
  files?: string[];

  /** Added custom ignores */
  ignores?: string[];

  /** Enable Vue config */
  vue?: boolean;

  /** Enable unocss config */
  unocss?: boolean;

  /** Enable TypeScript config */
  typescript?: boolean;

  /** Enable Prettier */
  prettier?: boolean;

  /** Enable Browser globals */
  browser?: boolean;

  /**Enable Node globals */
  node?: boolean;

  /** Enable JSX features */
  jsx?: boolean;

  /** Custom global variables */
  globals?: Record<
    string,
    boolean | 'off' | 'readonly' | 'writable' | 'readable' | 'writeable'
  >;
};

export default function f3veEslintConfig(opts: f3veConfigOptions) {
  const ignores = opts.ignores
    ? [...opts.ignores, ...GLOB_IGNORE]
    : GLOB_IGNORE;

  const configs: FlatESLintConfigItem[] = [
    {
      ignores,
    },

    ...jsConfig({
      browser: opts.browser,
      node: opts.node,
      jsx: opts.jsx,
      globals: opts.globals,
    }),
  ];

  if (opts.typescript) configs.push(...tsConfig(opts.vue));
  if (opts.vue) configs.push(...vueConfig(opts.typescript));
  if (opts.prettier) configs.push(...prettierConfig());
  if (opts.unocss) configs.push(...unocssConfig());

  return configs;
}
