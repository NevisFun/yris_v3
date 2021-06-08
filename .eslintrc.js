/*
 * @Author: your name
 * @Date: 2021-06-05 23:18:11
 * @LastEditTime: 2021-06-06 09:56:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yris_v3\.eslintrc.js
 */
/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:18:46
 * @modify date 2021-06-06 12:27:46
 * @desc ESLint 代码检查规范 https://eslint.org/docs/user-guide/getting-started
 *       Prettier 代码风格规范 https://prettier.io/docs/en/options.html
 */

module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  parserOptions: {
    parser: '@babel/eslint-parser'
  },

  rules: {
    'no-console': 0,
    'no-debugger': 0,
    quotes: [1, 'single'],
    strict: 2
  }
};
