import { FlatESLintConfigItem } from 'eslint-define-config';
import { GLOB_DEFAULT_FILES } from '../globs';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export function prettierConfig(): FlatESLintConfigItem[] {
  return [
    eslintConfigPrettier as FlatESLintConfigItem,
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
