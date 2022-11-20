module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: [
    'standard',
    'plugin:sonarjs/recommended',
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sonarjs', 'react'],
  rules: {},
}
