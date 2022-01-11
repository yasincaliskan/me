const path = require("path");

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["react", "react-hooks", "@typescript-eslint", "jsx-a11y"],
  env: {
    browser: true,
    jest: true,
    es6: true,
    jquery: true
  },
  extends: [
    "@hipo/eslint-config-base",
    "@hipo/eslint-config-react",
    "@hipo/eslint-config-typescript",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "prettier"
  ],
  parserOptions: {
    project: path.resolve(__dirname, "./tsconfig.json"),
    tsconfigRootDir: __dirname,
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    },
    createDefaultProgram: true
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      typescript: {}
    }
  },
  globals: {
    TARGET_ENV_TYPE: "readonly",
    CURRENT_LANGUAGE: "readonly",
    BASE_URL: "readonly",
    STATIC_URL: "readonly",
    LANGUAGE_PREFIX: "readonly",
    gettext: "readonly",
    NOTIFICATIONS_ENDPOINT: "readonly",
    NOTIFICATIONS_PAGE: "readonly"
  },
  rules: {
    "react/jsx-no-bind": "off",
    "react/no-array-index-key": "off",
    "react/jsx-pascal-case": "off",
    "react/jsx-sort-props": "off",
    "react-hooks/rules-of-hooks": "off"
  },
  overrides: [
    {
      files: [".eslintrc.js", "*.config.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off"
      }
    },
    {
      files: ["*.d.ts"],
      rules: {
        "newline-after-var": "off"
      }
    }
  ]
};
