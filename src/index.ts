import { FlatESLintConfig } from 'eslint-define-config';
import { vueConfig } from './configs/vueConfig';
import { GLOB_DEFAULT_FILES, GLOB_IGNORE } from './globs';

type f3veConfigOptions = {
  files?: string[];
  ignores?: string[];
  vue?: boolean;
  typescript?: boolean;
  prettier?: boolean;
};

export default function f3veEslintConfig(opts: f3veConfigOptions) {
  const files = opts.files
    ? [...opts.files, ...GLOB_DEFAULT_FILES]
    : GLOB_DEFAULT_FILES;

  const ignores = opts.ignores
    ? [...opts.ignores, ...GLOB_IGNORE]
    : GLOB_IGNORE;

  const configs: FlatESLintConfig[] = [
    {
      files,
      ignores,
    },
  ];

  if (opts.vue) configs.push(vueConfig(opts.typescript));

  return configs;
}
