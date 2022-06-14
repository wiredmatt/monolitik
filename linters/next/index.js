module.exports = {
  extends: [
    'eslint-config-next',
    'eslint-config-base',
    'prettier'
  ],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'react/jsx-key': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx', '.js'] }
    ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    semi: 'off',
    'trailing-comma': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  }
}
