import unocss from '@unocss/eslint-config/flat';
import { FlatESLintConfig } from 'eslint-define-config';

export function unocssConfig(): FlatESLintConfig[] {
  return [
    unocss,
    {
      rules: {
        'unocss/blocklist': 'warn',
      },
    },
  ];
}
