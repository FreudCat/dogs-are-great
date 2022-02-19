module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // the following operator-linebreak rule follows the rules of prettier
    "operator-linebreak": [
      "error",
      "after",
      { overrides: { "?": "ignore", ":": "ignore" } },
    ],
    "object-curly-newline": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    quotes: [2, "double", { avoidEscape: true }],
    "linebreak-style": 0,
    "react/require-default-props": "off",
    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "no-console": "off",
    "comma-dangle": ["error", "only-multiline"],
    "react/jsx-one-expression-per-line": "off",
  },
};
