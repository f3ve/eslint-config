import { FlatESLintConfigItem } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import { GLOB_TS, GLOB_TSX, GLOB_VUE } from '../globs';

export function tsConfig(vue?: boolean, jsx?: boolean): FlatESLintConfigItem[] {
  const files = [GLOB_TS];
  if (vue) files.push(GLOB_VUE);
  if (jsx) files.push(GLOB_TSX);

  return [
    {
      files,
      languageOptions: {
        ecmaVersion: 2021,
        parser: tsParser,
        sourceType: 'module',
        parserOptions: {
          ecmaFeatures: {
            jsx,
          },
        },
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
