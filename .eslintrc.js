module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'typescript/no-explicit-any': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'typescript/explicit-module-boundary-types': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    "typescript/no-var-requires": "off"
  }
}
