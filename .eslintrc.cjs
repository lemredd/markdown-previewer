module.exports = {
	"root": true,
	"env": { "browser": true, "es2020": true },
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
	],
	"ignorePatterns": ["dist"],
	"parser": "@typescript-eslint/parser",
	"plugins": ["react-refresh"],
	"rules": {
		"max-lines": "warn",
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"quote-props": ["warn", "always"],
		"require-await": "error",
		"semi": [
			"error",
			"always"
		],
		"no-unused-vars": "off",
		"space-before-function-paren": ["error", "never"],
		"object-curly-spacing": ["error", "always"],

		// React
		"react-refresh/only-export-components": [
			"warn",
			{ "allowConstantExport": true },
		],

		// typescript-eslint
		"@typescript-eslint/no-unused-vars": [
			"error",
			{ "argsIgnorePattern": "^unused|_", "varsIgnorePattern": "^unused|_" }
		],
		"@typescript-eslint/no-explicit-any": "off",
		"@typescript-eslint/naming-convention": [
			"error",
			{
				"selector": "variable",
				"format": ["snake_case", "UPPER_CASE"]
			}
		],
		"@typescript-eslint/explicit-function-return-type": "error",

	},
};
