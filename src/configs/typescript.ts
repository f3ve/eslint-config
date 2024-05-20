import tseslint from 'typescript-eslint';
import { GLOB_TS, GLOB_TSX, GLOB_VUE } from '../globs';
import { Linter } from 'eslint';

export function tsConfig(vue?: boolean, jsx?: boolean): Linter.FlatConfig[] {
  const files = [GLOB_TS];
  if (vue) files.push(GLOB_VUE);
  if (jsx) files.push(GLOB_TSX);

  return [
    {
      files,
      ...tseslint.configs.recommended,
    },
  ];
}
