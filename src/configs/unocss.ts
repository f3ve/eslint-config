import unocss from '@unocss/eslint-config/flat';
import { Linter } from 'eslint';

export function unocssConfig(): Linter.FlatConfig[] {
  return [
    unocss,
    {
      rules: {
        'unocss/blocklist': 'warn',
      },
    },
  ];
}
