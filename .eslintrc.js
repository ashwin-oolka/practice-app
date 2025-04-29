export default {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-native', '@typescript-eslint', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  env: {
    'react-native/react-native': true,
    es6: true,
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        endOfLine: 'auto',
      },
    ],
    // Critical Rules (will reject commits)
    'no-undef': 'error', // Prevents undefined variables
    'no-unreachable': 'error', // Prevents unreachable code
    'no-unsafe-finally': 'error', // Prevents unsafe finally blocks
    'no-unsafe-negation': 'error', // Prevents unsafe negations
    'no-unsafe-optional-chaining': 'error', // Prevents unsafe optional chaining
    'no-unused-private-class-members': 'error', // Prevents unused private class members
    'no-use-before-define': 'error', // Prevents using variables before definition
    'react/no-this-in-sfc': 'error', // Prevents this in stateless components
    'react/no-unsafe': 'error', // Prevents unsafe lifecycle methods
    'react/no-unused-state': 'error', // Prevents unused state
    'react/no-will-update-set-state': 'error', // Prevents setState in willUpdate
    '@typescript-eslint/no-non-null-assertion': 'error', // Prevents non-null assertions
    '@typescript-eslint/no-unnecessary-type-assertion': 'error', // Prevents unnecessary type assertions
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react-native/no-inline-styles': 'error',
    'react-native/no-color-literals': 'error',
    'react-native/no-raw-text': 'error',

    // Medium Rules (warnings)
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'prefer-const': 'warn',
    'react/prop-types': 'off', // Since we're using TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/jsx-uses-react': 'off', // Not needed in React 17+

    // Low Rules (disabled)
    'no-unused-vars': 'off', // Handled by @typescript-eslint/no-unused-vars
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
