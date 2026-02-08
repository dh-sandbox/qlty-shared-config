module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:jsdoc/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jsdoc", "prettier"],
  rules: {
    // ESLint built-in rules
    indent: ["error", 2, { SwitchCase: 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-unused-vars": ["warn", { args: "none" }],
    "no-console": "warn",
    "no-var": "error",
    "prefer-const": "error",
    "no-trailing-spaces": "error",
    "space-before-function-paren": ["error", "never"],
    "max-len": [
      "warn",
      {
        code: 80,
        ignoreComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    "prefer-template": "error",
    "object-shorthand": "error",
    "arrow-body-style": ["error", "as-needed"],
    "no-unused-expressions": ["error", { allowShortCircuit: true, allowTernary: true }],
    eqeqeq: ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],

    // JSDoc plugin rules
    "jsdoc/require-jsdoc": [
      "error",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    "jsdoc/require-description": "warn",
    "jsdoc/require-param": "warn",
    "jsdoc/require-returns": "warn",
    "jsdoc/check-indentation": "warn",

    // Prettier plugin rule (disables ESLint rules that conflict with Prettier)
    "prettier/prettier": "error",
  },
};
