module.exports = {
  extends: ['eslint-config-base'],
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    jest: true
  },
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'class-methods-use-this': 'off',
    'no-useless-constructor': 'off',
    'no-unused-vars': [
      'error',
      { argsIgnorePattern: '(Service|Model)' }
    ],
    'no-empty-function': ['error', { allow: ['constructors'] }]
  },
  plugins: ['prettier']
}
