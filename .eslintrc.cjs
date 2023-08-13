const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
}
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react'],
  rules: {
    'space-before-function-paren': RULES.OFF,
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'no-unused-vars': RULES.WARN,
    'multiline-ternary': RULES.OFF,
    camelcase: RULES.WARN
  }
}
