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
    brow
  },
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true
    }
  }
};
