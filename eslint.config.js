import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import importPlugin from 'eslint-plugin-import'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      import: importPlugin, // plugin baru buat ngatur import
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    rules: {
      // variabel/function harus camelCase, tapi izinin PascalCase
      // (soalnya komponen React kayak "Header", "ProjectCarousel" itu wajib PascalCase)
      camelcase: ['warn', { properties: 'never' }],

      // wajib pakai === bukan ==, biar gak ada bug perbandingan tipe data aneh
      eqeqeq: ['warn', 'always'],

      // import yang gak kepake bakal di-warn (bukan bikin gagal build)
      'no-unused-vars': 'warn',

      // urutan import: built-in/library dulu (react, motion, dll),
      // baru import lokal (./components, ../hooks, dst),
      // dan kasih 1 baris kosong antar kelompoknya
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          'newlines-between': 'always',
        },
      ],
    },
  },
])