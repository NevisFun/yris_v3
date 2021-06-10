/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:18:46
 * @modify date 2021-06-09 20:55:55
 * @desc ESLint 代码检查规范 https://eslint.org/docs/user-guide/getting-started
 *       Prettier 代码风格规范 https://prettier.io/docs/en/options.html
 */

module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/vue3-recommended', 'eslint:recommended'],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    //ESLint规则
    'no-console': 0,
    'no-debugger': 0,
    quotes: [1, 'single'],
    strict: 2,

    //代码美化规则 https://eslint.vuejs.org/rules/
    'vue/singleline-html-element-content-newline': 0,
    // [
    //   'error',
    //   {
    //     ignoreWhenNoAttributes: true,
    //     ignoreWhenEmpty: true,
    //     ignores: ['pre', 'textarea', 'router-link']
    //   }
    // ],
    'vue/max-attributes-per-line': 0,
    // [
    //   'error',
    //   {
    //     singleline: { max: 5, allowFirstLine: true },
    //     multiline: { max: 5, allowFirstLine: false }
    //   }
    // ],
    'vue/html-self-closing': 0
    // ['error', { html: { normal: 'never', void: 'always' }, canvas: 'never' }]
  }
};
