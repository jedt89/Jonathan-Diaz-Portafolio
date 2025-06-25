// export default {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:react/recommended',
//     'plugin:react/jsx-runtime',
//     'plugin:react-hooks/recommended',
//     'plugin:import/errors',
//     'plugin:import/warnings',
//     'plugin:import/typescript',
//     'plugin:prettier/recommended',
//     'plugin:@typescript-eslint/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   parserOptions: {
//     ecmaVersion: 'latest',
//     sourceType: 'module',
//     project: ['./tsconfig.json'],
//   },
//   settings: {
//     react: { version: '18.2' },
//     'import/resolver': {
//       alias: {
//         map: [['@/', './src']],
//         extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
//       },
//       node: {
//         extensions: ['.ts', '.tsx', '.js', '.jsx'],
//       },
//     },
//   },
//   plugins: [
//     'react-refresh',
//     'import',
//     'auto-import',
//     '@typescript-eslint',
//   ],
//   rules: {
//     'react/jsx-no-target-blank': 'off',
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//     'import/order': [
//       'warn',
//       {
//         groups: ['builtin', 'external', 'internal'],
//         pathGroups: [
//           {
//             pattern: 'react',
//             group: 'external',
//             position: 'before',
//           },
//         ],
//         pathGroupsExcludedImportTypes: ['react'],
//         alphabetize: { order: 'asc', caseInsensitive: true },
//         'newlines-between': 'always',
//       },
//     ],
//     'import/newline-after-import': ['warn', { count: 1 }],
//     'import/first': 'warn',
//     'import/no-duplicates': 'warn',
//     'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
//     'auto-import/auto-import': 'error',
//     '@typescript-eslint/explicit-module-boundary-types': 'off',
//     '@typescript-eslint/no-explicit-any': 'warn',
//     '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//   },
// };
