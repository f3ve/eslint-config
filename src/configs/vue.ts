import { FlatESLintConfigItem, Parser } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import vuePlugin from 'eslint-plugin-vue';
import { GLOB_JSX, GLOB_TSX, GLOB_VUE } from '../globs';

export function vueConfig(
  typescript?: boolean,
  jsx?: boolean,
): FlatESLintConfigItem[] {
  const files = [GLOB_VUE];
  if (jsx) {
    if (typescript) files.push(GLOB_TSX);
    files.push(GLOB_JSX);
  }

  return [
    {
      files,
      languageOptions: {
        ecmaVersion: 'latest',
        parser: vueParser,
        parserOptions: {
          parser: typescript ? (tsParser as unknown as Parser) : undefined,
          extraFileExtensions: ['.vue'],
          sourceType: 'module',
          ecmaFeatures: {
            jsx,
          },
        },
      },
      plugins: {
        vue: vuePlugin,
      },
      processor: vuePlugin.processors['.vue'],
      rules: {
        ...vuePlugin.configs['vue3-recommended'].rules,
        'vue/valid-v-slot': ['error', { allowModifiers: true }],
        'vue/multi-word-component-names': 'off',
        'vue/no-v-text-v-html-on-component': 'warn',
      },
    },
  ];
}
