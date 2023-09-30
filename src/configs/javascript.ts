import { FlatESLintConfigItem } from 'eslint-define-config';
import globals from 'globals';
import { GLOB_JS } from '../globs';
import js from '@eslint/js';

export function jsConfig(opts: {
  browser?: boolean;
  node?: boolean;
  jsx?: boolean;
}): FlatESLintConfigItem[] {
  return [
    js.configs.recommended,

    {
      files: [GLOB_JS],
      languageOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        globals: {
          ...globals.es2021,
          ...(opts.browser && globals.browser),
          ...(opts.node && globals.node),
          document: 'readonly',
          navigator: 'readonly',
          window: 'readonly',
        },
        parserOptions: {
          ecmaFeatures: {
            jsx: opts.jsx,
          },
          ecmaVersion: 2021,
          sourceType: 'module',
        },
      },
      rules: {
        'no-console': 'warn',
        'no-debugger': 'warn',
      },
    },
  ];
}
