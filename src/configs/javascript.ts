import { FlatESLintConfigItem } from 'eslint-define-config';
import globals from 'globals';
import { GLOB_JS, GLOB_JSX, GLOB_VUE } from '../globs';
import js from '@eslint/js';

export function jsConfig(opts: {
  browser?: boolean;
  node?: boolean;
  jsx?: boolean;
  vue?: boolean;
  globals?: Record<
    string,
    boolean | 'off' | 'readonly' | 'writable' | 'readable' | 'writeable'
  >;
}): FlatESLintConfigItem[] {
  const files = [GLOB_JS];
  if (opts.jsx) files.push(GLOB_JSX);
  if (opts.vue) files.push(GLOB_VUE);

  return [
    js.configs.recommended,

    {
      files,
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
          ...opts.globals,
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
