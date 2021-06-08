/*
 * @Author: your name
 * @Date: 2021-06-05 10:19:08
 * @LastEditTime: 2021-06-06 09:53:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \yris_v3\vue.config.js
 */
/**
 * @author wang.chaofeng
 * @email hzspaces@126.com
 * @create date 2021-06-05 23:05:02
 * @modify date 2021-06-08 12:49:59
 * @desc VueCli配置 参考https://cli.vuejs.org/zh/config
 */

module.exports = {
  devServer: {
    port: 8088,
    open: true
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  }
};
