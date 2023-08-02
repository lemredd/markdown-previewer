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
		"react-refresh/only-export-components": [
			"warn",
			{ "allowConstantExport": true },
		],
	},
};
