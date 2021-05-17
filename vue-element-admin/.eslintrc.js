module.exports = {
  env: {
    commonjs: true,
    es6: true,
  },
  extends: [
    'plugin:vue/essential',
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    parser: 'babel-eslint',
  },
  plugins: [
    'vue',
  ],
  rules: {
    'linebreak-style': 'off',
    'no-console': 0,
    'arrow-parens': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'config', // for axios config
        ],
      },
    ],
    'import/no-unresolved': 'off',
  },
};
