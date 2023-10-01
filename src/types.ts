export type f3veConfigOptions = {
  /** Add custom files */
  files?: string[];

  /** Added custom ignores */
  ignores?: string[];

  /** Enable Vue config */
  vue?: boolean;

  /** Enable unocss config */
  unocss?: boolean;

  /** Enable TypeScript config */
  typescript?: boolean;

  /** Enable Prettier */
  prettier?: boolean;

  /** Enable Browser globals */
  browser?: boolean;

  /**Enable Node globals */
  node?: boolean;

  /** Enable JSX features */
  jsx?: boolean;

  /** Custom global variables */
  globals?: Record<
    string,
    boolean | 'off' | 'readonly' | 'writable' | 'readable' | 'writeable'
  >;
};
