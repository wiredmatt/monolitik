module.exports = {
  extends: ['eslint-config-next', 'eslint-config-react'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'react/jsx-key': 'off',
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.jsx', '.tsx', '.js'] }
    ],
    'react/function-component-definition': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/button-has-type': 'off',
    'react/prop-types': 'off',
    'trailing-comma': 'off',
    '@typescript-eslint/no-var-requires': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      typescript: {}
    }
  },
  plugins: ['prettier']
};
