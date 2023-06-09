module.exports = {
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {ecmaVersion: 'latest', sourceType: 'module'},
    plugins: ['react-refresh', 'perfectionist'],
    rules: {
        'perfectionist/sort-objects': [
            'error',
            {
                type: 'line-length',
                order: 'desc',
            },
        ],
        'react-refresh/only-export-components': 'warn',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "comma-dangle": ["error", "only-multiline"],
        "react/prop-types": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/ban-ts-comment": "error",
        "@typescript-eslint/no-non-null-assertion": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "@typescript-eslint/no-var-reqiures": "off",
        "react/jsx-uses-react": "off",
        "semi": "off",
        "import/no-unresolved": 0,
        "import/named": 0,
        "@typescript-eslint/semi": ["warn"],
        "@typescript-eslint/no-explicit-any": ["error"],
        "@typescript-eslint/no-unused-vars": 2,
        "@typescript-eslint/no-empty-interface": [
            "error",
            {
                "allowSingleExtends": true
            }
        ],
        "react/react-in-jsx-scope": 0,
        "react/display-name": 0
    },
}
