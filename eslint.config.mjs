import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import parser from '@typescript-eslint/parser';

import eslintPluginAstro from 'eslint-plugin-astro';
import jsxA11y from 'eslint-plugin-jsx-a11y';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: ['**/*.{js,mjs,cjs,ts}'],
		parserOptions: {
			programs: [parser.createProgram('tsconfig.json')],
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	jsxA11y.flatConfigs.recommended,
];
