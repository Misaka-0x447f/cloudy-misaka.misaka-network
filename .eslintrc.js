module.exports = {
  root: true,
  env: {
    node: true
  },
  "extends": [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "@vue/standard",
    "@vue/typescript"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "semi": ["error", "always"],
    quotes: ["error", "double"],
    "no-trailing-spaces": "warn",
    "vue/script-indent": ["warn", 2, {
      baseIndent: 1
    }],
    "@typescript-eslint/no-unused-vars": ["warn", {
      varsIgnorePattern: "_+" // allow discard
    }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/ban-ts-ignore": ["warn"],
    "indent": "off",
    "@typescript-eslint/indent": ["error", 2]
  },
  overrides: [
    {
      "files": ["*.vue"],
      "rules": {
        "indent": "off",
        "@typescript-eslint/indent": "off"
      }
    }
  ],
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
};
