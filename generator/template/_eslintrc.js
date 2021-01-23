module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard',
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
