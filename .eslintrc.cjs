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
    'plugin:promise/recommended',
    'plugin:n/recommended',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['sonarjs', 'react', 'promise'],
  rules: {},
}
