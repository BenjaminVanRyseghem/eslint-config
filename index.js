/* eslint-disable max-lines */
// eslint-disable-next-line filenames/match-regex
module.exports = {
	parserOptions: {
		ecmaVersion: 13,
		sourceType: "module",
	},
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	extends: [
		"plugin:prettier/recommended",
		"plugin:unicorn/recommended",
	],
	plugins: ["filenames", "jsdoc", "sort-imports-es6-autofix"],
	settings: {
		jsdoc: {
			avoidExampleOnConstructors: true,
			tagNamePreference: {
				returns: "return"
			}
		},
	},
	rules: {
		// http://eslint.org/docs/rules
		/**
		 * Possible Errors
		 */

		"for-direction": "error",
		"getter-return": "error",
		"no-await-in-loop": "error",
		"no-compare-neg-zero": "error",
		"no-cond-assign": ["error", "always"],
		"no-console": "error",
		"no-constant-condition": "error",
		"no-control-regex": "error",
		"no-debugger": "error",
		"no-dupe-args": "error",
		"no-dupe-keys": "error",
		"no-duplicate-case": "error",
		"no-empty": "error",
		"no-empty-character-class": "error",
		"no-ex-assign": "error",
		"no-extra-boolean-cast": "error",
		"no-extra-semi": "error",
		"no-func-assign": "error",
		"no-inner-declarations": "error",
		"no-invalid-regexp": "error",
		"no-obj-calls": "error",
		"no-prototype-builtins": "error",
		"no-sparse-arrays": "error",
		"no-template-curly-in-string": "error",
		"no-unexpected-multiline": "error",
		"no-unreachable": "error",
		"no-unsafe-finally": "error",
		"no-unsafe-negation": "error",
		"use-isnan": "error",
		"valid-jsdoc": "off",
		"valid-typeof": "error",

		/**
		 * Best Practices
		 */

		"accessor-pairs": "error",
		"array-callback-return": "error",
		"block-scoped-var": "error",
		"class-methods-use-this": "off",
		complexity: "error",
		"consistent-return": "error",
		curly: ["error", "multi-line"],
		"default-case": "error",
		"dot-location": "off",
		"dot-notation": [
			"error",
			{
				allowKeywords: true
			}
		],
		eqeqeq: "error",
		"guard-for-in": "error",
		"no-alert": "error",
		"no-caller": "error",
		"no-case-declarations": "error",
		"no-div-regex": "error",
		"no-else-return": "error",
		"no-empty-function": "off",
		"no-empty-pattern": "error",
		"no-eq-null": "error",
		"no-eval": "error",
		"no-extend-native": "error",
		"no-extra-bind": "error",
		"no-extra-label": "error",
		"no-fallthrough": "error",
		"no-floating-decimal": "error",
		"no-global-assign": "error",
		"no-implicit-coercion": "off",
		"no-implicit-globals": "error",
		"no-implied-eval": "error",
		"no-invalid-this": "error",
		"no-iterator": "error",
		"no-labels": "error",
		"no-lone-blocks": "error",
		"no-loop-func": "error",
		"no-magic-numbers": "off",
		"no-multi-str": "error",
		"no-new": "error",
		"no-new-func": "error",
		"no-new-wrappers": "error",
		"no-octal": "error",
		"no-octal-escape": "error",
		"no-param-reassign": "error",
		"no-proto": "error",
		"no-redeclare": "error",
		"no-restricted-properties": "error",
		"no-return-assign": "error",
		"no-return-await": "error",
		"no-script-url": "error",
		"no-self-assign": "error",
		"no-self-compare": "error",
		"no-sequences": "error",
		"no-throw-literal": "error",
		"no-unmodified-loop-condition": "error",
		"no-unused-expressions": "error",
		"no-unused-labels": "error",
		"no-useless-call": "error",
		"no-useless-concat": "error",
		"no-useless-escape": "error",
		"no-useless-return": "error",
		"no-void": "error",
		"no-warning-comments": "off",
		"no-with": "error",
		"prefer-promise-reject-errors": "error",
		radix: "error",
		"require-await": "error",
		"vars-on-top": "error",
		"wrap-iife": ["error", "any"],
		yoda: "error",

		/**
		 * Strict mode
		 */

		strict: ["error", "never"],

		/**
		 * Variables
		 */

		"init-declarations": "error",
		"no-catch-shadow": "error",
		"no-delete-var": "error",
		"no-label-var": "error",
		"no-restricted-globals": "error",
		"no-shadow": "error",
		"no-shadow-restricted-names": "error",
		"no-undef": "error",
		"no-undef-init": "error",
		"no-undefined": "off",
		"no-unused-vars": [
			"error",
			{
				vars: "all",
				args: "after-used",
				argsIgnorePattern: "^_",
				varsIgnorePattern: "^_"
			}
		],
		"no-use-before-define": ["error", "nofunc"],

		/**
		 * Node.js and CommonJS
		 */

		"callback-return": "error",
		"global-require": "error",
		"handle-callback-err": "error",
		"no-buffer-constructor": "error",
		"no-mixed-requires": "error",
		"no-new-require": "error",
		"no-path-concat": "error",
		"no-process-env": "error",
		"no-process-exit": "error",
		"no-restricted-modules": "error",
		"no-sync": "error",

		/**
		 * Stylistic Issues
		 */

		camelcase: [
			"error",
			{
				properties: "always"
			}
		],
		"capitalized-comments": "off",
		"consistent-this": "off",
		"eol-last": "error",
		"func-name-matching": "error",
		"func-names": ["error", "as-needed"],
		"func-style": [
			"error",
			"declaration",
			{
				allowArrowFunctions: true
			}
		],
		"id-blacklist": "error",
		"id-length": [
			"error",
			{
				exceptions: ["x", "y", "i", "j", "t", "_"]
			}
		],
		"id-match": "error",
		"line-comment-position": "off",
		"linebreak-style": "error",
		"lines-around-comment": [
			"error",
			{
				beforeBlockComment: true,
				beforeLineComment: true,
				allowBlockStart: true,
				allowClassStart: true,
				allowObjectStart: true
			}
		],
		"lines-between-class-members": ["error", "always"],
		"max-depth": "error",
		"max-len": [
			"error",
			{
				code: 120,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true
			}
		],
		"max-lines": "error",
		"max-nested-callbacks": "error",
		"max-params": "error",
		"max-statements": [
			"error",
			{
				max: 16
			}
		],
		"max-statements-per-line": [
			"error",
			{
				max: 2
			}
		],
		"multiline-comment-style": ["error", "starred-block"],
		"new-cap": [
			"error",
			{
				newIsCap: true
			}
		],
		"no-array-constructor": "error",
		"no-bitwise": "error",
		"no-continue": "off",
		"no-inline-comments": "off",
		"no-lonely-if": "error",
		"no-mixed-operators": "error",
		"no-multi-assign": "error",
		"no-multiple-empty-lines": [
			"error",
			{
				max: 1
			}
		],
		"no-negated-condition": "error",
		"no-nested-ternary": "error",
		"no-new-object": "error",
		"no-plusplus": "off",
		"no-restricted-syntax": "error",
		"no-tabs": "off",
		"no-ternary": "off",
		"no-underscore-dangle": [
			"error",
			{
				allowAfterThis: true,
				allowAfterSuper: true
			}
		],
		"no-unneeded-ternary": "error",
		"nonblock-statement-body-position": "error",
		"one-var": ["error", "never"],
		"one-var-declaration-per-line": "error",
		"operator-assignment": "error",
		"operator-linebreak": "error",
		"padded-blocks": ["error", "never"],
		"padding-line-between-statements": "error",
		"quote-props": ["error", "as-needed"],
		quotes: ["error", "double"],
		"require-jsdoc": "off",
		semi: ["error", "always"],

		"semi-style": "error",
		"sort-keys": "off",
		"sort-vars": "error",


		"unicode-bom": "error",
		"wrap-regex": "error",

		/**
		 * ECMAScript 6
		 */

		"arrow-body-style": ["error", "as-needed"],
		"arrow-parens": ["error", "always"],

		"constructor-super": "error",
		"no-class-assign": "error",
		"no-confusing-arrow": [
			"error",
			{
				allowParens: true
			}
		],
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-duplicate-imports": "error",
		"no-new-symbol": "error",
		"no-restricted-imports": "off",
		"no-this-before-super": "error",
		"no-useless-computed-key": "error",
		"no-useless-constructor": "error",
		"no-useless-rename": "error",
		"no-var": "error",
		"object-shorthand": "error",
		"prefer-arrow-callback": "error",
		"prefer-const": "off",
		"prefer-destructuring": [
			"error",
			{
				VariableDeclarator: {
					array: true,
					object: true
				},
				AssignmentExpression: {
					array: false,
					object: false
				}
			}
		],
		"prefer-numeric-literals": "error",
		"prefer-rest-params": "off",
		"prefer-spread": "error",
		"prefer-template": "error",
		"require-yield": "error",
		"sort-imports-es6-autofix/sort-imports-es6": [
			"error",
			{
				ignoreCase: true
			}
		],
		"symbol-description": "error",

		/**
		 * Filenames
		 */

		"filenames/match-regex": [
			"error",
			"^([a-z0-9]+)([A-Z][a-z0-9]+)*(-test|\\.test|\\.stories)?$"
		],
		"filenames/match-exported": ["error", "camel"],

		/**
		 * JSDOC
		 */
		"jsdoc/check-alignment": "error",
		"jsdoc/check-examples": "off",
		"jsdoc/check-indentation": "off",
		"jsdoc/check-param-names": "error",
		"jsdoc/check-syntax": "error",
		"jsdoc/check-tag-names": "error",
		"jsdoc/check-types": "error",
		"jsdoc/implements-on-classes": "error",
		"jsdoc/match-description": "error",
		"jsdoc/no-types": "off",
		"jsdoc/no-undefined-types": "error",
		"jsdoc/require-description": "off",
		"jsdoc/require-description-complete-sentence": "off",
		"jsdoc/require-example": "off",
		"jsdoc/require-hyphen-before-param-description": "error",
		"jsdoc/require-jsdoc": [
			"error",
			{
				require: {
					ArrowFunctionExpression: false,
					ClassDeclaration: true,
					FunctionExpression: false,
					MethodDefinition: false
				}
			}
		],
		"jsdoc/require-param": "error",
		"jsdoc/require-param-description": "error",
		"jsdoc/require-param-name": "error",
		"jsdoc/require-param-type": "error",
		"jsdoc/require-returns": "error",
		"jsdoc/require-returns-check": "error",
		"jsdoc/require-returns-description": "off",
		"jsdoc/require-returns-type": "error",
		"jsdoc/valid-types": "error",

		/**
		 * Unicorn
		 */

		"unicorn/custom-error-definition": "error",
		"unicorn/consistent-function-scoping": "error",
		"unicorn/explicit-length-check": "off",
		// Incompatible with prettier:
		"unicorn/number-literal-case": "off",
		"unicorn/filename-case": ["error",
			{
				"case": "camelCase"
			}
		],
		"unicorn/import-style": "error",
		"unicorn/no-array-callback-reference": "error",
		"unicorn/no-array-for-each": "error",
		"unicorn/no-array-method-this-argument": "error",
		"unicorn/no-array-reduce": "error",
		"unicorn/no-document-cookie": "error",
		"unicorn/no-empty-file": "error",
		"unicorn/no-hex-escape": "error",
		"unicorn/no-instanceof-array": "error",
		"unicorn/no-invalid-remove-event-listener": "error",
		"unicorn/no-nested-ternary": "error",
		"unicorn/no-new-array": "error",
		"unicorn/no-new-buffer": "error",
		"unicorn/no-null": "off",
		"unicorn/no-object-as-default-parameter": "error",
		"unicorn/no-process-exit": "error",
		"unicorn/no-static-only-class": "error",
		"unicorn/no-thenable": "off",
		"unicorn/no-this-assignment": "error",
		"unicorn/no-unreadable-array-destructuring": "error",
		"unicorn/no-useless-fallback-in-spread": "error",
		"unicorn/no-useless-length-check": "error",
		"unicorn/no-useless-promise-resolve-reject": "error",
		"unicorn/no-useless-spread": "error",
		"unicorn/no-useless-undefined": "off",
		"unicorn/no-zero-fractions": "error",
		"unicorn/prefer-add-event-listener": "error",
		"unicorn/prefer-array-find": "error",
		"unicorn/prefer-array-flat": "error",
		"unicorn/prefer-array-flat-map": "error",
		"unicorn/prefer-array-index-of": "error",
		"unicorn/prefer-array-some": "error",
		"unicorn/prefer-at": "error",
		"unicorn/prefer-string-replace-all": "error",
		"unicorn/prefer-code-point": "error",
		"unicorn/prefer-date-now": "error",
		"unicorn/prefer-default-parameters": "error",
		"unicorn/prefer-dom-node-append": "error",
		"unicorn/prefer-dom-node-dataset": "error",
		"unicorn/prefer-dom-node-remove": "error",
		"unicorn/prefer-dom-node-text-content": "error",
		"unicorn/prefer-export-from": "error",
		"unicorn/prefer-includes": "error",
		"unicorn/prefer-json-parse-buffer": "error",
		"unicorn/prefer-keyboard-event-key": "error",
		"unicorn/prefer-math-trunc": "error",
		"unicorn/prefer-modern-dom-apis": "error",
		"unicorn/prefer-module": "error",
		"unicorn/prefer-negative-index": "error",
		"unicorn/prefer-number-properties": "error",
		"unicorn/prefer-object-from-entries": "error",
		"unicorn/prefer-prototype-methods": "error",
		"unicorn/prefer-query-selector": "error",
		"unicorn/prefer-reflect-apply": "error",
		"unicorn/prefer-regexp-test": "error",
		"unicorn/prefer-set-has": "error",
		"unicorn/prefer-spread": "error",
		"unicorn/prefer-string-slice": "error",
		"unicorn/prefer-string-starts-ends-with": "error",
		"unicorn/prefer-string-trim-start-end": "error",
		"unicorn/prefer-switch": "error",
		"unicorn/prefer-ternary": "error",
		"unicorn/prefer-type-error": "error",
		"unicorn/prevent-abbreviations": ["error", {
			allowList: {
				args: true,
				fn: true
			}
		}],
		"unicorn/relative-url-style": "error",
		"unicorn/require-array-join-separator": "error",
		"unicorn/require-number-to-fixed-digits-argument": "error",
		"unicorn/template-indent": "error",
		"unicorn/text-encoding-identifier-case": "error",
		"unicorn/throw-new-error": "error",
	},
	overrides: [{
		files: ["*.stories.js"],
		rules: {
			"jsdoc/require-jsdoc": "off"
		}
	}]
};
