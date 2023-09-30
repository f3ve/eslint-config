import unocss from '@unocss/eslint-config/flat';
import { FlatESLintConfigItem } from 'eslint-define-config';

export function unocssConfig(): FlatESLintConfigItem[] {
  return [
    unocss,
    {
      rules: {
        'unocss/blocklist': 'warn',
      },
    },
  ];
}
