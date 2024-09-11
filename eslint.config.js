import tsParser from '@typescript-eslint/parser';
import tsESLintPlugin from '@typescript-eslint/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';

// Extend the configuration objects directly from the plugins if needed
export default [
  {
    ignores: ['node_modules/**', 'dist/**'], // замена .eslintignore
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: { jsx: true },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
      globals: {
        browser: true,
        es2021: true,
      },
    },
    plugins: {
      '@typescript-eslint': tsESLintPlugin,
      react: react,
      'react-hooks': reactHooks,
      'jsx-a11y': jsxA11y,
      import: importPlugin,
    },
    rules: {
      // React rules
      'react/jsx-uses-react': 'off', // From React 17 onwards, it's not needed
      'react/react-in-jsx-scope': 'off', // React 17 onwards, JSX does not require React to be in scope

      // TypeScript ESLint rules
      ...tsESLintPlugin.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // JSX Accessibility rules
      ...jsxA11y.configs.recommended.rules,

      // Custom rules
      'import/no-amd': 'off',
      'import/no-mutable-exports': 'off',
    },
  },
];
