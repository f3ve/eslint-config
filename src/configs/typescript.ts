import { FlatESLintConfigItem } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { GLOB_TS, GLOB_VUE } from '../globs';

export function tsConfig(vue?: boolean): FlatESLintConfigItem[] {
  const files = vue ? [GLOB_TS, GLOB_VUE] : [GLOB_TS];

  return [
    {
      files,
      languageOptions: {
        ecmaVersion: 2021,
        parser: tsParser,
        sourceType: 'module',
      },

      plugins: {
        '@typescript-eslint': tsPlugin as any,
      },
      rules: {
        ...tsPlugin.configs?.['eslint-recommended']?.overrides?.[0]?.rules,
        ...tsPlugin.configs?.recommended.rules,
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ];
}
