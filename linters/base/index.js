module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false
      }
    ],
    'import/prefer-default-export': 0,
    'import/extensions': [
      1,
      {
        tsx: 'never',
        ts: 'never',
        jsx: 'never',
        js: 'never',
        json: 'always'
      }
    ],
    'prettier/prettier': 'error'
  }
}
