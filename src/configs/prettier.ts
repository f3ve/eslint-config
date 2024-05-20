import { GLOB_DEFAULT_FILES } from '../globs';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';
import { Linter } from 'eslint';

export function prettierConfig(): Linter.FlatConfig[] {
  return [
    eslintConfigPrettier,
    {
      files: GLOB_DEFAULT_FILES,
      plugins: {
        prettier: prettierPlugin,
      },
      rules: {
        'prettier/prettier': 'error',
      },
    },
  ];
}
