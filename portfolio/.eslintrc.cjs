module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    project: "./tsconfig.json",
  },
  extends: [
    "plugin:astro/recommended",
    "plugin:@typescript-eslint/recommended",
    // other configurations as needed
  ],
  // other configurations as needed
};
