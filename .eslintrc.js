module.exports = {
  'env': {
    'browser': true,
    'amd': true,
    'node': true,
    'es2021': true
  },
  'plugins': [
    'html'
  ],
  'extends': 'eslint:recommended',
  'parserOptions': {
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'rules': {
    'indent': [
      'error',
      2
    ],
    'linebreak-style': [
      'error',
      'unix'
    ],
    'quotes': [
      'error',
      'single'
    ],
    'semi': [
      'error',
      'never'
    ]
  }
}
