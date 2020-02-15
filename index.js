module.exports = {
    extends: 'airbnb',
    env: {
        es6: true,
        browser: true,
    },
    settings: {
        react: {
            pragma: 'h',
            version: 'preact'
        }
    },
    parserOptions: {
        ecmaVersion: 2020,
        ecmaFeatures: {
            modules: true,
            jsx: true
        }
    },
    rules: {
        indent: ['error', 4, {
            SwitchCase: 1
        }],
        'max-len': ['error', 100, 4, {
            ignoreUrls: true,
            ignoreComments: true,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true
        }],
        'max-classes-per-file': 'off',
        'object-curly-newline': 'off',
        'operator-linebreak': ['error', 'after', { overrides: { '?': 'before', ':': 'before' } }],
        'no-unused-vars': ['error', { varsIgnorePattern: '^h$' }],
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'react/no-unused-state': 'off',
        'react/destructuring-assignment': 'off',
        'react/no-unknown-property': ['warn', { ignore: ['class'] }],
        'react/jsx-filename-extension': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
    }
};
