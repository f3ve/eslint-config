import { defineFlatConfig } from 'eslint-define-config';
import tsParser from '@typescript-eslint/parser';
import vueParser from 'vue-eslint-parser';
import vuePlugin from 'eslint-plugin-vue';
import { GLOB_VUE } from '../globs';

export function vueConfig(typescript?: boolean) {
  return defineFlatConfig({
    files: [GLOB_VUE],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: vueParser,
      parserOptions: {
        parser: typescript ? tsParser : null,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
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
  });
}
