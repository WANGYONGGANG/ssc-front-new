module.exports = {
	root: true,
	env: {
		amd: true,
		es6: true,
		browser: true,
		node: false,
	},
	globals: {
		uni: true,
		wx: true,
	},
	extends: ["plugin:vue/recommended", "eslint:recommended"],
	parser: "babel-eslint",

	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
		"@typescript-eslint/no-explicit-any": ["off"],
		"@typescript-eslint/no-unused-vars": ["off"],
		"@typescript-eslint/ban-types": ["off"],
		"vue/no-unused-components": ["off"],
		"no-unused-vars": "off",
	},
	overrides: [
		{
			files: [
				"**/__tests__/*.{j,t}s?(x)",
				"**/tests/unit/**/*.spec.{j,t}s?(x)",
			],
			env: {
				jest: true,
			},
		},
		{
			files: ["./mock/*.{j,t}s?(x)", "./src/utils/mock/*.{j,t}s?(x)"],
			rules: {
				"no-var": ["off"],
				"@typescript-eslint/no-var-requires": ["off"],
			},
		},
	],
};
