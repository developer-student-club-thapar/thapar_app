module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: 'babel-eslint',
  extends: [
    'plugin:react/recommended',
    'eslint:recommended',
    'standard',
    'standard-react',
    'prettier',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    semi: 'off',
    'semi-style': ['error', 'last'],
    'space-before-function-paren': 'off',
    'no-unused-vars': 'warn',
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    'react/jsx-handler-names': 'off',
  },
};
