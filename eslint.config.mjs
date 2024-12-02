import astro from 'eslint-plugin-astro';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  prettier,
  {
    files: ["**/*.astro"],
    plugins: {
      astro,
    },
    languageOptions: {
      parser: astro.parsers.astro,
    },
    rules: {
      // Добавьте ваши кастомные правила
      "astro/no-unused-css": "warn",
    },
  },
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      // Добавьте кастомные правила для JS/TS файлов
      "no-unused-vars": "warn",
    },
  },
];