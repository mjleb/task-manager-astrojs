/** @type {import("prettier").Config} */
export default {
  semi: true,
  singleQuote: true,
  jsxSingleQuote: false,
  bracketSpacing: true,
  trailingComma: 'all',
  printWidth: 300,
  tabWidth: 2,
  arrowParens: 'always',
  endOfLine: 'lf',
  insertFinalNewLine: true,
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};