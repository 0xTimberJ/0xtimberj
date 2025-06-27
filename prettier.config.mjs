/**
 * @type {import('prettier').Config}
 */
const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  plugins: [
    "prettier-plugin-tailwindcss",
    "@trivago/prettier-plugin-sort-imports",
  ],
  importOrder: [
    '^"use client";',
    "<THIRD_PARTY_MODULES>",
    "^@/components/ui/(.*)$",
    "^[./]",
    "^@/(.*)$",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};

export default config;
