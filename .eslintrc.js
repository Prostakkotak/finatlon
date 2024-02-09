const isDev = process.env.NODE_ENV !== 'production'

module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser, @babel/preset-typescript',
  },

  extends: [
    '@nuxtjs/eslint-config',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
        singleQuote: true,
      },
    ],
    'vue/no-multiple-template-root': 'off',
    'no-console': isDev ? 'off' : 'error',
    'no-debugger': isDev ? 'off' : 'error',
    'vue/no-parsing-error': [2, { 'x-invalid-end-tag': false }],
    'no-prototype-builtins': 0,
    'no-empty': ['error', { allowEmptyCatch: true }],
  },

  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
}
