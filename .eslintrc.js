module.exports = {
  extends: ["eslint:recommended", "prettier", "plugin:react/recommended"],
  plugins: ["prettier", "react"], 
  rules: {
    "prettier/prettier": [
      "error",
      {
        singleQuote: true,
        trailingComma: "all"
      }
    ],
    eqeqeq: ["error", "always"] 
  },
  env: {
    es6: true,
    node: true,
    browser: true
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  }
};
