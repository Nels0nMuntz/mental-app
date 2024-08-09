import js from "@eslint/js";
import globals from "globals";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginReactRefresh from "eslint-plugin-react-refresh";
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import tslint from "typescript-eslint";
import eslintPluginImport from "eslint-plugin-import";

// For JS
/** @type {import('eslint').Linter.FlatConfig} */
// export default [
//   {
//     plugins: {
//       react: eslintPluginReact,
//       'react-hooks': eslintPluginReactHooks,
//       'react-refresh': eslintPluginReactRefresh,
//       prettier: eslintPluginPrettier,
//     }
//   },
//   {
//     ignores: ['node_modules', 'build', '.next']
//   },
//   js.configs.recommended,
//   {
//     languageOptions: {
//       globals: {
//         ...globals.node,
//         ...globals.browser,
//         ...globals.es2022,
//       },
//       parserOptions: eslintPluginReact.configs.recommended.parserOptions,
//     }
//   },
//   {
//     files: ['**/*.{js,jsx}'],
//     rules: {
//       ...eslintPluginPrettier.configs.,
//       ...eslintConfigPrettier.rules,
//       "no-unused-vars": "warn",
//       "no-undef": "warn",
//       'prefer-const': 'error',
//       'react/jsx-no-target-blank': 'off',
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true }
//       ]
//     }
//   }
// ];

// For TS
export default tslint.config(
  {
    plugins: {
      "@typescript-eslint": tslint.plugin,
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      "react-refresh": eslintPluginReactRefresh,
      prettier: eslintPluginPrettier,
      "eslint-import": eslintPluginImport
    },
  },
  {
    ignores: ["node_modules", "build", ".next", "*.config.js"],
  },
  js.configs.recommended,
  ...tslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.es2022,
      },
      parserOptions: {
        parser: tslint.parser,
        project: ["./tsconfig.json"],
        tsconfigRootDir: ".",
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...eslintPluginPrettier.configs.recommended.rules,
      ...eslintConfigPrettier.rules,
      "no-unused-vars": "warn",
      "prefer-const": "error",
      "react/jsx-no-target-blank": "off",
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto",
        },
      ],
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
        },
      ],
    },
  },
);
