module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'tpconfig'
    ],
    parserOptions: {
        parser: 'babel-eslint',
        sourceType: 'module'
    },
    globals: {
        _: 'readonly',
        axios: 'readonly'
    }
};
