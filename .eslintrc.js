module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  "settings": {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      "typescript": {
        "alwaysTryTypes": true // Строка влияет на alias
      }
    }
  },
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended"

  ],
  plugins: [
    "@typescript-eslint"
  ],
  rules: {
    "import/no-unresolved": "error",// Строка влияет на alias
    "linebreak-style": ["error", "unix"],
    // "no-unused-vars": "off"
  },
  ignorePatterns: [".eslintrc.js", "webpack.config.js"],
  parserOptions: {
    "project": "./tsconfig.json"
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
  ]
};
