/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "plugins": [
        "eslint-plugin-jsdoc",
        "eslint-plugin-prefer-arrow",
        "@typescript-eslint"
    ],
    "rules": {
        "@typescript-eslint/adjacent-overload-signatures": "warn",
        "@typescript-eslint/array-type": [
            "warn",
            {
                "default": "array"
            }
        ],
        "@typescript-eslint/ban-types": [
            "warn",
            {
                "types": {
                    "Object": {
                        "message": "Avoid using the `Object` type. Did you mean `object`?"
                    },
                    "Function": {
                        "message": "Avoid using the `Function` type. Prefer a specific function type, like `() => void`."
                    },
                    "Boolean": {
                        "message": "Avoid using the `Boolean` type. Did you mean `boolean`?"
                    },
                    "Number": {
                        "message": "Avoid using the `Number` type. Did you mean `number`?"
                    },
                    "String": {
                        "message": "Avoid using the `String` type. Did you mean `string`?"
                    },
                    "Symbol": {
                        "message": "Avoid using the `Symbol` type. Did you mean `symbol`?"
                    }
                }
            }
        ],
        "@typescript-eslint/consistent-type-assertions": "warn",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-ordering": ["warn",  {
            "default": [
                "public-static-field",
                "public-static-get",
                "public-static-set",
                "public-static-method",

                "protected-static-field",
                ["protected-static-get",
                "protected-static-set"],
                "protected-static-method",

                "private-static-field",
                ["private-static-get",
                "private-static-set"],
                "private-static-method",

                "public-field",
                ["public-get",
                "public-set"],

                "protected-field",
                ["protected-get",
                "protected-set"],

                "private-field",
                ["private-get",
                "private-set"],

                "constructor",
                "public-method",
                "protected-method",
                "private-method",
            ]
          }
        ],
        "@typescript-eslint/naming-convention": [
            "warn",
            {
                "selector": "interface",
                "format": ["PascalCase"],
                "custom": {
                    "regex": "^I[A-Z]",
                    "match": true
                }
            }
        ],
        "@typescript-eslint/no-empty-function": "warn",
        "@typescript-eslint/no-empty-interface": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-inferrable-types" : "off",
        "@typescript-eslint/no-misused-new": "warn",
        "@typescript-eslint/no-namespace": "warn",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/no-shadow": [
            "warn",
            {
                "hoist": "all"
            }
        ],
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-this-alias": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unused-expressions": "warn",
        "@typescript-eslint/no-floating-promises": "warn",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "warn",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/prefer-for-of": "warn",
        "@typescript-eslint/prefer-function-type": "warn",
        "@typescript-eslint/prefer-namespace-keyword": "warn",
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/semi": ["warn"],
        "@typescript-eslint/triple-slash-reference": [
            "warn",
            {
                "path": "always",
                "types": "prefer-import",
                "lib": "always"
            }
        ],
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/unified-signatures": "warn",
        "@typescript-eslint/no-unnecessary-type-assertion": "off",
        "arrow-parens": "warn",
        "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
        "comma-dangle": "off",
        "complexity": "off",
        "constructor-super": "warn",
        "curly": "warn",
        "dot-notation": "off",
        "eqeqeq": [
            "warn",
            "smart"
        ],
        "guard-for-in": "warn",
        "id-denylist": [
            "warn",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "warn",
        "indent": "off",
        "jsdoc/check-alignment": "warn",
        "jsdoc/check-indentation": "warn",
        "jsdoc/newline-after-description": "warn",
        "max-classes-per-file": "off",
        "new-parens": "warn",
        "no-bitwise": "warn",
        "no-caller": "warn",
        "no-cond-assign": "warn",
        "no-console": "warn",
        "no-debugger": "warn",
        "no-empty": "warn",
        "no-empty-function": "off",
        "no-eval": "warn",
        "no-fallthrough": "off",
        "no-invalid-this": "off",
        "no-new-wrappers": "warn",
        "no-shadow": "warn",
        "no-throw-literal": "warn",
        "no-trailing-spaces": "warn",
        "no-undef-init": "warn",
        "no-underscore-dangle": "off",
        "no-unsafe-finally": "warn",
        "no-unused-expressions": "warn",
        "no-unused-labels": "warn",
        "no-use-before-define": "off",
        "no-var": "warn",
        "object-shorthand": "warn",
        "one-var": [
            "warn",
            "never"
        ],
        "prefer-arrow/prefer-arrow-functions": "off",
        "prefer-const": "warn",
        "prefer-rest-params": "off",
        "radix": "warn",
        "spaced-comment": [
            "warn",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ],
        "use-isnan": "warn",
        "valid-typeof": "off"
    }
};