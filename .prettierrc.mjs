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
  plugins: ['prettier-plugin-astro', 'prettier-plugin-svelte'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
    {
      files: '*.svelte',
      options: {
        parser: 'svelte',
        svelteSortOrder: 'options-scripts-markup-styles', // Сортировка блоков
        svelteStrictMode: false, // Убирает строгий режим
        svelteBracketNewLine: true, // Перенос закрывающей скобки на новую строку
        svelteAllowShorthand: true, // Разрешает использование сокращённого синтаксиса
        svelteIndentScriptAndStyle: true, // Включает отступы в <script> и <style>
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
      },
    },
  ],
};